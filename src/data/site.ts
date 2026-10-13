export const SITE_URL = 'https://klimatmasteri.ge';

export type Locale = 'ka' | 'en';
export type PageId =
	| 'home'
	| 'services'
	| 'about'
	| 'contact'
	| 'faq'
	| 'refrigerants'
	| 'licensing'
	| 'licensing-learning'
	| 'licensing-testing'
	| 'licensing-info'
	| 'learning'
	| 'air-conditioner-components'
	| 'air-conditioner-service'
	| 'air-conditioner-electrical'
	| 'calculators'
	| 'privacy'
	| 'terms'
	| 'service-consultation'
	| 'service-installation'
	| 'service-pipe-preinstallation'
	| 'service-drainage-system'
	| 'service-water-leak'
	| 'service-dismantling'
	| 'service-diagnostics'
	| 'service-repair'
	| 'service-control-board-repair'
	| 'service-refrigerant-check'
	| 'service-refrigerant-leak-repair'
	| 'service-deep-cleaning';

// The exam Q&A and simulation pages have only a short English notice, so keep
// those English URLs available to visitors but out of search indexes/sitemaps.
export const indexablePageIds: PageId[] = ['home','services','about','contact','faq','refrigerants','licensing','licensing-learning','licensing-testing','licensing-info','learning','air-conditioner-components','air-conditioner-service','air-conditioner-electrical','calculators','privacy','terms','service-consultation','service-installation','service-pipe-preinstallation','service-drainage-system','service-water-leak','service-dismantling','service-diagnostics','service-repair','service-control-board-repair','service-refrigerant-check','service-refrigerant-leak-repair','service-deep-cleaning'];
export const indexablePageIdsByLocale: Record<Locale, PageId[]> = {
	ka: indexablePageIds,
	en: indexablePageIds.filter((pageId) => pageId !== 'licensing-learning' && pageId !== 'licensing-testing'),
};

export function isIndexablePage(locale: Locale, pageId: PageId): boolean {
	return indexablePageIdsByLocale[locale].includes(pageId);
}

type LocalizedText = Record<Locale, string>;

interface PageDefinition {
	slug: LocalizedText;
	title: LocalizedText;
	description: LocalizedText;
}

export const pageIds: PageId[] = [
	'home',
	'services',
	'about',
	'contact',
	'faq',
	'refrigerants',
	'licensing',
	'licensing-learning',
	'licensing-testing',
	'licensing-info',
	'learning',
	'air-conditioner-components',
	'air-conditioner-service',
	'air-conditioner-electrical',
	'calculators',
	'privacy',
	'terms',
	'service-consultation',
	'service-installation',
	'service-pipe-preinstallation',
	'service-drainage-system',
	'service-water-leak',
	'service-dismantling',
	'service-diagnostics',
	'service-repair',
	'service-control-board-repair',
	'service-refrigerant-check',
	'service-refrigerant-leak-repair',
	'service-deep-cleaning',
];

export const pages: Record<PageId, PageDefinition> = {
	home: {
		slug: { ka: '', en: '' },
		title: {
			ka: 'კონდიციონერის ხელოსანი, მონტაჟი - KlimatMasteri',
			en: 'KlimatMasteri — Air Conditioner Technician',
		},
		description: {
			ka: '514-128-821 - კონდიციონერის ხელოსანი თბილისში. გთავაზობთ პროფესიონალურ მომსახურებას: მონტაჟი, შეკეთება (kondicioneris montaji, sheketeba). დაგვირეკეთ!',
			en: 'Air conditioner repair and installation. Call KlimatMasteri for professional service from qualified and certified air conditioner technicians.',
		},
	},
	services: {
		slug: { ka: 'kondicioneris-servisebi', en: 'air-conditioner-services' },
		title: { ka: 'კონდიციონერის სერვისები | KlimatMasteri', en: 'Air Conditioner Services | KlimatMasteri' },
		description: {
			ka: 'კონდიციონერის მონტაჟი, დემონტაჟი, დიაგნოსტიკა, შეკეთება, გაწმენდა და სხვა მომსახურებები.',
			en: 'Explore air conditioner installation, repair, cleaning, diagnostics, refrigerant, and drainage services from KlimatMasteri.',
		},
	},
	about: {
		slug: { ka: 'chven-shesakheb-kondicioneris-khelosani-klimatmasteri', en: 'about' },
		title: { ka: 'ჩვენ შესახებ კლიმატ მასტერი | KlimatMasteri', en: 'About | KlimatMasteri' },
		description: {
			ka: 'ჩვენ ვართ კონდიციონერის ხელოსნები, მაღალი კვალიფიკაციის მქონე სერტიფიცირებული პროფესიონალები.',
			en: 'Meet KlimatMasteri, certified air-conditioning professionals serving Tbilisi and the surrounding area.',
		},
	},
	contact: {
		slug: {
			ka: 'sakontakto-informacia-gamoidzaxe-kondicioneris-xelosani',
			en: 'contact-air-conditioner-technician',
		},
		title: { ka: 'საკონტაქტო ინფორმაცია | KlimatMasteri', en: 'Contact | KlimatMasteri' },
		description: {
			ka: 'KlimatMasteri-ის საკონტაქტო გვერდი. კონდიციონერის მომსახურება თბილისში და მის შემოგარენში. დაგვიკავშირდით ტელეფონით ან WhatsApp-ით.',
			en: 'Contact KlimatMasteri for air-conditioning services in Tbilisi and the surrounding area by phone or WhatsApp.',
		},
	},
	faq: {
		slug: { ka: 'kitxvebi-kondicioneris-shesakheb', en: 'faq' },
		title: { ka: 'ხშირად დასმული კითხვები | KlimatMasteri', en: 'Frequently Asked Questions | KlimatMasteri' },
		description: {
			ka: 'კონდიციონერის მონტაჟის, მოვლის, ენერგოეფექტურობისა და გაუმართაობების შესახებ ხშირად დასმული კითხვები და პასუხები.',
			en: 'Answers to common questions about air-conditioning installation, maintenance, energy efficiency, and troubleshooting.',
		},
	},
	refrigerants: {
		slug: { ka: 'macivaragentebi-igive-freoni', en: 'refrigerant-agents' },
		title: { ka: 'მაცივარაგენტები | KlimatMasteri', en: 'Refrigerants | KlimatMasteri' },
		description: {
			ka: 'მაცივარაგენტების უსაფრთხოების კლასიფიკაცია, ნარევები, ტექნიკური ტერმინები და გარემოსდაცვითი საკითხები.',
			en: 'Learn about refrigerant safety classifications, mixtures, technical terms, and environmental topics.',
		},
	},
	licensing: {
		slug: { ka: 'macivaragentis-freonis-salicenzio-gamocda', en: 'refrigerant-licensing-exam' },
		title: { ka: 'მაცივარაგენტის სალიცენზიო გამოცდა | KlimatMasteri', en: 'Refrigerant Licensing Exam | KlimatMasteri' },
		description: {
			ka: 'მაცივარაგენტზე (ფრეონზე) მომუშავე სისტემების სალიცენზიო გამოცდისთვის მომზადება, ტესტირება და კითხვა-პასუხები.',
			en: 'Preparation, testing, and Q&A for the refrigerant licensing exam.',
		},
	},
	'licensing-learning': {
		slug: { ka: 'macivaragentis-freonis-sagamocdo-kitxvebi-da-pasuxebi', en: 'refrigerant-exam-questions-and-answers' },
		title: { ka: 'სალიცენზიო გამოცდის კითხვები და პასუხები | KlimatMasteri', en: 'Licensing Exam Q&A | KlimatMasteri' },
		description: { ka: 'მაცივარაგენტის სალიცენზიო გამოცდის კითხვები და პასუხები.', en: 'Questions and answers for the refrigerant licensing exam.' },
	},
	'licensing-testing': {
		slug: { ka: 'macivaragentis-freonis-gamocdis-simulaciuri-garemo', en: 'refrigerant-exam-simulation' },
		title: { ka: 'სალიცენზიო გამოცდის სიმულაციური ტესტირება | KlimatMasteri', en: 'Licensing Exam Simulation | KlimatMasteri' },
		description: { ka: 'მაცივარაგენტის სალიცენზიო გამოცდის სიმულაციური ტესტირება.', en: 'Simulation testing for the refrigerant licensing exam.' },
	},
	'licensing-info': {
		slug: { ka: 'macivaragentis-freonis-sagamocdo-testebis-dziritadi-sakitkhebi', en: 'refrigerant-exam-main-topics' },
		title: { ka: 'სალიცენზიო ტესტების ძირითადი საკითხები | KlimatMasteri', en: 'Licensing Exam Main Topics | KlimatMasteri' },
		description: { ka: 'მაცივარაგენტის სალიცენზიო ტესტების ძირითადი საკითხები და წესები.', en: 'Main topics and rules for the refrigerant licensing tests.' },
	},
	learning: {
		slug: { ka: 'kondicirebis-sistemebi', en: 'learning' },
		title: { ka: 'კონდიცირების სისტემები | KlimatMasteri', en: 'Air Conditioning Systems | KlimatMasteri' },
			description: {
			ka: 'საცხოვრებელი, კომერციული და ინდუსტრიული კონდიცირების სისტემების ტიპების მიმოხილვა.',
			en: 'An overview of residential, commercial, and industrial air-conditioning systems and their common types.',
		},
	},
	'air-conditioner-components': {
		slug: { ka: 'kondicioneris-komponentebi', en: 'air-conditioner-components' },
		title: { ka: 'კონდიციონერის კომპონენტები | KlimatMasteri', en: 'Air Conditioner Components | KlimatMasteri' },
			description: {
			ka: 'კონდიციონერის შიდა და გარე ბლოკების ძირითადი კომპონენტები და მათი დანიშნულება.',
			en: 'An overview of key air-conditioner indoor and outdoor unit components and their roles.',
		},
	},
	'air-conditioner-service': {
		slug: { ka: 'rogor-gavakeot-kondicioneris-diagnostika', en: 'air-conditioner-service' },
		title: { ka: 'როგორ გავაკეთოთ კონდიციონერის დიაგნოსტიკა | KlimatMasteri', en: 'Air-Conditioner Diagnostics | KlimatMasteri' },
			description: {
			ka: 'კონდიციონერის დიაგნოსტიკის ძირითადი ეტაპები, კომპონენტების შემოწმება და გაუმართაობის მიზეზის ძიება.',
			en: 'An overview of air-conditioner diagnostics, component checks, and troubleshooting topics.',
		},
	},
	'air-conditioner-electrical': {
		slug: { ka: 'kondicioneris-eleqtrooba', en: 'air-conditioner-electrical-systems' },
		title: { ka: 'კონდიციონერის ელექტროობა | KlimatMasteri', en: 'Air Conditioner Electrical Systems | KlimatMasteri' },
			description: {
			ka: 'HVAC/R სისტემების ელექტრული კომპონენტები, მართვის ელემენტები და უსაფრთხოების საკითხები.',
			en: 'An introduction to HVAC/R electrical components, controls, and safety considerations.',
		},
	},
	calculators: {
		slug: { ka: 'kondicioneris-xelosani-klimatmasteri-kalkulatorebi', en: 'calculators' },
		title: { ka: 'კალკულატორები | KlimatMasteri', en: 'Calculators | KlimatMasteri' },
			description: {
			ka: 'კონდიცირების სისტემებისთვის ოთახის დატვირთვისა და ტექნიკური პარამეტრების გამოსათვლელი ხელსაწყოები.',
			en: 'HVAC/R tools for estimating room load and working with common technical parameters.',
		},
	},
	privacy: {
		slug: { ka: 'kondicioneris-xelosani-klimatmasteri-konfidencialurobis-politika', en: 'privacy-policy' },
		title: { ka: 'კონფიდენციალურობის პოლიტიკა | KlimatMasteri', en: 'Privacy Policy | KlimatMasteri' },
			description: {
			ka: 'ინფორმაცია ვებსაიტზე პერსონალური მონაცემების დამუშავების, გამოყენებისა და დაცვის შესახებ.',
			en: 'Learn what personal information KlimatMasteri may collect, how it is used and protected, and how to contact us about your data.',
		},
	},
	terms: {
		slug: { ka: 'kondicioneris-xelosani-klimatmasteri-momsakhurebis-pirobebi', en: 'terms-of-service' },
		title: { ka: 'მომსახურების პირობები | KlimatMasteri', en: 'Terms of Service | KlimatMasteri' },
			description: {
			ka: 'KlimatMasteri.ge-ის გამოყენების, მომსახურების, ფასების, ინტელექტუალური საკუთრებისა და საკონტაქტო ინფორმაციის პირობები.',
			en: 'Read KlimatMasteri’s service terms, including service scope, pricing, intellectual property, third-party links, and contact details.',
		},
	},
	'service-consultation': {
		slug: { ka: 'kondicioneris-xelosani', en: 'air-conditioner-consultation' },
		title: { ka: 'კონსულტაცია | KlimatMasteri', en: 'Consultation | KlimatMasteri' },
		description: { ka: 'კონსულტაცია კონდიციონერის ხელოსანთან: სისტემის მონტაჟის, არსებული სისტემის მუშაობისა და საჭირო შეკეთების შესახებ.', en: 'Consult an air-conditioning technician about system installation, existing system operation, and possible repair needs.' },
	},
	'service-installation': {
		slug: { ka: 'kondicioneris-montaji', en: 'air-conditioner-installation' },
		title: { ka: 'კონდიციონერის მონტაჟი | KlimatMasteri', en: 'Air Conditioner Installation | KlimatMasteri' },
		description: { ka: 'კონდიციონერის მონტაჟი მოიცავს სამონტაჟო სივრცის შერჩევას, შიდა და გარე ბლოკების დამონტაჟებასა და საჭირო კომუნიკაციებთან დაკავშირებას.', en: 'Air-conditioner installation includes selecting a suitable space, installing the indoor and outdoor units, and connecting required services.' },
	},
	'service-pipe-preinstallation': {
		slug: { ka: 'kondicioneris-milebis-winastsari-montaji', en: 'air-conditioner-pipe-pre-installation' },
		title: { ka: 'კონდიციონერის მილების წინასწარი მონტაჟი | KlimatMasteri', en: 'Air Conditioner Pipe Pre-Installation | KlimatMasteri' },
		description: { ka: 'კონდიციონერის მილებისა და კონდენსატის გადინების მარშრუტის წინასწარი დაგეგმვა სისტემის დამონტაჟებამდე.', en: 'Planning air-conditioner pipe routes and condensate drainage before the system is installed.' },
	},
	'service-drainage-system': {
		slug: { ka: 'kondicioneris-sadrenaje-sistemis-mowyoba', en: 'air-conditioner-drainage-system-pump-installation' },
		title: { ka: 'კონდიციონერის სადრენაჟე სისტემის მოწყობა, პომპის ინტეგრაცია (ინსტალაცია) | KlimatMasteri', en: 'Air Conditioner Drainage and Pump Installation | KlimatMasteri' },
		description: { ka: 'კონდიციონერის კონდენსატის სადრენაჟე მარშრუტის მოწყობა და, საჭიროების შემთხვევაში, პომპის დაყენება.', en: 'Setting up the air-conditioner condensate drainage route and installing a pump when needed.' },
	},
	'service-water-leak': {
		slug: { ka: 'kondicioneridan-wylis-tsvetis-problema', en: 'air-conditioner-water-leak-repair' },
		title: { ka: 'კონდიციონერიდან წყლის წვეთის პრობლემის მოგვარება | KlimatMasteri', en: 'Air Conditioner Water Leak Repair | KlimatMasteri' },
		description: { ka: 'კონდიციონერიდან წყლის წვეთის მიზეზის დადგენა: შიდა ბლოკის დაბინძურება, მილების იზოლაცია, სადრენაჟე სისტემა ან ძველი პლასტმასის კონსტრუქციის დეფორმაცია.', en: 'Finding the cause of an air-conditioner water leak, including indoor-unit dirt, pipe insulation, drainage issues, or deformation in an older plastic casing.' },
	},
	'service-dismantling': {
		slug: { ka: 'kondicioneris-demontaji', en: 'air-conditioner-removal' },
		title: { ka: 'კონდიციონერის დემონტაჟი, მოხსნა | KlimatMasteri', en: 'Air Conditioner Removal | KlimatMasteri' },
		description: { ka: 'კონდიციონერის შიდა და გარე ბლოკების მოხსნა და მათთან დაკავშირებული კომუნიკაციების გათიშვა.', en: 'Removing indoor and outdoor air-conditioner units and disconnecting their associated connections.' },
	},
	'service-diagnostics': {
		slug: { ka: 'kondicioneris-detaluri-diagnostika', en: 'air-conditioner-diagnostics' },
		title: { ka: 'კონდიციონერის დიაგნოსტიკა და შემოწმება თბილისში', en: 'Air Conditioner Diagnostics | KlimatMasteri' },
		description: { ka: 'კონდიციონერის გაუმართაობის მიზეზის შემოწმება და შემდგომი მომსახურების საჭიროების განსაზღვრა.', en: 'Inspecting an air conditioner to identify a fault and determine the next service step.' },
	},
	'service-repair': {
		slug: { ka: 'kondicioneris-sheketeba-dazianebuli-detalis-shecvla', en: 'air-conditioner-repair-parts-replacement' },
		title: { ka: 'კონდიციონერის შეკეთება, ნაწილების შეცვლა', en: 'Air Conditioner Repair and Parts Replacement | KlimatMasteri' },
		description: { ka: 'კონდიციონერის შეკეთება და შემოწმებით გამოვლენილი დაზიანებული ნაწილის საჭიროების შემთხვევაში შეცვლა.', en: 'Repairing an air conditioner and replacing a damaged part when identified and needed.' },
	},
	'service-control-board-repair': {
		slug: { ka: 'kondicioneris-platis-sheketeba-shecvla', en: 'air-conditioner-control-board-repair' },
		title: { ka: 'კონდიციონერის პლატის შეკეთება/შეცვლა | KlimatMasteri', en: 'Air Conditioner Control Board Repair | KlimatMasteri' },
		description: { ka: 'კონდიციონერის მართვის პლატის შემოწმება და, საჭიროების შემთხვევაში, შეკეთება ან შეცვლა.', en: 'Inspecting an air-conditioner control board and repairing or replacing it when needed.' },
	},
	'service-refrigerant-check': {
		slug: { ka: 'kondicionerze-macivaregentis-freonis-donis-shemowmeba-freonis-chasxma', en: 'air-conditioner-refrigerant-level-check-and-refill' },
		title: { ka: 'კონდიციონერზე მაცივარაგენტის (ფრეონის) დონის შემოწმება, ფრეონის ჩასხმა. | KlimatMasteri', en: 'Air Conditioner Refrigerant Check and Refill | KlimatMasteri' },
		description: { ka: 'კონდიციონერის მაცივარაგენტის მუხტის შემოწმება და მხოლოდ საჭიროების შემთხვევაში შევსება.', en: 'Checking the air-conditioner refrigerant charge and recharging it only when needed.' },
	},
	'service-refrigerant-leak-repair': {
		slug: { ka: 'kondicioneris-zhonvis-povna-da-sheketeba', en: 'air-conditioner-refrigerant-leak-detection-repair' },
		title: { ka: 'კონდიციონერის ჟონვის პოვნა და შეკეთება | KlimatMasteri', en: 'Air Conditioner Leak Detection and Repair | KlimatMasteri' },
		description: { ka: 'კონდიციონერის ჟონვის ადგილის მოძიება, დაზიანებული მონაკვეთის შეკეთება და სისტემის მაცივარაგენტით (ფრეონით) ზუსტი შევსება.', en: 'Locating and repairing an air-conditioner refrigerant leak, then accurately recharging the system.' },
	},
	'service-deep-cleaning': {
		slug: { ka: 'kondicioneris-gatsmenda-shida-da-gare-blokebis-sigrmiseuli-tsmenda', en: 'air-conditioner-indoor-outdoor-deep-cleaning' },
		title: { ka: 'კონდიციონერის გაწმენდა (შიდა და გარე ბლოკი)', en: 'Air Conditioner Indoor and Outdoor Unit Deep Cleaning | KlimatMasteri' },
		description: { ka: 'კონდიციონერის შიდა და გარე ბლოკების სიღრმისეული წმენდა მოწყობილობის վիճակի გათვალისწინებით.', en: 'Deep cleaning of indoor and outdoor air-conditioner units.' },
	},
};

export const mainNavigation: PageId[] = ['home', 'services', 'faq', 'about', 'contact'];
export const footerNavigation: PageId[] = ['home', 'services', 'about', 'contact', 'faq'];
export const resourceNavigation: PageId[] = ['learning', 'air-conditioner-components', 'air-conditioner-service', 'air-conditioner-electrical', 'refrigerants', 'licensing', 'calculators'];
export const servicePageIds: PageId[] = [
	'service-consultation',
	'service-installation',
	'service-pipe-preinstallation',
	'service-drainage-system',
	'service-water-leak',
	'service-dismantling',
	'service-diagnostics',
	'service-repair',
	'service-control-board-repair',
	'service-refrigerant-check',
	'service-refrigerant-leak-repair',
	'service-deep-cleaning',
];

export const pageLabels: Record<PageId, LocalizedText> = {
	home: { ka: 'მთავარი', en: 'Home' },
	services: { ka: 'სერვისები', en: 'Services' },
	about: { ka: 'ჩვენ შესახებ', en: 'About' },
	contact: { ka: 'კონტაქტი', en: 'Contact' },
	faq: { ka: 'FAQ', en: 'FAQ' },
	refrigerants: { ka: 'მაცივარაგენტები', en: 'Refrigerants' },
	licensing: { ka: 'სალიცენზიო გამოცდა', en: 'Licensing Exam' },
	'licensing-learning': { ka: 'კითხვები და პასუხები', en: 'Q&A' },
	'licensing-testing': { ka: 'სიმულაციური ტესტირება', en: 'Simulation Testing' },
	'licensing-info': { ka: 'ძირითადი საკითხები', en: 'Main Topics' },
	learning: { ka: 'კონდიცირების სისტემები', en: 'Air Conditioning Systems' },
	'air-conditioner-components': { ka: 'კონდიციონერის კომპონენტები', en: 'Air Conditioner Components' },
	'air-conditioner-service': { ka: 'როგორ გავაკეთოთ კონდიციონერის დიაგნოსტიკა', en: 'Air-Conditioner Diagnostics' },
	'air-conditioner-electrical': { ka: 'კონდიციონერის ელექტროობა', en: 'Air Conditioner Electrical Systems' },
	calculators: { ka: 'კალკულატორები', en: 'Calculators' },
	privacy: { ka: 'კონფიდენციალურობის პოლიტიკა', en: 'Privacy Policy' },
	terms: { ka: 'მომსახურების პირობები', en: 'Terms of Service' },
	'service-consultation': { ka: 'კონდიციონერის ხელოსანი - კონსულტაცია', en: 'Air Conditioner Technician - Consultation' },
	'service-installation': { ka: 'კონდიციონერის მონტაჟი', en: 'Air conditioner installation' },
	'service-pipe-preinstallation': { ka: 'კონდიციონერის მილების წინასწარი მონტაჟი', en: 'Air conditioner pipe pre-installation' },
	'service-drainage-system': { ka: 'კონდიციონერის სადრენაჟე სისტემის მოწყობა, პომპის ინტეგრაცია (ინსტალაცია)', en: 'Air conditioner drainage setup and pump integration' },
	'service-water-leak': { ka: 'კონდიციონერიდან წყლის წვეთის პრობლემის მოგვარება', en: 'Air conditioner water leak repair' },
	'service-dismantling': { ka: 'კონდიციონერის დემონტაჟი', en: 'Air conditioner dismantling' },
	'service-diagnostics': { ka: 'კონდიციონერის დეტალური დიაგნოსტიკა', en: 'Detailed air conditioner diagnostics' },
	'service-repair': { ka: 'კონდიციონერის შეკეთება, დაზიანებული დეტალის შეცვლა', en: 'Air conditioner repair and damaged parts replacement' },
	'service-control-board-repair': { ka: 'კონდიციონერის პლატის შეკეთება/შეცვლა', en: 'Air conditioner control board repair or replacement' },
	'service-refrigerant-check': { ka: 'კონდიციონერზე მაცივარაგენტის (ფრეონის) დონის შემოწმება, ფრეონის ჩასხმა.', en: 'Air conditioner refrigerant level check and refill' },
	'service-refrigerant-leak-repair': { ka: 'კონდიციონერის ჟონვის პოვნა და შეკეთება', en: 'Air conditioner leak detection and repair' },
	'service-deep-cleaning': { ka: 'კონდიციონერის გაწმენდა - შიდა და გარე ბლოკების სიღრმისეული წმენდა', en: 'Air conditioner indoor and outdoor unit deep cleaning' },
};

export function getPagePath(locale: Locale, pageId: PageId): string {
	const slug = pages[pageId].slug[locale];
	if (!slug && pageId !== 'home') return getPagePath(locale, 'services');
	if (locale === 'ka') return slug ? `/${slug}` : '/';
	return slug ? `/en/${slug}` : '/en';
}

export function getPageUrl(locale: Locale, pageId: PageId): string {
	return new URL(getPagePath(locale, pageId), SITE_URL).toString();
}

export function getPagesForLocale(locale: Locale): PageId[] {
	return pageIds.filter((pageId) => pageId !== 'home' && pages[pageId].slug[locale] !== '');
}
