const header = document.querySelector<HTMLElement>('[data-site-header]');
const topButton = document.querySelector<HTMLButtonElement>('[data-scroll-top]');

if (header || topButton) {
	let isScrolled = header?.hasAttribute('data-scrolled') ?? false;
	let isVisible = topButton?.dataset.visible === 'true';
	let updateScheduled = false;

	const updateScrollUi = () => {
		updateScheduled = false;

		const scrollY = window.scrollY;
		const nextIsScrolled = scrollY > 24;
		const nextIsVisible = scrollY > 280;

		if (header && nextIsScrolled !== isScrolled) {
			isScrolled = nextIsScrolled;
			header.toggleAttribute('data-scrolled', nextIsScrolled);
			header.style.setProperty('--site-header-height', nextIsScrolled ? '3.75rem' : '4.5rem');
		}

		if (topButton && nextIsVisible !== isVisible) {
			isVisible = nextIsVisible;
			topButton.dataset.visible = String(nextIsVisible);
			topButton.tabIndex = nextIsVisible ? 0 : -1;
			topButton.setAttribute('aria-hidden', String(!nextIsVisible));
		}
	};

	const scheduleScrollUiUpdate = () => {
		if (updateScheduled) return;
		updateScheduled = true;
		window.requestAnimationFrame(updateScrollUi);
	};

	topButton?.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
		});
	});

	window.addEventListener('scroll', scheduleScrollUiUpdate, { passive: true });
	updateScrollUi();
}
