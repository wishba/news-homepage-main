const nav = document.getElementById('nav')
const menuButton = document.getElementById('menuButton')
const closeButton = document.getElementById('closeButton')

menuButton.addEventListener('click', () => nav.classList.add('header__nav--opened'))
closeButton.addEventListener('click', () => nav.classList.remove('header__nav--opened'))