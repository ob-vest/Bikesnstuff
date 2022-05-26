const primaryNav = document.querySelector("nav ul")
const navToggle = document.querySelector(".mobile-nav-toggle")
const navToggleIcon =  navToggle.querySelector("a")


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
        navToggleIcon.className = 'fa-solid fa-bars'
    } else {
        primaryNav.setAttribute('data-visible', true)
        navToggleIcon.className = 'fa-solid fa-xmark'
    }
});