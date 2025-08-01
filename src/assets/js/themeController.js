function themeToggle() {
	var toggleEl = document.querySelector("[data-toggle-theme]");
	(function (theme = localStorage.getItem("theme")) {
		if (localStorage.getItem("theme")) {
			document.documentElement.setAttribute("data-theme", theme);
			if (toggleEl) {
				[...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
					el.classList.add(toggleEl.getAttribute("data-act-class"));
				});
			}
		}
	})();
	if (toggleEl) {
		[...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
			el.addEventListener("click", function () {
				var themesList = el.getAttribute("data-toggle-theme");
				if (themesList) {
					var themesArray = themesList.split(",");
					if (document.documentElement.getAttribute("data-theme") == themesArray[0]) {
						if (themesArray.length == 1) {
							document.documentElement.removeAttribute("data-theme");
							localStorage.removeItem("theme");
						} else {
							document.documentElement.setAttribute("data-theme", themesArray[1]);
							localStorage.setItem("theme", themesArray[1]);
						}
					} else {
						document.documentElement.setAttribute("data-theme", themesArray[0]);
						localStorage.setItem("theme", themesArray[0]);
					}
				}
				[...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
					el.classList.toggle(this.getAttribute("data-act-class"));
				});
			});
		});
	}
}
function themeBtn() {
	(function (theme = localStorage.getItem("theme")) {
		if (theme != undefined && theme != "") {
			if (localStorage.getItem("theme") && localStorage.getItem("theme") != "") {
				document.documentElement.setAttribute("data-theme", theme);
				var btnEl = document.querySelector("[data-set-theme='" + theme.toString() + "']");
				if (btnEl) {
					[...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
						el.classList.remove(el.getAttribute("data-act-class"));
					});
					if (btnEl.getAttribute("data-act-class")) {
						btnEl.classList.add(btnEl.getAttribute("data-act-class"));
					}
				}
			} else {
				var btnEl = document.querySelector("[data-set-theme='']");
				if (btnEl.getAttribute("data-act-class")) {
					btnEl.classList.add(btnEl.getAttribute("data-act-class"));
				}
			}
		}
	})();
	[...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
		el.addEventListener("click", function () {
			document.documentElement.setAttribute("data-theme", this.getAttribute("data-set-theme"));
			localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
			[...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
				el.classList.remove(el.getAttribute("data-act-class"));
			});
			if (el.getAttribute("data-act-class")) {
				el.classList.add(el.getAttribute("data-act-class"));
			}
		});
	});
}
function themeSelect() {
	(function (theme = localStorage.getItem("theme")) {
		if (localStorage.getItem("theme")) {
			document.documentElement.setAttribute("data-theme", theme);
			var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
			if (optionToggler) {
				[...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
					el.selected = true;
				});
			}
		}
	})();
	if (document.querySelector("select[data-choose-theme]")) {
		[...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
			el.addEventListener("change", function () {
				document.documentElement.setAttribute("data-theme", this.value);
				localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
				[...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem("theme") + "']")].forEach((el) => {
					el.selected = true;
				});
			});
		});
	}
}
function themeChange(attach = true) {
	if (attach === true) {
		document.addEventListener("DOMContentLoaded", function (event) {
			themeToggle();
			themeSelect();
			themeBtn();
		});
	} else {
		themeToggle();
		themeSelect();
		themeBtn();
	}
}
if (typeof exports != "undefined") {
	module.exports = { themeChange: themeChange };
} else {
	themeChange();
}
