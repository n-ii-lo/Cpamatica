let textBlock = document.getElementsByClassName(".article-card__text");
let btn = document.querySelectorAll('.more-btn');
for (var i = 0; i < btn.length; i++) {

	btn[i].addEventListener("click", function (e) {
		this.parentNode.classList.toggle('showContent');
		e.target.style.display = 'none';
	});
};

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
const dropBlock = document.querySelector(".dropdown");
const dropBlockList = document.querySelector(".dropdown-list");


openDrop.addEventListener("click", function () {
	dropBlockList.classList.toggle('_active');
	dropBlock.classList.toggle('_active');
	openDrop.style.display = 'none';
	closeDrop.style.display = 'block';
});

closeDrop.addEventListener("click", function () {
	dropBlockList.classList.toggle('_active');
	dropBlock.classList.toggle('_active');
	openDrop.style.display = 'block';
	closeDrop.style.display = 'none';
});

// const shopCont = document.querySelector(".more-btn");

// shopCont.addEventListener("click", function (e) {
// 	document.querySelector(".article-card__text").classList.toggle('showContent');
// 	document.querySelector('.more-btn').style.display = 'none';
// });




