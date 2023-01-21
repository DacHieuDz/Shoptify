let boxElement = document.querySelector(".navbar__box");
let navbarElement = document.querySelector(".navbar");
let aElement = boxElement.querySelector(".navbar__box-center a");
window.onscroll = function() {
	if(document.documentElement.scrollTop < 262) {
		aElement.classList.remove("effect-margin");
		navbarElement.classList.remove("effect-fixed");
		boxElement.classList.remove("effect-height");
	}
	if(document.documentElement.scrollTop >= 262) {
		aElement.classList.add("effect-margin");
		navbarElement.classList.add("effect-fixed");
		boxElement.classList.add("effect-height");
	}
}

let buttonElement = boxElement.querySelector(".navbar__box-menu button");
let optionElement = navbarElement.nextElementSibling;
buttonElement.addEventListener("click", () => {
	optionElement.classList.toggle("option-effect");
});

function loadStorage() {
	if(!localStorage.getItem("data")) {
		let animationElement = document.querySelector(".animation");
		animationElement.classList.add("load-effect");
		localStorage.setItem("data", 1);	
	}
}
(() => {
	loadStorage();
})();



