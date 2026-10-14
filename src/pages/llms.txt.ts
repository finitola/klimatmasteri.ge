import type { APIRoute } from 'astro';
import { businessInfo } from '../data/business';
import { pages, servicePageIds, getPageUrl } from '../data/site';

export const GET: APIRoute = () => {
	const content = [
		`# ${businessInfo.name}`,
		'',
		`> ${businessInfo.description.ka}`,
		'',
		'## Business Information',
		`- Phone: ${businessInfo.telephone}`,
		`- Service Area: Tbilisi, Georgia (თბილისი, საქართველო)`,
		`- Hours: 24/7 (ორშაბათი - კვირა)`,
		`- Website: ${businessInfo.website}`,
		'',
		'## Main Pages',
		`- [Home](${getPageUrl('ka', 'home')}): ${pages.home.description.ka}`,
		`- [Services](${getPageUrl('ka', 'services')}): ${pages.services.description.ka}`,
		`- [About Us](${getPageUrl('ka', 'about')}): ${pages.about.description.ka}`,
		`- [Contact](${getPageUrl('ka', 'contact')}): ${pages.contact.description.ka}`,
		`- [FAQ](${getPageUrl('ka', 'faq')}): ${pages.faq.description.ka}`,
		`- [${pages.works.title.ka.split(' | ')[0]}](${getPageUrl('ka', 'works')}): ${pages.works.description.ka}`,
		'',
		'## Services (Georgian)',
		...servicePageIds.map(id => `- [${pages[id].title.ka.split(' - ')[0].trim()}](${getPageUrl('ka', id)}): ${pages[id].description.ka}`),
		'',
		'## Services (English)',
		...servicePageIds.map(id => `- [${pages[id].title.en.split(' | ')[0].trim()}](${getPageUrl('en', id)}): ${pages[id].description.en}`),
		''
	].join('\n');

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
