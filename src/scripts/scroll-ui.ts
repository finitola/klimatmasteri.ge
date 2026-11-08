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
		const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
		const prefersReducedMotion = typeof window.matchMedia === 'function'
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (supportsSmoothScroll && !prefersReducedMotion) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			window.scrollTo(0, 0);
		}
	});

	window.addEventListener('scroll', scheduleScrollUiUpdate, { passive: true });
	updateScrollUi();
}
