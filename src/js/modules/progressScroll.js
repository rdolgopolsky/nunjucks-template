function processScroll(progressLine) {
	let docElem = document.documentElement;
	let docBody = document.body;
	let scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
	let scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight;
	progressLine.style.width = scrollTop / scrollBottom * 100 + '%';
}

function initProgressBar(selector) {
	const progressBar = document.createElement("div");
	const progressLine = document.createElement("div");
	const elemWhere = document.querySelector(selector);
	progressBar.classList.add("progress-bar");
	progressBar.appendChild(progressLine);
	elemWhere.appendChild(progressBar);

	window.addEventListener('scroll', () => {
		processScroll(progressLine);
	});
}

export default initProgressBar;
