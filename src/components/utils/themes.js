/* -------------------------------------------------------------------------- */
/*                          Function to set the theme                         */
/* -------------------------------------------------------------------------- */
const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

/* -------------------------------------------------------------------------- */
/*                  Function to keep the same theme on reload                 */
/* -------------------------------------------------------------------------- */
const keepTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "theme-dark" || !theme) {
    setTheme("theme-dark"); // If there is no default Theme, default to dark-mode
  } else {
    setTheme("theme-light");
  }
};

export { setTheme, keepTheme };
