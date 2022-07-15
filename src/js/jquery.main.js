var $ = jQuery.noConflict();
jQuery(function () {
	isElementExist(".nav-drop", initSmartMenu);
	initCustomForms();
});

//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch (e) {
			console.log(e);
		}
	}
}

// initialize custom form elements (checkbox, radio, select) https://github.com/w3co/jcf
function initCustomForms() {
	jcf.setOptions('Select', {
		maxVisibleItems: 5, // visible dropdown items before scroll appear
		wrapNative: false,
	});
	jcf.replaceAll();
}

// smart menu init
function initSmartMenu() {
	var distanceBetweenMenuAndNav = jQuery(".header-menu-wrapper").offset().top + jQuery(".header-menu-wrapper").innerHeight() - jQuery(".nav").offset().top - jQuery(".nav").innerHeight();
	jQuery(".header-menu").smartmenus({
		collapsibleBehavior: "accordion",
		mainMenuSubOffsetY: distanceBetweenMenuAndNav
	});

	// changed date attribute to a class (need to reverse last item menu)
	jQuery('.header-menu').children().last().addClass('nav-sm-reverse');

	jQuery("body").mobileNav({
		menuActiveClass: "nav-active",
		menuOpener: ".nav-opener",
		hideOnClickOutside: true,
		menuDrop: ".nav-drop"
	}), "ontouchstart" in document.documentElement ||
	jQuery(window).on("resize orientationchange", function () {
		jQuery("body").removeClass("nav-active"), $.SmartMenus.hideAll();
	});
}




// Initialize video background Progress bar
function animate(cb, duration) {
	const fps = 60;
	const tick = 1000 / fps;
	const frames = Math.ceil(duration / tick);

	let then = performance.now();
	let frame = 0;

	function loop() {
		const now = performance.now();
		const delta = now - then;

		if (delta > tick) {
			then = now - (delta % tick);
			frame++;

			cb(frame / frames);
		}

		if (frame < frames) requestAnimationFrame(loop);
	}

	requestAnimationFrame(loop);
}
function initVideoBGProgress() {
	let videoPlayer = document.querySelector(".section-bg"),
		video = videoPlayer.querySelector(".video"),
		progressBar = videoPlayer.querySelector(".progress-bar-filled");

	//Progress bar
	video.addEventListener("play", () => {
		let videoDuration = video.duration * 1000;

		animate((progress) => {
			progressBar.style.width = `${progress.toFixed(5) * 100}%`;
		}, videoDuration);
	});

	video.addEventListener("ended", () => {
		video.play();
	});
}

function initCounter() {
	let windHeight = $(window).height();

	$(window).scroll(function () {
		let currentScrollPos = $(window).scrollTop();

		// <span timing="3000" counter="10000">0</span>

		$(".counter span").each(function () {
			let elem = $(this);
			let num = Number(elem.attr("counter"));
			let dur = Number(elem.attr("timing")) || 3000;
			let counterPosition = elem.offset().top - windHeight;

			if (counterPosition < currentScrollPos && !elem.hasClass("_visible")) {
				newCounter(elem, num, dur);
				elem.addClass("_visible");
			}
		});
	});

	function newCounter(elem, num, dur) {
		if (!Number.isInteger(num)) {
			elem.prop("Counter", 0).animate(
				{
					Counter: num,
				},
				{
					duration: dur,
					step: function (now) {
						elem.text(now.toFixed(2));
					},
				}
			);
		} else {
			elem.prop("Counter", 0).animate(
				{
					Counter: num,
				},
				{
					duration: dur,
					step: function (now) {
						let parts = now.toFixed(0).toString().split(".");
						parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						elem.text(parts.join("."));
					},
				}
			);
		}
	}
}

function returnFileSize(number) {
	if (number < 1024) {
		return number + 'bytes';
	} else if (number > 1024 && number < 1048576) {
		return (number / 1024).toFixed(1) + 'KB';
	} else if (number > 1048576) {
		return (number / 1048576).toFixed(1) + 'MB';
	}
}

function initCustomFileInput() {

	const forms = document.querySelectorAll("form");

	forms.forEach(function (form) {
		form.addEventListener('change', function (e) {
			let target = e.target;

			if (target.matches("input[type='file']")) {
				let label = target.nextElementSibling;
				let input = target;
				let files = input.files;

				if (files.length !== 0) {
					let list = document.createElement("ul");
					list.classList.add("files-list");

					for (var i = 0; i < files.length; i++) {
						let listElem = document.createElement('li');
						let fileName = files[i].name;
						let fileSize = returnFileSize(files[i].size);

						listElem.innerHTML = `File name: <b>${fileName}</b>, Size: <b>${fileSize}</b>`;

						list.appendChild(listElem);
					}

					if (label.matches("label")) {
						label.innerHTML = "";
						label.appendChild(list);
					}
				}
			}
		})
	})
}

function processScroll(progressLine) {
	let docElem = document.documentElement;
	let docBody = document.body;
	let scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
	let scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
		scrollPercent = scrollTop / scrollBottom * 100 + '%';
	progressLine.style.width = scrollPercent;
}

function initNewsPostProgress() {
	const progressBar = document.createElement("div");
	const progressLine = document.createElement("div");
	const header = document.querySelector(".page-header");
	progressBar.classList.add("pregress-bar");
	progressBar.appendChild(progressLine);
	header.appendChild(progressBar);

	window.addEventListener('scroll', () => {
		processScroll(progressLine);
	});
}

function wrap(parent, className = '') {
	const wrapper = document.createElement('span');
	wrapper.classList = className;
	parent.childNodes.forEach(ch => wrapper.appendChild(ch));
	parent.appendChild(wrapper);
}

function wrapNewsTitle() {
	document.querySelectorAll('.news-elem-title')
		.forEach(a => wrap(a));
}

function initQuantity() {
	let quantity = document.querySelector('.quantity');
	let minus = document.createElement('button');
	let plus = document.createElement('button');
	let input = quantity.querySelector('input');
	let value = parseInt(input.value);

	minus.classList.add('quantity-minus');
	minus.innerHTML = '-';
	plus.classList.add('quantity-plus');
	plus.innerHTML = '+';

	quantity.prepend(minus);
	quantity.appendChild(plus);

	minus.addEventListener('click', function () {
		if (value > 1) {
			value--;
			input.value = value;
		}
	});

	plus.addEventListener('click', function () {
		value++;
		input.value = value;
	});

}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

// custom helper function for debounce - how to work see https://codepen.io/Hyubert/pen/abZmXjm
// vendors/debounce.js

// library smartmenus (if you dont have menu in the project - just remove)
//= vendors/smartmenus.js

// jcf library select, radio, checkbox modules
//= vendors/jcf.js

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------
