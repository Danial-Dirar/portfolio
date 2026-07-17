/**
 * Blocking anti-FOUC script. Emitted from the SERVER layout (not a client
 * component) so React 19 never tries to render it during a client render —
 * which is what triggered the next-themes "script tag" console error.
 *
 * Runs before paint: reads the saved theme (default dark) and sets the
 * `.dark` class + color-scheme on <html> so there's no flash.
 */
export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t?t==='dark':true;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`;
