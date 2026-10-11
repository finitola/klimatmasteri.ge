import type { APIRoute } from 'astro';
import { businessInfo } from '../data/business';
import { pages, servicePageIds, getPageUrl, indexablePageIdsByLocale } from '../data/site';
import { serviceDetails } from '../data/service-details';

export const GET: APIRoute = () => {
	const lines = [
		`# ${businessInfo.name} - Full Documentation`,
		'',
		`> ${businessInfo.description.ka}`,
		'',
		'## Business Identity',
		`- Official Name: ${businessInfo.name}`,
		`- Alternate Name: ${businessInfo.alternateName}`,
		`- Phone: ${businessInfo.telephone}`,
		`- Operating Area: Tbilisi, Georgia (თბილისი, საქართველო)`,
		`- Support: 24/7 HVAC Service`,
		`- Primary Language: Georgian (ka)`,
		`- Secondary Language: English (en)`,
		'',
		'## All Services Details',
	];

	for (const id of servicePageIds) {
		const service = serviceDetails[id as keyof typeof serviceDetails];
		lines.push(`### ${pages[id].title.ka.split(/\\s*[|\\-—]\\s*/)[0].trim()}`);
		lines.push(`URL: ${getPageUrl('ka', id)}`);
		lines.push(`Description (KA): ${service.description.ka}`);
		lines.push(`Description (EN): ${service.description.en}`);
		lines.push('Key Features (KA):');
		service.scope.forEach((b: any) => lines.push(`- ${b.ka}`));
		lines.push('');
	}

	lines.push('## General Pages');
	for (const id of indexablePageIdsByLocale.ka) {
		if (servicePageIds.includes(id as any)) continue;
		lines.push(`- [${pages[id].title.ka.split(/\\s*[|\\-—]\\s*/)[0].trim()}](${getPageUrl('ka', id)}): ${pages[id].description?.ka || ''}`);
	}
	
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
