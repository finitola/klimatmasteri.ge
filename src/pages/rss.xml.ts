import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { businessInfo } from '../data/business';
import { pages, servicePageIds, getPageUrl } from '../data/site';

export const GET: APIRoute = (context) => {
	const siteUrl = context.site?.href || businessInfo.website;
	
	// Create RSS items for all service pages
	const items = servicePageIds.map((id) => {
		// Extract a clean title (without the site name suffix)
		const cleanTitle = pages[id].title.ka.split(/\\s*[|\\-—]\\s*/)[0].trim();
		
		return {
			title: cleanTitle,
			description: pages[id].description.ka,
			link: getPageUrl('ka', id),
			// Provide a static pubDate for the services so the RSS feed is valid
			pubDate: new Date('2026-10-10T00:00:00Z'),
		};
	});

	return rss({
		title: businessInfo.name,
		description: businessInfo.description.ka,
		site: siteUrl,
		items: items,
		customData: `<language>ka</language>`,
	});
};
