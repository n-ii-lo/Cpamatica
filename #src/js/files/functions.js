// More text
const moreBtn = document.querySelectorAll(".more-btn");

//============================================================================================

// Menu
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", function (e) {
	document.querySelector(".nav-bar__wrapper").classList.toggle('_active');
});

closeMenu.addEventListener("click", function (e) {
	document.querySelector(".nav-bar__wrapper").classList.toggle('_active');
});

//============================================
//Spoiller
const openSpollerBtn = document.getElementsByClassName('open-spoller');

for (var i = 0; i < openSpollerBtn.length; i++) {
	openSpollerBtn[i].addEventListener("click", function (e) {
		e.target.nextElementSibling.classList.toggle('_active');
	});
};
//============================================
//Dropdown

const openDrop = document.querySelector(".dropdown__circle-open");
const closeDrop = document.querySelector(".dropdown__circle-close");

openDrop.addEventListener("click", function (e) {
	document.querySelector(".dropdown-list").classList.toggle('_active');
	document.getElementsByClassName('dropdown__circle-open').style.display = 'none';
	document.getElementsByClassName('dropdown__circle-close').style.display = 'block';
});

closeDrop.addEventListener("click", function (e) {
	document.querySelector(".dropdown-list").classList.toggle('_active');
});