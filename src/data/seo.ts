import { businessInfo } from './business';
import { getPagePath, indexablePageIdsByLocale, isIndexablePage, pageIds, pages, servicePageIds, getPageUrl, type Locale, type PageId } from './site';
import { serviceDetails, type ServicePageId } from './service-details';
import { seoCopy } from './seo-copy';


export const MIN_META_TITLE_LENGTH = 50;
export const MAX_META_TITLE_LENGTH = 60;
export const MIN_META_DESCRIPTION_LENGTH = 150;
export const MAX_META_DESCRIPTION_LENGTH = 160;

const localPhone = businessInfo.displayPhone.replace(/^\+995\s/u, '');
const metaDescriptionPrefix = `${localPhone} - `;
const duplicateAdjacentWord = /(^|[^\p{L}\p{N}])([\p{L}\p{N}]+)\s+\2(?=$|[^\p{L}\p{N}])/iu;

function validateSeoMetadata(): void {
	const errors: string[] = [];
	for (const locale of ['ka', 'en'] as const) {
		const titles = new Map<string, PageId>();
		const descriptions = new Map<string, PageId>();
		for (const pageId of pageIds) {
			const title = seoCopy[pageId].title[locale];
			const descriptionBody = seoCopy[pageId].description[locale];
			const description = `${metaDescriptionPrefix}${descriptionBody}`;
			const titleLength = Array.from(title).length;
			const descriptionLength = Array.from(description).length;

			if (titleLength < MIN_META_TITLE_LENGTH || titleLength > MAX_META_TITLE_LENGTH) {
				errors.push(`${locale}/${pageId}: title is ${titleLength} characters; expected ${MIN_META_TITLE_LENGTH}–${MAX_META_TITLE_LENGTH}.`);
			}
			if (descriptionLength < MIN_META_DESCRIPTION_LENGTH || descriptionLength > MAX_META_DESCRIPTION_LENGTH) {
				errors.push(`${locale}/${pageId}: description is ${descriptionLength} characters; expected ${MIN_META_DESCRIPTION_LENGTH}–${MAX_META_DESCRIPTION_LENGTH}.`);
			}
			if (description.split(localPhone).length !== 2) {
				errors.push(`${locale}/${pageId}: description must contain the phone number once, at the beginning.`);
			}
			if (duplicateAdjacentWord.test(descriptionBody)) {
				errors.push(`${locale}/${pageId}: description contains an adjacent duplicated word.`);
			}
			if (titles.has(title)) errors.push(`${locale}/${pageId}: title duplicates ${titles.get(title)}.`);
			if (descriptions.has(description)) errors.push(`${locale}/${pageId}: description duplicates ${descriptions.get(description)}.`);
			titles.set(title, pageId);
			descriptions.set(description, pageId);
		}
	}
	if (errors.length > 0) throw new Error(`Invalid SEO metadata:\n${errors.join('\n')}`);
}

validateSeoMetadata();

export function getMetaTitle(locale: Locale, pageId: PageId): string {
	return seoCopy[pageId].title[locale];
}

export function getMetaDescription(locale: Locale, pageId: PageId): string {
	return `${metaDescriptionPrefix}${seoCopy[pageId].description[locale]}`;
}

export function getBreadcrumbs(locale: Locale, pageId: PageId) {
	const items: { name: string; url: string; href: string }[] = [{
		name: locale === 'ka' ? 'მთავარი' : 'Home',
		url: getPageUrl(locale, 'home'),
		href: getPagePath(locale, 'home'),
	}];
	if (servicePageIds.includes(pageId)) items.push({
		name: locale === 'ka' ? 'სერვისები' : 'Services',
		url: getPageUrl(locale, 'services'),
		href: getPagePath(locale, 'services'),
	});
	if (pageId !== 'home') {
		const shortName = pages[pageId].title[locale].split(/\s*[|\-—]\s*/)[0].trim();
		items.push({ name: shortName, url: getPageUrl(locale, pageId), href: getPagePath(locale, pageId) });
	}
	return items;
}

export function getHreflangAlternates(pageId: PageId) {
	return (['ka', 'en'] as const)
		.filter((locale) => isIndexablePage(locale, pageId))
		.map((locale) => ({ locale, url: getPageUrl(locale, pageId) }));
}

export function getSitemapEntry(url: string) {
	const normalized = url.replace(/\/$/u, '') || `${businessInfo.website}/`;
	for (const pageId of indexablePageIdsByLocale.ka) {
		for (const locale of ['ka', 'en'] as const) {
			if (getPageUrl(locale, pageId).replace(/\/$/u, '') !== normalized) continue;
			const links = getHreflangAlternates(pageId).map(({ locale: lang, url: alternateUrl }) => ({ lang, url: alternateUrl }));
			return { pageId, locale, links };
		}
	}
	return undefined;
}

export function getStructuredData(locale: Locale, pageId: PageId) {
	const orgId = `${businessInfo.website}/#organization`;
	const websiteId = `${businessInfo.website}/#website`;
	const pageUrl = getPageUrl(locale, pageId);
	const pageIdUrl = `${pageUrl}#webpage`;
	const breadcrumbs = getBreadcrumbs(locale, pageId);
	const breadcrumbId = `${pageUrl}#breadcrumb`;
	const graph: Record<string, unknown>[] = [
		{
			'@type': 'Organization',
			'@id': orgId,
			name: businessInfo.name,
			alternateName: businessInfo.alternateName,
			url: businessInfo.website,
			logo: { '@type': 'ImageObject', url: businessInfo.logoUrl },
			description: businessInfo.description[locale],
			telephone: businessInfo.telephone,
			sameAs: businessInfo.socialProfiles.map((profile) => profile.href),
			areaServed: { '@type': 'City', name: locale === 'ka' ? 'თბილისი' : 'Tbilisi', containedInPlace: { '@type': 'Country', name: locale === 'ka' ? 'საქართველო' : 'Georgia' } },
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: businessInfo.telephone,
				contactType: locale === 'ka' ? 'მომხმარებელთა მომსახურება' : 'customer service',
				availableLanguage: ['Georgian', 'English'],
				hoursAvailable: [{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => `https://schema.org/${day}`),
					opens: '00:00',
					closes: '23:59',
				}],
			},
		},
		{
			'@type': 'WebSite',
			'@id': websiteId,
			url: businessInfo.website,
			name: businessInfo.name,
			description: businessInfo.description[locale],
			inLanguage: ['ka', 'en'],
			publisher: { '@id': orgId },
		},
		{
			'@type': 'WebPage',
			'@id': pageIdUrl,
			url: pageUrl,
			name: getMetaTitle(locale, pageId),
			description: getMetaDescription(locale, pageId),
			inLanguage: locale,
			isPartOf: { '@id': websiteId },
			about: { '@id': orgId },
			...(pageId !== 'home' ? { breadcrumb: { '@id': breadcrumbId } } : {}),
			...(pageId === 'faq' ? { mainEntity: { '@id': `${pageUrl}#faq` } } : {}),
		},
		...(pageId !== 'home' ? [{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
		}] : []),
	];

	if (servicePageIds.includes(pageId)) {
		const serviceId = pageId as ServicePageId;
		graph.push({
			'@type': 'Service',
			'@id': `${pageUrl}#service`,
			name: pages[pageId].title[locale].split(' | ')[0],
			description: serviceDetails[serviceId].description[locale],
			url: pageUrl,
			serviceType: pages[pageId].title[locale].split(' | ')[0],
			provider: { '@id': orgId },
			areaServed: { '@type': 'City', name: locale === 'ka' ? 'თბილისი და მისი შემოგარენი' : 'Tbilisi and the surrounding area' },
		});
	}

	return { '@context': 'https://schema.org', '@graph': graph };
}
