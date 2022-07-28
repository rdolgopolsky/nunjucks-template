function newCounter(elem, num, dur) {
	let start // set on the first step to the timestamp provided
	const el = elem // get the element
	const final = num // parse out the final number
	const duration = dur // duration in ms
	let result

	const step = ts => {
		if (!start) {
			start = ts
		}
		// get the time passed as a fraction of total duration
		let progress = (ts - start) / duration

		if (!Number.isInteger(final)) {
			result = (progress * final).toFixed(2)
		} else {

			let now = (progress * final)

			let parts = now.toFixed(0).toString().split(".");
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			result = parts.join(".");
		}

		el.textContent = (result > final) ? final : result // set the text

		if (progress < 1) {
			// if we're not 100% complete, request another animation frame
			requestAnimationFrame(step)
		}
	}

// start the animation
	requestAnimationFrame(step)
}

export function initCounters(className) {
	let windHeight = window.innerHeight;

	window.addEventListener('scroll', () => {
		let currentScrollPos = window.scrollY;

		document.querySelectorAll(className)
			.forEach(counter => {
				let elem = counter;
				let num = Number(elem.dataset.counter) || Number(elem.textContent);
				let dur = Number(elem.dataset.duration) || 1000;
				let counterPosition = elem.offsetTop - windHeight;

				if (counterPosition < currentScrollPos && !elem.classList.contains("_visible")) {
					newCounter(elem, num, dur);
					elem.classList.add("_visible");
				}
			});
	})
}
