// events/manifest.js に列挙されたイベントファイルを順番に同期読み込みする
(function () {
  (window.eventFiles || []).forEach(function (f) {
    document.write('<script src="events/' + f + '"><\/script>');
  });
})();
