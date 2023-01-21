(() => {
	let modalElement = document.querySelector(".modal");
	if(!sessionStorage.getItem("data")) { 
		modalElement.style.display = "block";
		let modalBodyBox = document.querySelector(".modal__body-box-form");
		let modalForm = modalBodyBox.querySelector("form");
		let modalBody = modalElement.querySelector(".modal__body");
		modalForm.addEventListener("submit", (event) => {
		event.preventDefault();
		let inputElement = modalForm.querySelector("input");
		let spanElement = modalBodyBox.querySelector(".modal__body-box-form-check span"); 
		if(/\w+@gmail\.com/i.test(inputElement.value)) {
			 spanElement.style.color = "#28a745";
			 spanElement.textContent = "* Đăng nhâp thành công ! Vui lòng đợi web load";
			 setTimeout(() => {
			 	 modalBody.classList.add("modal-effect");
			 }, 1000);
			 setTimeout(() => {
			 	modalElement.classList.add("modal-effect");
			 }, 1500);
			 sessionStorage.setItem("data", 1);
		}
	});
	}	
})();
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
(() => {
	var linkElement = document.querySelectorAll(".energy a");
	// Event delegation : Thay vì add sự kiện tất cả con , chỉ cần add cha
	for(let i of linkElement) {
		i.addEventListener("click", (event) => {
			event.preventDefault();
		});
	}
})();
(() => {
	var mobileList = document.querySelector(".mobile__list");
	mobileList.addEventListener("click", (event) => {
		if(event.target.tagName != "A") return;
		event.preventDefault();
	});
})();
(() => {
	var mobileList = document.querySelector(".mobile__list");
	var mobileListItem = mobileList.querySelectorAll(".mobile__list-item");
	mobileListItem.forEach((e,i) => {
		e.dataset.id = i + 1;
	})	
	mobileList.addEventListener("click", (event) => {
		if(event.target.tagName != "A") return;
		if(event.target.className.includes("mobile__list-active")) return;
		var idLiElement = event.target.parentElement.dataset.id;
		var posHasActive = Array.from(mobileListItem).findIndex(e => e.firstElementChild.className.includes("mobile__list-active")) + 1;
		var activeDelete = mobileList.querySelector(`li:nth-child(${posHasActive})`);
		activeDelete.firstElementChild.classList.remove("mobile__list-active");
		event.target.classList.add("mobile__list-active");
		var sliderDelete = document.querySelector(`.mobile__body > div:nth-child(${posHasActive})`);
		sliderDelete.classList.remove("mobile-show");
		sliderDelete.classList.add("mobile-hidden");
		var sliderCurrent = document.querySelector(`.mobile__body > div:nth-child(${idLiElement})`);
		sliderCurrent.classList.remove("mobile-hidden");
		sliderCurrent.classList.add("mobile-show");
	});
})();