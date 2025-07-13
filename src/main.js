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