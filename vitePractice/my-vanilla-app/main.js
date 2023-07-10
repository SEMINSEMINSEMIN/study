import './style.css'
// Glob import
const modules = import.meta.glob("./components/*.js"); 

for (const path in modules) {
  modules[path]();
}

// dynamic import
// await import("./components/counter.js");
// await import("./components/navigation.js");