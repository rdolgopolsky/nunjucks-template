function wrap(parent, elemClass) {
	const wrapper = document.createElement('span');

	if (elemClass){
		wrapper.classList = elemClass;
	}

	parent.childNodes.forEach(ch => wrapper.appendChild(ch));
	parent.appendChild(wrapper);
}

function wrapWords(selector, elemClass) {
	if (selector) {
		document.querySelectorAll(selector)
			.forEach(a => wrap(a, elemClass));
	}
}
export default wrapWords;
