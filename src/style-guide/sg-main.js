// Get all sections with an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener for scrolling
window.addEventListener("scroll", navScrollHighlighter);

function navScrollHighlighter() {
    let scrollY = window.scrollY;   //Get current Y scroll position

    // Loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        // If current scroll position matches current section position, add [data-link="active"] attribute to navigation link, else remove the attribute
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".sg-menu a[href*=" + sectionId + "]").setAttribute("data-link", "active");
        } else {
            document.querySelector(".sg-menu a[href*=" + sectionId + "]").removeAttribute("data-link");
        }
    });
}

// Theme Toggle
// const themeToggle = document.querySelector("#sg-theme-toggle");

// themeToggle.addEventListener("click", () => {
//     document.body.getAttribute("data-theme") === "light"
//     ? enableDarkTheme()
//     : enableLightTheme();
// });

// function enableDarkTheme() {
//     document.body.setAttribute("data-theme", "dark");
//     themeToggle.setAttribute("aria-label", "Switch to light theme");
// }

// function enableLightTheme() {
//     document.body.setAttribute("data-theme", "light");
//     themeToggle.setAttribute("aria-label", "Switch to dark theme");
// }

// function setThemePreference() {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       enableDarkTheme();
//       return;
//     }
//     enableLightTheme();
// }
  
// document.onload = setThemePreference();

// Theme Toggle with localStorage persistence
const themeToggle = document.querySelector("#djne-theme-toggle");

// Initialize theme on page load
initializeTheme();

themeToggle.addEventListener("click", () => {
    document.body.getAttribute("data-theme") === "light"
    ? enableDarkTheme()
    : enableLightTheme();
});

function enableDarkTheme() {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light theme");
    // Save preference to localStorage
    localStorage.setItem("theme-preference", "dark");
}

function enableLightTheme() {
    document.body.setAttribute("data-theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark theme");
    // Save preference to localStorage
    localStorage.setItem("theme-preference", "light");
}

function initializeTheme() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme-preference");
    
    if (savedTheme) {
        // Use saved preference
        savedTheme === "dark" ? enableDarkTheme() : enableLightTheme();
    } else {
        // No saved preference, use system preference
        setThemePreference();
    }
}

function setThemePreference() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkTheme();
        return;
    } else {
        enableLightTheme();
    }
}