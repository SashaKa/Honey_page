
const hamburger = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector ('.mobile-menu')
const buttonOne = document.getElementById('btn-1')
const buttonTwo = document.getElementById('btn-2')
const buttonThree = document.getElementById('btn-3')
const attestate = document.querySelector('.attestate')
const sertificate = document.querySelector('.sertificate')
const reward = document.querySelector('.reward')
const showDocument = document.querySelector('.document-show')
const closeBtn = document.querySelector('.close-btn')
const closeBtn2 = document.querySelector('.close-btn2')
const closeBtn3 = document.querySelector('.close-btn3')


hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('menu-on')) {
        hamburger.classList.add('menu-on')
        mobileMenu.classList.add('mobile-menu-on')
    } else if (hamburger.classList.contains('menu-on')) {
        hamburger.classList.remove('menu-on')
        mobileMenu.classList.remove('mobile-menu-on')
    }
})
buttonOne.addEventListener('click', () => {
    attestate.classList.add('document-show')
    })
buttonTwo.addEventListener('click', () => {
    sertificate.classList.add('document-show')
})
buttonThree.addEventListener('click', () => {
    reward.classList.add('document-show')
})
closeBtn.addEventListener('click', () => {
    attestate.classList.remove('document-show')
})
closeBtn2.addEventListener('click', () => {
    sertificate.classList.remove('document-show')
})
closeBtn3.addEventListener('click', () => {
    reward.classList.remove('document-show')
})

