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
(() => {
	let arrowElement = document.querySelector(".arrow");
	let svgCircleElement = arrowElement.querySelector("svg #circle-2");
	const svgMath = 131.88;
	window.addEventListener("scroll", () => {
		let htmlScrollTop = document.documentElement.scrollTop;
		if(htmlScrollTop >= 23) {
			arrowElement.classList.add("arrow-active");
			svgCircleElement.style.strokeDashoffset = `${svgMath - ((htmlScrollTop / 4416) * 131.88)}`;
		}else {
			arrowElement.classList.remove("arrow-active");
		}
	});
})();
function checkInclude(searchBodyLink, searchInputValue) {
	return searchBodyLink.includes(searchInputValue);
}
(() => {
	var cartMenuFont = document.querySelector(".cart__menu-font");
	var searchElement = document.querySelector(".search");
	var searchBodyElement = searchElement.querySelector(".search__body");
	var searchInput = searchBodyElement.querySelector("input");
	var searchBodyList = searchBodyElement.querySelector(".search__body-list");
	var searchBodyListItem = searchBodyList.querySelectorAll(".search__body-list-item");
	searchInput.addEventListener("input", (e) => {
			searchBodyListItem.forEach(v => {
			var searchBodyLink = v.querySelector(".search__body-list-link");
			var searchBodyLinkValue = searchBodyLink.textContent;
			searchBodyLinkValue = searchBodyLinkValue.replace(/\snew$|\shot$/i, "");
			if(!checkInclude(searchBodyLinkValue.toLowerCase(), e.target.value.toLowerCase())) {
				v.hidden = true;
			}else {
				v.hidden = false;
			}
			});
	});	
	cartMenuFont.addEventListener("click", () => {
		searchElement.classList.toggle("search-zindex");
		searchBodyElement.classList.toggle("search__body-active");
		setTimeout(() => {
			searchElement.classList.toggle("search-active");
		}, 1000)
	});
	var buttonDevide = searchBodyList.querySelectorAll(".search__body-list-devide-button");
	var productItem = searchBodyList.querySelectorAll(".search__body-list-product-item");
	buttonDevide.forEach(v => {
		v.addEventListener("click", () => {
			var productWrap = v.parentElement.nextElementSibling;
			if(productWrap.classList.contains("effect-max-height")) {
				productWrap.classList.remove("effect-max-height");
				var productBox = productWrap.querySelectorAll(".search__body-list-product-box");
				productBox.forEach(e => {
					e.classList.remove("effect-max-height");
				})
			}else {
				productWrap.classList.add("effect-max-height");
			}
		});
	})
	productItem.forEach(v => {
		v.addEventListener("click", (e) => {
			if(e.target.tagName != "BUTTON" && e.target.tagName != "I") return;
			var productBox = e.currentTarget.querySelector(".search__body-list-product-box");
			productBox.classList.toggle("effect-max-height");
		});
	})
})();