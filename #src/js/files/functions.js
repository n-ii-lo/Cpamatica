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
	document.querySelector(".dropdown").classList.toggle('_active');
	document.querySelector('.dropdown__circle-open').style.display = 'none';
	document.querySelector('.dropdown__circle-close').style.display = 'block';
});

closeDrop.addEventListener("click", function (e) {
	document.querySelector(".dropdown-list").classList.toggle('_active');
	document.querySelector(".dropdown").classList.toggle('_active');
	document.querySelector('.dropdown__circle-open').style.display = 'block';
	document.querySelector('.dropdown__circle-close').style.display = 'none';
});

// const shopCont = document.querySelector(".more-btn");

// shopCont.addEventListener("click", function (e) {
// 	document.querySelector(".article-card__text").classList.toggle('showContent');
// 	document.querySelector('.more-btn').style.display = 'none';
// });

const openMore = document.querySelectorAll('.more-btn');
if (openMore.length !== 0) {
	for (var i = 0; i < openMore.length; i++) {
		openMore[i].addEventListener('click', function () {
			document.querySelector(".article-card__text").classList.toggle('showContent');
			document.querySelector('.more-btn').style.display = 'none';
		});
	}
}



