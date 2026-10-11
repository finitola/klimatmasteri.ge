export interface FaqListItem {
	label: string;
	text: string;
}

type FaqBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'list'; items: FaqListItem[] };

export interface FaqItem {
	question: string;
	blocks: FaqBlock[];
}

const faqItemsKa: FaqItem[] = [
	{
		question: 'შემიძლია თუ არა დამოუკიდებლად დავამონტაჟო კონდიცირების სისტემა?',
		blocks: [{
			type: 'paragraph',
			text: 'არა, ეს მკაცრად არ არის რეკომენდებული. კონდიცირების სისტემების მონტაჟი მოითხოვს პროფესიონალურ ცოდნას ელექტროობაში, მილგაყვანილობასა და მაცივარაგენტების (ფრეონის) უსაფრთხოდ მართვაში. არასწორმა მონტაჟმა შეიძლება გამოიწვიოს სისტემის დაზიანება, საფრთხე შეუქმნას თქვენს უსაფრთხოებას და გააუქმოს აპარატურის ქარხნული გარანტია.',
		}],
	},
	{
		question: 'რა განსხვავებაა ინვერტორულ და არაინვერტორულ (ონ/ოფ) სისტემებს შორის?',
		blocks: [{
			type: 'paragraph',
			text: 'არაინვერტორული სისტემა მუშაობს სრული დატვირთვით: ის ირთვება, აღწევს სასურველ ტემპერატურას და შემდეგ მთლიანად ითიშება, რაც იწვევს ტემპერატურის მერყეობას და დენის დიდ ხარჯს. ინვერტორული სისტემა კი უწყვეტად მუშაობს და ავტომატურად, მდორედ არეგულირებს კომპრესორის სიმძლავრეს. ამის წყალობით, ინვერტორული სისტემა ბევრად ჩუმია, ზუსტად ინარჩუნებს ტემპერატურას და 30-50%-ით მეტ ელექტროენერგიას ზოგავს.',
		}],
	},
	{
		question: 'რამდენად ხშირად უნდა ჩავუტარო ტექნიკური მომსახურება ჩემს გათბობა-გაგრილების სისტემას?',
		blocks: [{
			type: 'paragraph',
			text: 'იდეალურ შემთხვევაში, წელიწადში ორჯერ. კონდიციონერის შემოწმება გაზაფხულზეა რეკომენდებული, ხოლო გათბობის სისტემის – შემოდგომაზე, სეზონის დაწყებამდე. რეგულარული სერვისი ამცირებს მოულოდნელი გაფუჭების რისკს, ზოგავს ენერგიას და ახანგრძლივებს აპარატურის სიცოცხლეს.',
		}],
	},
	{
		question: 'რამდენად ხშირად უნდა გაიწმინდოს ან გამოიცვალოს ჰაერის ფილტრები?',
		blocks: [{
			type: 'paragraph',
			text: 'სტანდარტული ჰაერის ფილტრები უნდა გაიწმინდოს ან გამოიცვალოს ყოველ 3 თვეში. თუმცა, თუ სახლში გყავთ შინაური ცხოველები, ცხოვრობთ მტვრიან უბანში, ან ოჯახის რომელიმე წევრს აქვს ალერგია, გირჩევთ ფილტრები ყოველთვიურად შეცვალოთ ან გაწმინდოთ.',
		}],
	},
	{
		question: 'რა არის თერმოსტატის იდეალური ტემპერატურა სახლში?',
		blocks: [{
			type: 'paragraph',
			text: 'ზაფხულში ენერგოეფექტურობისთვის რეკომენდებულია 22-23°C, ხოლო ზამთარში 27-29°C. ენერგიის დასაზოგად შეგიძლიათ ტემპერატურა ოდნავ შეცვალოთ იმ დროს, როცა სახლში არ ხართ ან გძინავთ.',
		}],
	},
	{
		question: 'რატომ უბერავს ჩემი კონდიციონერი თბილ ჰაერს გაგრილებისას?',
		blocks: [{
			type: 'paragraph',
			text: 'ამის რამოდენიმე მიზეზი არსებობს: დაბინძურებული ფილტრი, მაცივარაგენტის (ფრეონი) გაჟონვა, თერმოსტატის არასწორი პარამეტრები ან გამორთული კომპრესორი. პირველ რიგში, შეამოწმეთ თერმოსტატის რეჟიმი და ფილტრი, თუ პრობლემა არ მოგვარდა, დაგჭირდებათ კონდიციონერის დიაგნოსტიკა და სერტიფიცირებული ტექნიკოსის გამოძახება.',
		}],
	},
	{
		question: 'რატომ გამოსცემს ჩემი სისტემა უცნაურ ხმებს?',
		blocks: [{
			type: 'paragraph',
			text: 'უჩვეულო ხმები (წრიპინი, გუგუნი, კაკუნი ან სტვენა) მიუთითებს მექანიკურ პრობლემებზე. მაგალითად: მოშვებულ დეტალებზე, ძრავის გაუმართაობასა ან ვენტილატორის დაზიანებაზე. ასეთ დროს უმჯობესია დაუყოვნებლივ გამორთოთ სისტემა და დაუკავშირდეთ სპეციალისტს, რათა თავიდან აიცილოთ სერიოზული დაზიანება.',
		}],
	},
	{
		question: 'რატომ წვეთავს/გადმოდის წყალი ჩემი კონდიციონერიდან?',
		blocks: [
			{
				type: 'paragraph',
				text: 'სისტემიდან წყლის გაჟონვა ან წვეთა ყველაზე ხშირად სადრენაჟე სისტემის გაუმართაობაზე მიუთითებს.',
			},
			{
				type: 'paragraph',
				text: 'ძირითადი მიზეზია გაჭედილი სადრენაჟე მილი — დროთა განმავლობაში მილში მტვერი, ობი და ნადები გროვდება, რაც ბლოკავს კონდენსატის (წყლის) გადინებას და ის უკან, შენობაში ბრუნდება.',
			},
			{
				type: 'paragraph',
				text: 'სხვა მიზეზები შეიძლება იყოს: დაზიანებული სადრენაჟე ტუმბო (პომპა), არასწორი დახრილობით დამონტაჟებული მილი, ან დაბინძურებული ფილტრის გამო გაყინული შიდა რადიატორი. წყლის გაჟონვის იგნორირებამ შეიძლება დააზიანოს კედლები, ჭერი და ხელი შეუწყოს ობის გაჩენას. ამიტომ, პრობლემის აღმოსაფხვრელად და სადრენაჟე მილების გასაწმენდად აუცილებელია ტექნიკოსის დროული გამოძახება, რადგან კონდიციონერი წყალს ასხამს ხშირად სწორედ დრენაჟის პრობლემის გამო.',
			},
		],
	},
	{
		question: 'რა არის SEER და COP და რატომ არის ეს მაჩვენებლები მნიშვნელოვანი?',
		blocks: [
			{
				type: 'paragraph',
				text: 'SEER და COP თქვენი კლიმატური ტექნიკის ენერგოეფექტურობის უმთავრესი მაჩვენებლებია:',
			},
			{
				type: 'list',
				items: [
					{ label: 'SEER', text: ' (სეზონური ენერგოეფექტურობის კოეფიციენტი): ზომავს სისტემის გაგრილების ეფექტურობას ზაფხულის სეზონზე.' },
					{ label: 'COP', text: ' (მწარმოებლურობის კოეფიციენტი): აჩვენებს გათბობის ეფექტურობას ზამთარში.' },
				],
			},
			{
				type: 'paragraph',
				text: 'მაგალითად, თუ აპარატის COP არის 4, ეს ნიშნავს, რომ ყოველი 1 კვტ მოხმარებული ელექტროენერგიით სისტემა 4 კვტ სითბოს გამოიმუშავებს. მარტივად რომ ვთქვათ: საცხოვრებელ თუ კომერციულ ფართში, რაც უფრო მაღალია SEER და COP მაჩვენებლები, მით უფრო მძლავრი და ენერგოეფექტურია აპარატურა, რაც საბოლოოდ მნიშვნელოვნად ამცირებს თქვენს კომუნალურ გადასახადებს.',
			},
		],
	},
];

const faqItemsEn: FaqItem[] = [
	{
		question: 'Can I install an air-conditioning system myself?',
		blocks: [{ type: 'paragraph', text: 'No. Installing an air-conditioning system yourself is not recommended. The work requires professional knowledge of electrical systems, piping, and safe refrigerant handling. Incorrect installation can damage the system, put your safety at risk, and void the manufacturer’s warranty.' }],
	},
	{
		question: 'What is the difference between inverter and non-inverter (on/off) systems?',
		blocks: [{ type: 'paragraph', text: 'A non-inverter system runs at full output: it turns on, reaches the desired temperature, and then switches off completely. This causes temperature fluctuations and higher electricity use. An inverter system runs continuously and automatically adjusts compressor output smoothly. As a result, it is quieter, maintains the temperature more precisely, and can save 30–50% more electricity.' }],
	},
	{
		question: 'How often should my heating and cooling system be serviced?',
		blocks: [{ type: 'paragraph', text: 'Ideally, twice a year. We recommend checking the air conditioner in spring and the heating system in autumn, before the season begins. Regular servicing reduces the risk of unexpected breakdowns, saves energy, and extends the equipment’s service life.' }],
	},
	{
		question: 'How often should air filters be cleaned or replaced?',
		blocks: [{ type: 'paragraph', text: 'Standard air filters should be cleaned or replaced every three months. If you have pets, live in a dusty area, or someone in your household has allergies, we recommend cleaning or replacing the filters monthly.' }],
	},
	{
		question: 'What is the ideal thermostat temperature at home?',
		blocks: [{ type: 'paragraph', text: 'For energy efficiency, 22–23°C is recommended in summer and 27–29°C in winter. To save energy, you can adjust the temperature slightly while you are away or asleep.' }],
	},
	{
		question: 'Why is my air conditioner blowing warm air while cooling?',
		blocks: [{ type: 'paragraph', text: 'There are several possible causes: a dirty filter, a refrigerant leak, incorrect thermostat settings, or a compressor that is not running. First, check the thermostat mode and the filter. If the problem remains, you will need air-conditioner diagnostics from a certified technician.' }],
	},
	{
		question: 'Why is my system making unusual noises?',
		blocks: [{ type: 'paragraph', text: 'Unusual noises such as squeaking, humming, knocking, or whistling can indicate mechanical problems, including loose parts, a motor fault, or a damaged fan. In this situation, it is best to switch off the system and contact a specialist to prevent more serious damage.' }],
	},
	{
		question: 'Why is water dripping or leaking from my air conditioner?',
		blocks: [
			{ type: 'paragraph', text: 'Water leaking or dripping from the system most often indicates a problem with the drainage system.' },
			{ type: 'paragraph', text: 'The most common cause is a clogged drain pipe. Over time, dust, mold, and residue can build up inside the pipe, blocking condensate drainage and causing water to flow back indoors.' },
			{ type: 'paragraph', text: 'Other possible causes include a damaged drain pump, a pipe installed without the correct slope, or an indoor coil frozen because of a dirty filter. Ignoring a leak can damage walls and ceilings and encourage mold growth. A technician should be called promptly to resolve the issue and clean the drain pipes, as drainage problems are a common reason air conditioners leak water.' },
		],
	},
	{
		question: 'What are SEER and COP, and why are they important?',
		blocks: [
			{ type: 'paragraph', text: 'SEER and COP are key measures of your climate-control equipment’s energy efficiency:' },
			{ type: 'list', items: [
				{ label: 'SEER', text: ' (Seasonal Energy Efficiency Ratio): measures a system’s cooling efficiency over the summer season.' },
				{ label: 'COP', text: ' (Coefficient of Performance): indicates heating efficiency in winter.' },
			] },
			{ type: 'paragraph', text: 'For example, a unit with a COP of 4 produces 4 kW of heat for every 1 kW of electricity it consumes. In simple terms, the higher the SEER and COP ratings, the more energy-efficient the equipment is, which can significantly reduce utility bills in homes and commercial spaces.' },
		],
	},
];

export const faqItemsByLocale = { ka: faqItemsKa, en: faqItemsEn };
