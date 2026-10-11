const section = document.querySelector<HTMLElement>('[data-systems-parallax]');
const image = section?.querySelector<HTMLElement>('[data-parallax-image]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (section && image && !reducedMotion.matches) {
	let animationFrame = 0;

	const updatePosition = () => {
		animationFrame = 0;
		const sectionBounds = section.getBoundingClientRect();
		const sectionCenter = sectionBounds.top + sectionBounds.height / 2;
		const maxOffset = sectionBounds.height * 0.14;
		const offset = Math.min(maxOffset, Math.max(-maxOffset, (window.innerHeight / 2 - sectionCenter) * 0.42));

		image.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.32)`;
	};

	const scheduleUpdate = () => {
		if (animationFrame) return;
		animationFrame = window.requestAnimationFrame(updatePosition);
	};

	window.addEventListener('scroll', scheduleUpdate, { passive: true });
	window.addEventListener('resize', scheduleUpdate);
	updatePosition();
}
