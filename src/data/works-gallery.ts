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
import disassembledIndoorUnit from '../assets/images/works/kondicioneris-dashlili-shida-bloki.webp';
import condensatePump from '../assets/images/works/kondicioneris-sadrenaje-pompa.webp';
import controlBoard from '../assets/images/works/kondicioneris-eleqtro-plata.webp';
import electricalComponents from '../assets/images/works/kondicioneris-eleqtro-komponentebis-detalebi.webp';
import electricalWiring from '../assets/images/works/kondicioneris-eleqtro-sadenebi.webp';
import rooftopPipes from '../assets/images/works/kondicioneris-milebi-saxuravze.webp';
import removedFanMotor from '../assets/images/works/kondicioneris-ventilatoris-dzravis-motor-i.webp';
import wallPipesFirst from '../assets/images/works/kondicioneris-milebis-montaji-kedelshi-1.webp';
import wallPipesSecond from '../assets/images/works/kondicioneris-milebis-montaji-kedelshi-2.webp';
import indoorUnitElectrical from '../assets/images/works/kondicioneris-shida-blokis-eleqtrooba.webp';
import dirtyFilters from '../assets/images/works/kondicioneris-dabindzurebuli-filtrebi.webp';
import concealedPipes from '../assets/images/works/kondicioneris-milebi-chashenebis-montaji.webp';
import indoorPipeRouting from '../assets/images/works/kondicioneris-milebis-gayvana.webp';
import wallPipesThird from '../assets/images/works/kondicioneris-milebis-montaji-kedelshi-3.webp';

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
			ka: 'კონდიციონერის დაბინძურებული საორთქლებელი',
			en: 'A dirty heat exchanger inside an air conditioner.',
		},
		caption: { ka: 'კონდიციონერის დაბინძურებული საორთქლებელი', en: 'A dirty air-conditioner evaporator coil' },
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
			ka: 'კონდიციონერის იზოლირებული მილები, რომლებიც ფასადზე დამონტაჟებულ გარე ბლოკს უერთდება',
			en: 'Insulated air-conditioning pipes routed along the façade to the mounted outdoor unit.',
		},
		caption: { ka: 'კონდიციონერის მილების გაყვანა გარე ბლოკთან', en: 'Air-conditioning pipes routed to an outdoor unit' },
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
	{
		image: disassembledIndoorUnit,
		alt: {
			ka: 'დაშლილი კედლის კონდიციონერის შიდა ბლოკი, რომელშიც საორთქლებელი და ელექტრული ნაწილები ჩანს',
			en: 'A disassembled wall-mounted air conditioner with its evaporator and electrical parts exposed.',
		},
		caption: { ka: 'კონდიციონერის შიდა ბლოკის დაშლა', en: 'Disassembly of an indoor unit' },
	},
	{
		image: condensatePump,
		alt: {
			ka: 'კონდიციონერის სადრენაჟო პომპა შიდა ბლოკის კორპუსთან',
			en: 'A condensate drain pump beside the casing of an indoor air-conditioning unit.',
		},
		caption: { ka: 'კონდიციონერის სადრენაჟო პომპა', en: 'Air-conditioner condensate pump' },
	},
	{
		image: controlBoard,
		alt: {
			ka: 'კონდიციონერის მართვის ელექტრონული პლატა მასზე მიერთებული სადენებით',
			en: 'An air-conditioner control board with connected wiring.',
		},
		caption: { ka: 'კონდიციონერის ელექტრონული პლატა', en: 'Air-conditioner control board' },
	},
	{
		image: electricalComponents,
		alt: {
			ka: 'კონდიციონერის ელექტრულ განყოფილებაში არსებული სადენები, კონდენსატორი და რელე',
			en: 'Wiring, a capacitor and a relay inside an air-conditioner electrical compartment.',
		},
		caption: { ka: 'კონდიციონერის ელექტრული კომპონენტები', en: 'Air-conditioner electrical components' },
	},
	{
		image: electricalWiring,
		alt: {
			ka: 'კონდიციონერის ელექტრულ ნაწილში არსებული სადენები და მტვრიანი კომპონენტები',
			en: 'Wiring and dusty components inside an air-conditioner electrical compartment.',
		},
		caption: { ka: 'კონდიციონერის ელექტრული ნაწილი', en: 'Air-conditioner electrical compartment' },
	},
	{
		image: rooftopPipes,
		alt: {
			ka: 'სახურავზე გაყვანილი კონდიციონერის მილები დამცავი თბოიზოლაციით',
			en: 'Air-conditioning pipes with protective insulation routed across a rooftop.',
		},
		caption: { ka: 'კონდიციონერის მილები სახურავზე', en: 'Air-conditioning pipes on a rooftop' },
	},
	{
		image: removedFanMotor,
		alt: {
			ka: 'კონდიციონერის გარე ბლოკის ამოღებული ვენტილატორის ელექტროძრავი',
			en: 'A removed fan motor from an air-conditioner outdoor unit.',
		},
		caption: { ka: 'კონდიციონერის ვენტილატორის ძრავი', en: 'Air-conditioner fan motor' },
	},
	{
		image: wallPipesFirst,
		alt: {
			ka: 'კედელში გაყვანილი და თბოიზოლაციით დაფარული კონდიციონერის მილები მონტაჟამდე',
			en: 'Insulated air-conditioning pipes routed through a wall before installation.',
		},
		caption: { ka: 'კედელში ჩასაყოლებელი მილების მონტაჟი', en: 'Installing pipes inside a wall' },
	},
	{
		image: wallPipesSecond,
		alt: {
			ka: 'კედლის ღარში გაყვანილი კონდიციონერის მილები და დრენაჟის შლანგი',
			en: 'Air-conditioning pipes and a drain hose routed through a wall channel.',
		},
		caption: { ka: 'კონდიციონერის მილები კედლის ღარში', en: 'Air-conditioning pipes in a wall channel' },
	},
	{
		image: indoorUnitElectrical,
		alt: {
			ka: 'გახსნილი კონდიციონერის შიდა ბლოკის ელექტრული კავშირები და სპილენძის მილები',
			en: 'Electrical connections and copper pipes inside an opened indoor air-conditioning unit.',
		},
		caption: { ka: 'შიდა ბლოკის ელექტრული კავშირები', en: 'Indoor-unit electrical connections' },
	},
	{
		image: dirtyFilters,
		alt: {
			ka: 'კასეტური კონდიციონერის მტვრით დაფარული ფილტრების რეცხვა გამდინარე წყლით',
			en: 'Dust-covered cassette air-conditioner filters being rinsed under running water.',
		},
		caption: { ka: 'კასეტური კონდიციონერის დაბინძურებული ფილტრები', en: 'Dirty cassette air-conditioner filters' },
	},
	{
		image: concealedPipes,
		alt: {
			ka: 'კონდიციონერის მონტაჟისთვის კედელში წინასწარ გაყვანილი და იზოლირებული მილები',
			en: 'Pre-installed insulated pipes routed through a wall for an air conditioner.',
		},
		caption: { ka: 'კონდიციონერის ჩასაშენებელი მილები', en: 'Concealed air-conditioning pipes' },
	},
	{
		image: indoorPipeRouting,
		alt: {
			ka: 'კონდიციონერის მილები, რომლებიც ოთახის ჭერის გასწვრივაა გაყვანილი; ფანჯრის მიღმა გარე ბლოკი ჩანს',
			en: 'Air-conditioning pipes routed along the indoor ceiling, with the outdoor unit visible beyond the window.',
		},
		caption: { ka: 'კონდიციონერის მილების გაყვანა', en: 'Routing air-conditioning pipes' },
	},
	{
		image: wallPipesThird,
		alt: {
			ka: 'კედლის ღარში გაყვანილი კონდიციონერის მილები და გოფრირებული სადრენაჟო მილი',
			en: 'Air-conditioning pipes and a corrugated drain hose routed through a wall channel.',
		},
		caption: { ka: 'კონდიციონერის მილების წინასწარი მონტაჟი', en: 'Pre-installation of air-conditioning pipes' },
	},
];
