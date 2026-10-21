// events/manifest.js に列挙されたイベントパックを順番に同期読み込みする
window.eventDefs = window.eventDefs || [];
window.defineEvent = window.defineEvent || function (def) {
  window.eventDefs.push(def);
  return def;
};
(function () {
  var v = window.BUILD_CACHE_KEY ? ('?v=' + encodeURIComponent(window.BUILD_CACHE_KEY)) : '';
  (window.eventFiles || []).forEach(function (f) {
    document.write('<script src="events/' + f + v + '"><\/script>');
  });
})();

