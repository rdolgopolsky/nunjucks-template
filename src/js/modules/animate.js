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
export default animate;
