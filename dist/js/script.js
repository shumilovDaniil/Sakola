const btn = document.querySelector('.header__burger')
const menu = document.querySelector('.header__list')

btn.addEventListener('click', () => {
	menu.classList.toggle('active')
	document.body.classList.toggle('active')
})
