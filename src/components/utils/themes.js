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
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    console.log("Keeping Dark Theme");
  } else {
    setTheme("theme-light");
    console.log("Keeping light theme");
  }
};

export { setTheme, keepTheme };
