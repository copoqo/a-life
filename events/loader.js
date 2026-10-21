// events/manifest.js に列挙されたイベントパックを順番に同期読み込みする
window.eventDefs = window.eventDefs || [];
window.defineEvent = window.defineEvent || function (def) {
  window.eventDefs.push(def);
  return def;
};
(function () {
  (window.eventFiles || []).forEach(function (f) {
    document.write('<script src="events/' + f + '"><\/script>');
  });
})();

