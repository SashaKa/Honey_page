
const hamburger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector ('.mobile-menu')

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('menu-on')) {
        hamburger.classList.add('menu-on')
        mobileMenu.classList.add('mobile-menu-on')
    } else if (hamburger.classList.contains('menu-on')) {
        hamburger.classList.remove('menu-on')
        mobileMenu.classList.remove('mobile-menu-on')
    }
})
