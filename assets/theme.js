const root = document.documentElement;
const btn = document.getElementById("theme");
function isLight() { const t = root.dataset.theme; return t ? t === "light" : matchMedia("(prefers-color-scheme: light)").matches; }
function label() { btn.textContent = isLight() ? "🌙 غامق" : "☀ فاتح"; }
try { const saved = localStorage.getItem("chem-theme"); if (saved) root.dataset.theme = saved; } catch (e) {}
btn.onclick = () => { const next = isLight() ? "dark" : "light"; root.dataset.theme = next; try { localStorage.setItem("chem-theme", next); } catch (e) {} label(); };
label();
