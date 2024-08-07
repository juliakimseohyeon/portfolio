/* -------------------------------------------------------------------------- */
/*                   Function to safely open URL in new tab                   */
/* -------------------------------------------------------------------------- */
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export { openInNewTab };
