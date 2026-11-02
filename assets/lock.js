// أزرار الرئيسية: تطلب رمز الدخول مرة واحدة على الجهاز
(function () {
  var CODE = "2026", lock = document.getElementById("lock"), form = document.getElementById("lock-form"),
      input = document.getElementById("lock-code"), err = document.getElementById("lock-err"), target = null;
  function unlocked() { try { return localStorage.getItem("chem-unlocked") === "1"; } catch (e) { return false; } }
  function open(link) { target = link; err.hidden = true; input.value = ""; lock.hidden = false; setTimeout(function () { input.focus(); }, 30); }
  function go() { if (!target) return; if (target.target === "_blank") window.open(target.href, "_blank", "noopener"); else location.href = target.href; }
  document.querySelectorAll("[data-locked]").forEach(function (a) {
    a.addEventListener("click", function (e) { if (unlocked()) return; e.preventDefault(); open(a); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value.trim() === CODE) { try { localStorage.setItem("chem-unlocked", "1"); } catch (x) {} lock.hidden = true; go(); }
    else { err.hidden = false; form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake"); input.select(); }
  });
  document.getElementById("lock-x").onclick = function () { lock.hidden = true; };
  lock.addEventListener("click", function (e) { if (e.target === lock) lock.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lock.hidden = true; });
  if (location.hash === "#locked" && !unlocked()) open(document.querySelector("a[href='study.html']"));
})();
