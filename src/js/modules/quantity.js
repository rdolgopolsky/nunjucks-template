function quantityInput(className) {
	const quantityClassName = className.replace(/[\s.,%]/g, '') || "quantity";
	let quantity = document.querySelector(`.${quantityClassName}`);
	let minus = document.createElement('button');
	let plus = document.createElement('button');
	let input = quantity.querySelector('input');

	let max = input.getAttribute('max') || 1000;
	let min = input.getAttribute('min') || 1;
	let value = parseInt(input.value);

	input.addEventListener('change', () => {
		return value = parseInt(input.value);
	})

	minus.classList.add(`${quantityClassName}-minus`);
	minus.innerHTML = '-';
	plus.classList.add(`${quantityClassName}-plus`);
	plus.innerHTML = '+';

	quantity.prepend(minus);
	quantity.appendChild(plus);

	minus.addEventListener('click', function () {
		if (value > min) {
			input.value = --value;
		}
	});

	plus.addEventListener('click', function () {
		if (value < max) {
			input.value = ++value;
		}
	});

}

export default quantityInput;
