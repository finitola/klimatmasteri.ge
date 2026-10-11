import { getPageUrl, pageLabels, pages, servicePageIds, SITE_URL, type Locale, type PageId } from './site';
import { serviceDetails, type ServicePageId } from './service-details';

export const businessInfo = {
	name: 'KlimatMasteri',
	alternateName: 'კლიმატ მასტერი',
	industry: 'HVAC/R and air-conditioning services',
	website: SITE_URL,
	logoUrl: `${SITE_URL}/favicon.svg`,
	telephone: '+995514128821',
	displayPhone: '+995 514 12 88 21',
	socialProfiles: [
		{ id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/klimatmasteri' },
		{ id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/klimatmasteri.ge/' },
		{ id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@klimatmasteri.ge' },
		{ id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/klimatmasteri/' },
		{ id: 'x', label: 'X', href: 'https://x.com/klimatmasteri' },
	],
	serviceArea: {
		ka: 'თბილისი და მისი შემოგარენი',
		en: 'Tbilisi and the surrounding area',
	},
	openingHoursText: {
		ka: 'სამუშაო 24/7',
		en: 'Open 24/7',
	},
	languages: [
		{ code: 'ka', name: 'Georgian' },
		{ code: 'en', name: 'English' },
	],
	description: {
		ka: 'KlimatMasteri გთავაზობთ კონდიციონერის მონტაჟის, დიაგნოსტიკის, შეკეთებისა და ტექნიკური მომსახურების სერვისებს თბილისში და მის შემოგარენში.',
		en: 'KlimatMasteri provides air-conditioner installation, diagnostics, repair, and maintenance services in Tbilisi and the surrounding area.',
	},
	missingPublicDetails: [
		'Confirmation that the Google Business Profile address is a customer-facing, staffed location with permanent business signage; otherwise the profile address should remain hidden for a service-area business',
		'Verified business email address',
		'Official Google Business Profile URL',
		'Confirmed accepted payment methods',
	],
} as const;

export interface ServiceEntry {
	pageId: ServicePageId;
	name: string;
	url: string;
	description: string;
}

export function getServiceEntries(locale: Locale): ServiceEntry[] {
	return servicePageIds.map((pageId) => ({
		pageId: pageId as ServicePageId,
		name: pageLabels[pageId][locale],
		url: getPageUrl(locale, pageId),
		description: serviceDetails[pageId as ServicePageId].description[locale],
	}));
}

export interface ImportantPageEntry {
	pageId: PageId;
	name: string;
	url: string;
	description: string;
}

export function getImportantPages(locale: Locale): ImportantPageEntry[] {
	const pageIds: PageId[] = ['home', 'services', 'about', 'contact', 'faq'];
	return pageIds.map((pageId) => ({
		pageId,
		name: pageLabels[pageId][locale],
		url: getPageUrl(locale, pageId),
		description: pages[pageId].description[locale],
	}));
}
