import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	if (!site) throw new Error('Set the production site URL in astro.config.ts.');
	const sitemapURL = new URL('sitemap-0.xml', site);
	const content = [
		'User-agent: *',
		'Allow: /',
		'',
		'# Search and user-requested retrieval crawlers',
		'User-agent: Googlebot',
		'Allow: /',
		'User-agent: Bingbot',
		'Allow: /',
		'User-agent: OAI-SearchBot',
		'Allow: /',
		'User-agent: ChatGPT-User',
		'Allow: /',
		'User-agent: PerplexityBot',
		'Allow: /',
		'',
		'# Model-training crawlers are independently opted out',
		'User-agent: GPTBot',
		'Disallow: /',
		'User-agent: Google-Extended',
		'Disallow: /',
		'',
		`Sitemap: ${sitemapURL.href}`,
	].join('\n') + '\n';
	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
