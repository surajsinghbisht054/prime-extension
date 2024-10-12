import "./style.scss";
import $ from 'jquery';

window.$ = $;
window.jQuery = $;
// Toggle between light and dark theme
window.applyTheme = function (isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}
window.adaptTheme = function () {
  const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(isSystemDarkMode);
}
// import htmx from "htmx.org";