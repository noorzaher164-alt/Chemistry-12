// كل صفحة داخلية: من لم تُدخل الرمز تعود إلى الرئيسية لتُدخله
(function () {
  var ok = false; try { ok = localStorage.getItem("chem-unlocked") === "1"; } catch (e) {}
  if (!ok) { var root = document.currentScript.dataset.root || ""; location.replace(root + "index.html#locked"); }
})();
