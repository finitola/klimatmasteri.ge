import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { getPageUrl, indexablePageIdsByLocale, SITE_URL } from './src/data/site';
import { getSitemapEntry } from './src/data/seo';

const indexableUrls = new Set(
	Object.entries(indexablePageIdsByLocale).flatMap(([locale, pageIds]) =>
		pageIds.map((pageId) => getPageUrl(locale as 'ka' | 'en', pageId).replace(/\/$/, '')),
	),
);

export default defineConfig({
	site: SITE_URL,
	integrations: indexableUrls.size
		? [
				sitemap({
					filter: (page) => indexableUrls.has(page.replace(/\/$/, '')),
					serialize(item) {
						const entry = getSitemapEntry(item.url);
						return entry ? { ...item, links: entry.links } : undefined;
					},
				}),
			]
		: [],
	trailingSlash: 'never',
	redirects: {
		'/chven-shesakheb': '/chven-shesakheb-kondicioneris-khelosani-klimatmasteri',
		'/kalkulatori': '/kondicioneris-xelosani-klimatmasteri-kalkulatorebi',
		'/konfidencialurobis-politika': '/kondicioneris-xelosani-klimatmasteri-konfidencialurobis-politika',
		'/momsakhurebis-pirobebi': '/kondicioneris-xelosani-klimatmasteri-momsakhurebis-pirobebi',
		'/kondicioneris-garecxva-shida-da-gare-blokebis-sigrmiseuli-tsmenda': '/kondicioneris-gatsmenda-shida-da-gare-blokebis-sigrmiseuli-tsmenda',
	},
	
	build: {
		format: 'file',
	},
	i18n: {
		defaultLocale: 'ka',
		locales: ['ka', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
