import type { APIRoute } from 'astro';
import { getHreflangAlternates } from '../data/seo';
import { indexablePageIdsByLocale, getPageUrl, type Locale } from '../data/site';

const xmlEscape = (value: string): string => value
	.replaceAll('&', '&amp;')
	.replaceAll('"', '&quot;')
	.replaceAll('<', '&lt;')
	.replaceAll('>', '&gt;')
	.replaceAll("'", '&apos;');

const getSitemapXml = (): string => {
	const entries = Object.entries(indexablePageIdsByLocale).flatMap(([locale, pageIds]) =>
		pageIds.map((pageId) => {
			const url = getPageUrl(locale as Locale, pageId);
			const alternates = getHreflangAlternates(pageId)
				.map(({ locale: alternateLocale, url: alternateUrl }) => `<xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${xmlEscape(alternateUrl)}" />`)
				.join('');
			return `<url><loc>${xmlEscape(url)}</loc>${alternates}</url>`;
		}),
	).join('');

	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`;
};

export const GET: APIRoute = () => new Response(getSitemapXml(), {
	headers: { 'Content-Type': 'application/xml; charset=utf-8' },
});
