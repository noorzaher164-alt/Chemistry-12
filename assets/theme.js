const root = document.documentElement;
const btn = document.getElementById("theme");
function isLight() { return root.dataset.theme !== "dark"; }
function label() { btn.textContent = isLight() ? "🌙 غامق" : "☀ فاتح"; }
btn.onclick = () => { const next = isLight() ? "dark" : "light"; root.dataset.theme = next; try { localStorage.setItem("chem-theme", next); } catch (e) {} label(); };
label();
