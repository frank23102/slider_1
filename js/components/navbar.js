document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".navlist");

    if (!menuIcon || !navList) return;

    // existing mobile-menu toggle…
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navList.classList.toggle("open");
    });

    // Close menu on link click…
    // only close on links that are *not* the dropdown parent
    navList.querySelectorAll("li:not(.has-dropdown) > a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("open");
            menuIcon.classList.remove("bx-x");
        });
    });

    // NEW: Toggle the dropdown on tap (only when mobile nav is open)
    document.querySelectorAll(".has-dropdown > a").forEach(parentLink => {
        parentLink.addEventListener("click", e => {
            if (navList.classList.contains("open")) {
                e.preventDefault();
                e.stopImmediatePropagation(); // ← prevent the global closer from firing
                parentLink.nextElementSibling.classList.toggle("open");
            }
        });
    });
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add("hide");
    } else {
        // Scrolling up
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
});