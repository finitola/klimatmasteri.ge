import type { ImageMetadata } from 'astro';
import type { Locale } from './site';
import nonstandardWork from '../assets/images/works/kondicioneris-arastandartuli-momsaxureba.webp';
import electricalConnections from '../assets/images/works/kondicioneri-kavshirebis-swori-daerteba.webp';
import dirtyEvaporator from '../assets/images/works/kondicioneris-dabindzurebuli-saortqlebeli.webp';
import fanMotor from '../assets/images/works/kondicioneris-frtis-dzravis-shecvla.webp';
import indoorUnitCleaning from '../assets/images/works/kondicioneris-garecxva-profesionaluri-momsaxureba.webp';
import magneticStarter from '../assets/images/works/kondicioneris-magnituri-gamshvebis-shecvla.webp';
import pipeInstallation from '../assets/images/works/kondicioneris-milebis-montaji.webp';
import outdoorUnit from '../assets/images/works/kondicioneris-montaji-gare-bloki.webp';
import multisplitInstallation from '../assets/images/works/kondicioneris-montaji-multisplit-sistema.webp';
import rooftopInstallation from '../assets/images/works/kondicioneris-montaji-saxuravze.webp';
import indoorUnitInstallation from '../assets/images/works/kondicioneris-montaji-shida-bloki.webp';
import vacuuming from '../assets/images/works/kondicioneris-montaji-vakuumireba.webp';
import controlBoardRepair from '../assets/images/works/kondicioneris-platis-sheketeba.webp';
import airConditionerRepair from '../assets/images/works/kondicioneris-sheketeba.webp';
import drainagePump from '../assets/images/works/pompis-instalacia.webp';
import drainagePumpInUnit from '../assets/images/works/pompis-profesionaluri-instalacia.webp';
import professionalInstallation from '../assets/images/works/profesionaluri-kondicioneris-montaji.webp';

export interface WorkPhoto {
	image: ImageMetadata;
	alt: Record<Locale, string>;
	caption?: Record<Locale, string>;
}

export const workPhotos: WorkPhoto[] = [
	{
		image: nonstandardWork,
		alt: {
			ka: 'მაღალსართულიანი შენობის ფასადთან სამუშაო პლატფორმა',
			en: 'A work platform beside a high-rise building façade.',
		},
		caption: { ka: 'არასტანდარტული კონდიციონერის მომსახურება', en: 'Non-standard air-conditioning service' },
	},
	{
		image: electricalConnections,
		alt: {
			ka: 'კონდიციონერის ელექტრული სადენებისა და კავშირების მონტაჟი',
			en: 'Electrical wiring and connections inside an air conditioner.',
		},
		caption: { ka: 'კონდიციონერის კავშირების სწორი დაერთება', en: 'Correct air-conditioner electrical connections' },
	},
	{
		image: dirtyEvaporator,
		alt: {
			ka: 'კონდიციონერის დაბინძურებული აორთქლებელი',
			en: 'A dirty heat exchanger inside an air conditioner.',
		},
		caption: { ka: 'კონდიციონერის დაბინძურებული აორთქლებელი', en: 'A dirty air-conditioner evaporator coil' },
	},
	{
		image: fanMotor,
		alt: {
			ka: 'კონდიციონერის ვენტილატორის ძრავი',
			en: 'A fan motor component from an air conditioner.',
		},
		caption: { ka: 'კონდიციონერის ვენტილატორის ძრავის შეცვლა', en: 'Replacing an air-conditioner fan motor' },
	},
	{
		image: indoorUnitCleaning,
		alt: {
			ka: 'კონდიციონერის შიდა ბლოკის რეცხვა დამცავი საფარით',
			en: 'Washing an indoor air-conditioning unit with a protective cover.',
		},
		caption: { ka: 'კონდიციონერის გარეცხვა — პროფესიონალური მომსახურება', en: 'Professional air-conditioner cleaning' },
	},
	{
		image: magneticStarter,
		alt: {
			ka: 'კონდიციონერის მაგნიტური გამშვები ელექტრო კარადაში',
			en: 'A magnetic starter inside an air-conditioning electrical cabinet.',
		},
		caption: { ka: 'კონდიციონერის მაგნიტური გამშვების შეცვლა', en: 'Replacing an air-conditioner magnetic starter' },
	},
	{
		image: pipeInstallation,
		alt: {
			ka: 'კედელში გაყვანილი კონდიციონერის მილები რემონტის დროს',
			en: 'Air-conditioning pipes routed through a wall during renovation.',
		},
		caption: { ka: 'კონდიციონერის მილების მონტაჟი', en: 'Air-conditioner pipe installation' },
	},
	{
		image: outdoorUnit,
		alt: {
			ka: 'კონდიციონერის გარე ბლოკი შენობის ფასადზე',
			en: 'An outdoor air-conditioning unit mounted on a building façade.',
		},
		caption: { ka: 'კონდიციონერის გარე ბლოკის მონტაჟი', en: 'Outdoor unit installation' },
	},
	{
		image: multisplitInstallation,
		alt: {
			ka: 'მულტისპლიტ სისტემის გარე ბლოკების მონტაჟი შენობის ფასადზე',
			en: 'Outdoor units of a multi-split system mounted on a building façade.',
		},
		caption: { ka: 'კონდიციონერის მონტაჟი — მულტისპლიტ სისტემა', en: 'Multi-split system installation' },
	},
	{
		image: rooftopInstallation,
		alt: {
			ka: 'კონდიციონერის გარე ბლოკის მონტაჟი სახურავზე',
			en: 'An outdoor air-conditioning unit being installed on a roof.',
		},
		caption: { ka: 'კონდიციონერის მონტაჟი სახურავზე', en: 'Roof-mounted air-conditioner installation' },
	},
	{
		image: indoorUnitInstallation,
		alt: {
			ka: 'კედელზე დამონტაჟებული კონდიციონერის შიდა ბლოკი',
			en: 'A wall-mounted indoor air-conditioning unit.',
		},
		caption: { ka: 'კონდიციონერის შიდა ბლოკის მონტაჟი', en: 'Indoor unit installation' },
	},
	{
		image: vacuuming,
		alt: {
			ka: 'კონდიციონერის ვაკუუმირება მანომეტრიანი კოლექტორით',
			en: 'Vacuuming an air-conditioning system with a manifold gauge set.',
		},
		caption: { ka: 'კონდიციონერის ვაკუუმირება მონტაჟისას', en: 'Air-conditioner vacuuming during installation' },
	},
	{
		image: controlBoardRepair,
		alt: {
			ka: 'კონდიციონერის ელექტრონული პლატის შეკეთება',
			en: 'Repairing an air conditioner control board.',
		},
		caption: { ka: 'კონდიციონერის პლატის შეკეთება', en: 'Air-conditioner control board repair' },
	},
	{
		image: airConditionerRepair,
		alt: {
			ka: 'კონდიციონერის გარე ბლოკის დიაგნოსტიკა მანომეტრიანი კოლექტორით',
			en: 'Diagnosing an outdoor air-conditioning unit with a manifold gauge set.',
		},
		caption: { ka: 'კონდიციონერის შეკეთება', en: 'Air-conditioner repair' },
	},
	{
		image: drainagePump,
		alt: {
			ka: 'კონდიციონერის სადრენაჟო პომპა შიდა ბლოკის მილებთან',
			en: 'A condensate pump connected to an indoor air-conditioning unit.',
		},
		caption: { ka: 'პომპის ინსტალაცია', en: 'Condensate pump installation' },
	},
	{
		image: drainagePumpInUnit,
		alt: {
			ka: 'კონდიციონერის სადრენაჟო ტუმბოს მონტაჟი',
			en: 'A condensate pump installed inside an air-conditioning unit.',
		},
		caption: { ka: 'პომპის პროფესიონალური ინსტალაცია', en: 'Professional condensate pump installation' },
	},
	{
		image: professionalInstallation,
		alt: {
			ka: 'კონდიციონერის გარე ბლოკის მონტაჟი სახურავზე',
			en: 'An outdoor air-conditioning unit installed on a rooftop.',
		},
		caption: { ka: 'კონდიციონერის პროფესიონალური მონტაჟი', en: 'Professional air-conditioner installation' },
	},
];
