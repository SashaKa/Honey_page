
const hamburger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector ('.mobile-menu')
const docButton = document.querySelector ('.name-document')
const docShow = document.querySelector ('.doc-wrap')

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('menu-on')) {
        hamburger.classList.add('menu-on')
        mobileMenu.classList.add('mobile-menu-on')
    } else if (hamburger.classList.contains('menu-on')) {
        hamburger.classList.remove('menu-on')
        mobileMenu.classList.remove('mobile-menu-on')
    }
})
docButton.addEventListener('click', () => {
    if(!docShow.classList.contains('document-show')) {
        docShow.classList.add('document-show')
    } else if (docShow.classList.contains('document-show')) {
        docShow.classList.remove('document-show')
    }
})
