const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggel-menu'),
closeMenu = document.getElementById('colse-menu')

toggleMenu.addEventListener('click',() => {
 navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',() => {
 navMenu.classList.remove('show')
})

