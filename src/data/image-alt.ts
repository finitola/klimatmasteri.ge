import type { Locale, PageId } from './site';

type LocalizedAlt = Record<Locale, string>;

/**
 * Pages whose hero shows a photo (see `hasPhotoHero` in PageContent.astro).
 * Georgian pages: Georgian description + Latin keywords.
 * English pages: Latin keywords only.
 */
type PhotoHeroPageId = Extract<
	PageId,
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
>;

function altText(kaDescription: string, latinKeywords: string): LocalizedAlt {
	return {
		ka: `${kaDescription} | ${latinKeywords}`,
		en: latinKeywords,
	};
}

const licensingAlt = altText(
	'ფრეონის სალიცენზიო გამოცდის ტესტის ფურცელი',
	'macivaragentis freonis salicenzio gamocda',
);

const pageHeroAlt: Record<PhotoHeroPageId, LocalizedAlt> = {
	services: altText(
		'კონდიციონერის მონტაჟი და სერვისი, ხელოსანი კედლის კონდიციონერზე მუშაობს',
		'kondicioneris montaji, kondicioneris servisebi',
	),
	about: altText(
		'კონდიციონერის ხელოსანი მანომეტრებით გარე ბლოკებს ამოწმებს',
		'chven shesaxeb kondicioneris xelosani',
	),
	contact: altText(
		'კონდიციონერის ხელოსანი და კლიენტი ბინაში',
		'sakontakto informacia, gamoidzaxe kondicioneris xelosani',
	),
	faq: altText(
		'ხელოსანი კლიენტს კონდიციონერის შესახებ კონსულტაციას უწევს',
		'kitxvebi kondicioneris shesaxeb, konsultacia',
	),
	'air-conditioner-service': altText(
		'ხელოსანი მულტიმეტრით კონდიციონერის დიაგნოსტიკას ატარებს',
		'kondicioneris diagnostika, kondicioneris sheketeba',
	),
	learning: altText(
		'შენობის სახურავზე გარე ბლოკები და კონდიცირების სისტემები',
		'kondicirebis sistemebi',
	),
	'air-conditioner-components': altText(
		'კონდიციონერის კომპონენტები: კომპრესორი, ვენტილატორი, პლატა და სპილენძის მილები',
		'kondicioneris komponentebi',
	),
	'air-conditioner-electrical': altText(
		'კონდიციონერის ელექტრული კომპონენტები: მართვის პლატა, კონტაქტორი და კონდენსატორი',
		'kondicioneris eleqtrooba',
	),
	refrigerants: altText(
		'მაცივარაგენტის ბალონები R-410A, R-22, R-134a და მანომეტრები',
		'macivaragentebi, freoni',
	),
	calculators: altText(
		'ხელოსანი პლანშეტით სამანქანო ოთახში, კონდიციონერის გაანგარიშებები',
		'kondicioneris kalkulatorebi',
	),
	licensing: licensingAlt,
	'licensing-learning': licensingAlt,
	'licensing-info': licensingAlt,
	'licensing-testing': altText(
		'ფრეონის გამოცდის სიმულაცია კომპიუტერის ეკრანზე',
		'macivaragentis freonis gamocdis simulaciuri garemo',
	),
};

const homeKeywords = 'kondicioneris xelosani';

/** Home hero keeps its existing alt text; Latin keywords are appended. */
export const homeHeroAlt: LocalizedAlt = {
	ka: `კონდიციონერის ხელოსანი კედლის კონდიციონერს ამოწმებს | ${homeKeywords}`,
	en: `Air conditioner technician inspecting a wall-mounted unit | ${homeKeywords}`,
};

export const homeSystemsAlt: LocalizedAlt = altText(
	'შენობის სახურავზე კონდიცირების და ვენტილაციის სისტემები',
	'kondicirebis sistemebi',
);

function isPhotoHeroPage(pageId: PageId): pageId is PhotoHeroPageId {
	return pageId in pageHeroAlt;
}

export function getPageHeroAlt(locale: Locale, pageId: PageId): string {
	return isPhotoHeroPage(pageId) ? pageHeroAlt[pageId][locale] : '';
}
