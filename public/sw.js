const CACHE_NAME = 'klimatmasteri-shell-v2';
const APP_SHELL = ['/', '/en/'];

async function cacheResponse(request, response) {
	if (!response.ok) return;

	try {
		const cache = await caches.open(CACHE_NAME);
		await cache.put(request, response.clone());
	} catch {
		// Caching is best-effort; it must not break a successful network response.
	}
}

function offlineResponse() {
	return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))),
	);
	self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request).then((response) => {
				void cacheResponse(request, response);
				return response;
			}).catch(async () => {
				const fallbackPath = new URL(request.url).pathname.startsWith('/en/') ? '/en/' : '/';
				return (await caches.match(request)) || (await caches.match(fallbackPath)) || offlineResponse();
			}),
		);
		return;
	}

	const networkRequest = fetch(request)
		.then(async (response) => {
			await cacheResponse(request, response);
			return response;
		})
		.catch(() => null);

	event.respondWith((async () => {
		const cached = await caches.match(request).catch(() => undefined);
		if (cached) {
			return cached;
		}

		return (await networkRequest) || offlineResponse();
	})());
});
