interface InstallPromptEvent extends Event {
	prompt: () => Promise<void>;
	userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export {};

declare global {
	interface WindowEventMap {
		beforeinstallprompt: InstallPromptEvent;
	}
}

const wrap = document.querySelector<HTMLElement>('[data-pwa-install-wrap]');
const installButton = document.querySelector<HTMLButtonElement>('[data-pwa-install]');
const dismissButton = document.querySelector<HTMLButtonElement>('[data-pwa-dismiss]');

let installPrompt: InstallPromptEvent | undefined;
let dismissTimer = 0;
let offerExpired = false;

if ('serviceWorker' in navigator && window.isSecureContext) {
	window.addEventListener('load', () => {
		void navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => undefined);
	}, { once: true });
}

function hideInstallOffer(): void {
	if (!wrap) return;
	window.clearTimeout(dismissTimer);
	offerExpired = true;
	wrap.classList.add('hidden');
}

function showInstallOffer(): void {
	if (!wrap || offerExpired) return;

	// 1. Only show on the Home Page
	const isHomePage = window.location.pathname === '/' || window.location.pathname === '/en' || window.location.pathname === '/en/';
	if (!isHomePage) return;

	// 2. Only show ONCE per user
	if (localStorage.getItem('pwa_prompt_shown')) return;
	localStorage.setItem('pwa_prompt_shown', 'true');

	wrap.classList.remove('hidden');
	if (!dismissTimer) dismissTimer = window.setTimeout(hideInstallOffer, 5000);
}

// THIS IS THE ONLY WAY IT SHOWS UP NOW:
// The browser itself guarantees that it supports automatic installation
// BEFORE it fires this event.
window.addEventListener('beforeinstallprompt', (event) => {
	event.preventDefault();
	installPrompt = event;
	showInstallOffer();
});

window.addEventListener('appinstalled', () => {
	hideInstallOffer();
	installPrompt = undefined;
});

dismissButton?.addEventListener('click', hideInstallOffer);

installButton?.addEventListener('click', async () => {
	if (installPrompt) {
		try {
			await installPrompt.prompt();
			const choice = await installPrompt.userChoice;
			if (choice.outcome === 'accepted') hideInstallOffer();
		} finally {
			installPrompt = undefined;
		}
	}
});
