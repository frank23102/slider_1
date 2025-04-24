 /**
 * navbar.js
 *
 * Handles the mobile menu toggle and link-click behavior
 * for the responsive navigation bar.
 */

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the menu (hamburger) icon and the navigation list
  const menuIcon = document.getElementById("menu-icon");
  const navList  = document.querySelector(".navlist");

  // Only proceed if both elements exist on the page
  if (!menuIcon || !navList) return;

  // --------------------------------------------------
  // 1. Toggle mobile menu open/close
  // --------------------------------------------------
  menuIcon.addEventListener("click", () => {
    // Swap between hamburger (bx-menu) and close (bx-x) icon
    menuIcon.classList.toggle("bx-x");
    // Slide the nav list in or out
    navList.classList.toggle("open");
  });

  // --------------------------------------------------
  // 2. Close mobile menu when any nav link is clicked
  // --------------------------------------------------
  const navLinks = navList.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");   // Hide the menu
      menuIcon.classList.remove("bx-x");  // Revert icon to hamburger
    });
  });
});