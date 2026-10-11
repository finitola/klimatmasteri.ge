import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/data/site';

export default defineConfig({
	site: SITE_URL,
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
