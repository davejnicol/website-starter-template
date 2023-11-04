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