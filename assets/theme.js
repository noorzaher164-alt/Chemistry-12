const root = document.documentElement;
const themeBtn = document.getElementById("theme");
function isLight() { return root.dataset.theme !== "dark"; }
function themeLabel() { themeBtn.textContent = isLight() ? "🌙 غامق" : "☀ فاتح"; }
themeBtn.onclick = () => { const next = isLight() ? "dark" : "light"; root.dataset.theme = next; try { localStorage.setItem("chem-theme", next); } catch (e) {} themeLabel(); };
themeLabel();
// ملء الشاشة: يظهر الزر فقط حيث يدعمه المتصفح
const fsBtn = document.getElementById("fs");
if (fsBtn) {
  if (!document.fullscreenEnabled) fsBtn.hidden = true;
  const fsLabel = () => { fsBtn.textContent = document.fullscreenElement ? "↙ تصغير الشاشة" : "⛶ ملء الشاشة"; };
  fsBtn.onclick = () => { (document.fullscreenElement ? document.exitFullscreen() : root.requestFullscreen()).catch(() => {}); };
  document.addEventListener("fullscreenchange", fsLabel); fsLabel();
}
