// IIFE
(() => {
	let cartButtonElement = document.querySelector(".cart__icon-btn");
	let overlayElement = document.querySelector(".overlay");
	let showoverElement = overlayElement.querySelector(".showoverlay");
	let xElement = overlayElement.querySelector(".showoverlay-x button");
	cartButtonElement.addEventListener("click", () => {
		overlayElement.classList.remove("overlay-response");
		overlayElement.classList.add("overlay-active");
		showoverElement.classList.remove("overlay-go-response");
		showoverElement.classList.add("overlay-go");	
	});
	xElement.addEventListener("click", () => {
		showoverElement.classList.remove("overlay-go");
		showoverElement.classList.add("overlay-go-response");
		setTimeout(() => {
			overlayElement.classList.add("overlay-response");
			overlayElement.classList.remove("overlay-active");
		}, 500);
	});
	overlayElement.addEventListener("click", () => {
		showoverElement.classList.remove("overlay-go");
		showoverElement.classList.add("overlay-go-response");
		setTimeout(() => {
			overlayElement.classList.add("overlay-response");
			overlayElement.classList.remove("overlay-active");
		}, 500);
	});
})();