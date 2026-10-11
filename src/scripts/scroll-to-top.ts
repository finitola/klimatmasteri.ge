const topButton = document.querySelector<HTMLButtonElement>('[data-scroll-top]');

if (topButton) {
	let isVisible = false;

	topButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
		});
	});

	const updateVisibility = () => {
		const shouldShow = window.scrollY > 280;

		if (shouldShow === isVisible) return;

		isVisible = shouldShow;
		topButton.dataset.visible = String(shouldShow);
		topButton.tabIndex = shouldShow ? 0 : -1;
		topButton.setAttribute('aria-hidden', String(!shouldShow));
	};

	window.addEventListener('scroll', updateVisibility, { passive: true });
	updateVisibility();
}
