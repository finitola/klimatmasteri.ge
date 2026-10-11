import type { PageId } from './site';

export type ServicePageId = Extract<PageId, `service-${string}`>;

interface LocalizedCopy {
	ka: string;
	en: string;
}

interface ServiceDetailCopy {
	intro: LocalizedCopy;
	description: LocalizedCopy;
	scopeTitle: LocalizedCopy;
	scope: LocalizedCopy[];
	noteTitle: LocalizedCopy;
	note: LocalizedCopy;
}

export const serviceDetails: Record<ServicePageId, ServiceDetailCopy> = {
	'service-consultation': {
		intro: {
			ka: 'გჭირდებათ გამოცდილი კონდიციონერის ხელოსანი? პროფესიონალთან კონსულტაცია დაგეხმარებათ ზუსტად განსაზღვროთ, რომელი სისტემაა შესაფერისი და რა მომსახურება ესაჭიროება მას.',
			en: 'A consultation with an air-conditioning technician can help you choose a system for installation or determine what service an existing system may need to operate properly.',
		},
		description: {
			ka: 'კონსულტაციისას კონდიციონერის ხელოსანი დეტალურად განიხილავს თქვენი კლიმატური სისტემის საჭიროებებს. ერთად განვსაზღვრავთ, რა ტიპის მოწყობილობა შეესაბამება თქვენს ფართს, ან რა სერვისია აუცილებელი არსებული ტექნიკის გამართულად მუშაობისთვის. პროფესიონალური კონსულტაცია მოიცავს როგორც კონდიციონერის მონტაჟის დაგეგმვას, ისე გაუმართაობის შემთხვევაში — კონდიციონერის შეკეთებასთან დაკავშირებულ საკითხებს.',
			en: 'During a consultation, you can discuss your air-conditioning system with a technician. Together, you can consider which system may suit your needs and what service may help an existing system operate properly. The consultation covers both installation and repair.',
		},
		scopeTitle: { ka: 'კონსულტაციის თემები', en: 'Consultation topics' },
		scope: [
			{ ka: 'კონდიციონერის მონტაჟისთვის ოპტიმალური სისტემის შერჩევა', en: 'Choosing a system type for installation' },
			{ ka: 'არსებული სისტემის ხარვეზების განხილვა', en: 'Discussing problems with an existing system' },
			{ ka: 'საჭიროებების განსაზღვრა: გაგრილების სისტემის პროექტირება, კონდიციონერის მონტაჟი, კონდიციონერის დემონტაჟი, კონდიციონერის შეკეთება, კონდიციონერის გაწმენდა და ყველა დეტალის სიღრმისეული განხილვა', en: 'Defining your needs: cooling-system design, air-conditioner installation and removal, repair and cleaning, and an in-depth discussion of the details' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'თუ პრობლემის მიზეზის დასადგენად მოწყობილობის ფიზიკური დათვალიერებაა საჭირო, მხოლოდ კონსულტაცია ვერ ჩაანაცვლებს სრულყოფილ პროცესს (კონდიციონერის დიაგნოსტიკა).',
			en: 'If identifying the cause of a problem requires inspecting the unit, a consultation does not replace a diagnostic assessment.',
		},
	},
	'service-installation': {
		intro: {
			ka: 'პროფესიონალური კონდიციონერის მონტაჟი გულისხმობს სივრცის სწორად შერჩევას, სისტემის ტექნიკურად გამართულ დაყენებას და ბლოკების უსაფრთხო დაკავშირებას.',
			en: 'Air-conditioner installation involves choosing a suitable location, installing the system correctly, and safely connecting the indoor and outdoor units.',
		},
		description: {
			ka: 'კონდიციოენრის მონტაჟი იწყება შესაფერისი ადგილის შერჩევით, რადგან არასწორი ადგილის შერჩევისას ვერ მოხდება მოწყობილობის სწორი გამოყენება რაც გამოიწვევს, მისი ექსპულატაციის ვადის შემცირებას, არაეფექტურ გაგრილებას/გათბობას, გაზრდილ დენის მოხმარებას, საბოლოო ჯამში მომხმარებელის დაზარალებას. სტანდარტების დაცვით შესრულებული პროფესიონალური კონდიციონერის მონტაჟი, თავიდან აგარიდებთ ზემოთ ჩამოთვლილ პრობლემებს, თქვენი სისტემა იმუშაცვებს ხანგრძლივად და მაღალი ეფექტურობით.',
			en: 'Installation begins with choosing a suitable location. An unsuitable location can make the unit difficult to use, shorten its service life, reduce cooling and heating efficiency, increase electricity use, and lead to avoidable costs. Professional installation carried out in line with applicable standards helps prevent these problems and supports long-lasting, efficient operation.',
		},
		scopeTitle: { ka: 'მონტაჟის ძირითადი ეტაპები', en: 'Main installation steps' },
		scope: [
			{ ka: 'სამონტაჟო სივრცისა და ბლოკების იდეალური ადგილის შერჩევა', en: 'Selecting the installation space and unit positions' },
			{ ka: 'შიდა და გარე ბლოკების ტექნიკურად სწორი მონტაჟი', en: 'Properly installing the indoor and outdoor units' },
			{ ka: 'სისტემის ვაკუუმირება', en: 'Evacuating the system with a vacuum pump' },
			{ ka: 'საკომუნიკაციო კაბელების სწორად დაერთება', en: 'Connecting the communication cables correctly' },
			{ ka: 'კვების კაბელის კვეთის სწორად შერჩევა', en: 'Selecting the correct power-cable size' },
			{ ka: 'სისტემის კვების წყაროსთან მიერთება', en: 'Connecting the system to the power supply' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'მონტაჟის საბოლოო სირთულე და მოცულობა განისაზღვრება სისტემის ტიპისა და ობიექტზე არსებული სპეციფიკური პირობების მიხედვით.',
			en: 'The final scope of work depends on the system type and the conditions at the site.',
		},
	},
	'service-pipe-preinstallation': {
		intro: {
			ka: 'კონდიციონერის მილების წინასწარი მონტაჟი (დაქსელვა) გულისხმობს, საკომუნიკაციო კაბელის, კვების კაბელის, მაცივარაგენტის(ფრეონის) მილების და სადრენაჟე სისტემის წინასწარ მოწყობას, რომელიც ხორციელდება უშუალოდ რემონტამდე ან რემონტის პროცესში.',
			en: 'Air-conditioner pipe pre-installation (rough-in) involves routing the interconnecting and power cables, refrigerant (Freon) pipes, and drain line in advance. This work is carried out before or during renovation.',
		},
		description: {
			ka: 'სარემონტო პროცესამდე ან უშუალოდ პროცესის დროს, კონდიციონერის ხელოსანი წინასწარ აპროექტებს შიდა და გარე ბლოკების დამაკავშირებელ კომუნიკაციებს როგორიცაა: კონდიციონერის კომუნიკაციის კაბელი, კონდიციონერის მილები, კონდიციონერის დრენაჟი, კონდიციონერის კვების კაბელი. ეს გეხმარებათ არასტანდარტულ ადგილას განათავსოთ კონდიციონერის როგორც შიდა ისე გარე ბლოკები, ასევე გეხმარებათ თავიდან აირიდოთ რემონტის შემდეგ, სანგრევი და სახვრეტი სამუშაოები, რომლებიც დამერწმუნებით დიდ მტვერთან და დისკომფორტთან არის დაკავშირებული.',
			en: 'Before or during renovation, the air-conditioning technician plans the connections between the indoor and outdoor units: the interconnecting cable, refrigerant pipes, drain line, and power cable. This allows the units to be placed in less conventional locations and helps avoid disruptive drilling and wall-chasing after renovation, which can create considerable dust and inconvenience.',
		},
		scopeTitle: { ka: 'წინასწარი მონტაჟის ეტაპები', en: 'Pre-installation steps' },
		scope: [
			{ ka: 'ობიექტის დათვალიერება და შიდა და გარე ბლოკების განთავსების შეთანხმება, მომსახურებისთვის საჭირო სივრცის გათვალისწინებით', en: 'Assessing the site and agreeing on indoor and outdoor unit locations, with room for future maintenance' },
			{ ka: 'ბლოკებს შორის მაცივარაგენტის მილების მარშრუტის, საჭირო დიამეტრისა და კედელში გასასვლელების განსაზღვრა', en: 'Planning the refrigerant pipe route and required diameter, as well as wall penetrations between the units' },
			{ ka: 'მაცივარაგენტის მილების წინასწარ გაყვანა, თბოიზოლაციით დაფარვა და ბოლოების დაცვა სამშენებლო მტვრისა და ნარჩენებისგან', en: 'Installing and insulating the refrigerant pipes in advance, then protecting their ends from construction dust and debris' },
			{ ka: 'კონდენსატის დრენაჟის მარშრუტის დაგეგმვა და საჭირო დახრის უზრუნველყოფა წყლის შეუფერხებლად გასადინებლად', en: 'Planning the condensate drain route and providing the required slope for unobstructed water flow' },
			{ ka: 'საკომუნიკაციო და კვების კაბელების მარშრუტის მოწყობა; კვების კაბელის კვეთის შერჩევა მოწყობილობის მოთხოვნებისა და დატვირთვის მიხედვით', en: 'Routing the interconnecting and power cables; sizing the power cable for the equipment and electrical load' },
			{ ka: 'კომუნიკაციების განლაგების გადამოწმება კედლების მოპირკეთებამდე, დრენაჟის მუშაობისა და მაცივარაგენტის მილების ჰერმეტულობის შემოწმება', en: 'Checking the connection routes before wall finishing, and verifying drainage operation and refrigerant pipe tightness' },
		],
		noteTitle: { ka: 'მნიშვნელოვანია', en: 'Important' },
		note: {
			ka: 'რემონტის დაწყებამდე კონდიციონერის ხელოსანი აუცილებლად უნდა გაეცნოს ობიექტს, რათა ზუსტად დაიგეგმოს გაყვანილობა.',
			en: 'Before renovation begins, the air-conditioning technician should inspect the site to plan the cable and pipe routes accurately.',
		},
	},
	'service-drainage-system': {
		intro: {
			ka: 'კონდიციონერის სადრენაჟე სისტემა უზრუნველყოფს მუშაობისას წარმოქმნილი წყლის (კონდენსატის) უსაფრთხო გადინებას.',
			en: 'An air-conditioner drainage system carries away condensate produced during operation. A pump can be installed when needed.',
		},
		description: {
			ka: 'ხარისხიანი სადრენაჟე სისტემა აგარიდებთ წყლის გაჟონვასა და კედლების დაზიანებას. სერვისი მოიცავს კონდენსატის გადინების მარშრუტის შეფასებას და მოწყობას. თუ არსებული პირობები თვითდინებით გადინების საშუალებას არ იძლევა, კონდიციონერის ხელოსანი უზრუნველყოფს სპეციალური სადრენაჟე პომპის დამონტაჟებას.',
			en: 'This service includes assessing and arranging the condensate drainage route. If the site conditions do not allow gravity drainage, a condensate pump may be needed and connected to the system.',
		},
		scopeTitle: { ka: 'რას მოიცავს სერვისი', en: 'Service scope' },
		scope: [
			{ ka: 'კონდენსატის გადინების არსებული მარშრუტის შემოწმება', en: 'Assessing the existing condensate drainage route' },
			{ ka: 'სადრენაჟე მილის ოპტიმალური დახრით მოწყობა', en: 'Installing the drain line with the correct slope' },
			{ ka: 'საჭიროების შემთხვევაში სადრენაჟე პომპის შერჩევა და დაყენება', en: 'Determining whether a pump is needed and installing one when required' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'პომპა ყველა შემთხვევაში არ არის აუცილებელი; გადაწყვეტილებას კონდიციონერის ხელოსანი იღებს ობიექტის პირობების შეფასების შემდეგ.',
			en: 'A pump is not needed in every case. Its use depends on the drainage route and site conditions.',
		},
	},
	'service-water-leak': {
		intro: {
			ka: 'კონდიციონერიდან წყლის წვეთას რამდენიმე მიზეზი შეიძლება იწვევდეს. პრობლემის მოსაგვარებლად საჭიროა გაჟონვის წყაროს დადგენა.',
			en: 'An air conditioner can drip water for several reasons. The source of the leak needs to be identified to resolve the problem.',
		},
		description: {
			ka: 'კონდიციონერიდან წყლის წვეთა შეიძლება გამოწვეული იყოს შიდა ბლოკის დაბინძურებით, მაცივარაგენტის მილების ცუდი იზოლაციით ან გაუმართავი სადრენაჟე სისტემით. იშვიათად, განსაკუთრებით ძველი კონდიციონერის შემთხვევაში, პლასტმასის კონსტრუქციის დეფორმაციამაც შეიძლება წყლის გადმოღვრა გამოიწვიოს. ეს იშვიათი შემთხვევაა, თუმცა რეალური.',
			en: 'Water dripping from an air conditioner may be caused by dirt in the indoor unit, poor insulation around the refrigerant pipes, or a faulty drainage system. In rare cases, particularly with an older unit, a deformed plastic casing can also cause water to overflow.',
		},
		scopeTitle: { ka: 'წყლის წვეთის პრობლემის შემოწმება', en: 'Air-conditioner water leak inspection' },
		scope: [
			{ ka: 'შიდა ბლოკის დაბინძურებისა და წყლის გადმოსვლის ადგილის შემოწმება', en: 'Checking the indoor unit for dirt and locating where the water escapes' },
			{ ka: 'მაცივარაგენტის მილების იზოლაციის მდგომარეობის დათვალიერება', en: 'Inspecting the insulation around the refrigerant pipes' },
			{ ka: 'სადრენაჟე მილის გამტარობისა და კონდენსატის გადინების შემოწმება', en: 'Checking the drain line and condensate flow' },
			{ ka: 'ძველი მოწყობილობის შემთხვევაში პლასტმასის კონსტრუქციის დეფორმაციის შემოწმება', en: 'Checking an older unit for deformation of its plastic casing' },
			{ ka: 'შემოწმების შედეგის მიხედვით საჭირო წმენდის, იზოლაციის ან სადრენაჟე სისტემის მომსახურების განსაზღვრა', en: 'Identifying whether cleaning, insulation work, or drainage service is needed based on the inspection' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'წყლის წვეთის მიზეზი მხოლოდ გარეგნული დათვალიერებით ყოველთვის ვერ დგინდება და მიზეზის დასადგენად შესაძლოა შიდა ბლოკის სრული დაშლა გახდეს საჭირო. ზოგ შემთხვევაში მაცივარაგენტის გაჟონვის გამო სისტემა იყინება; ასეთ დროს საჭიროა სხვა სერვისი — გაჟონვის ადგილის მოძიება და შეკეთება, შემდეგ კი მაცივარაგენტით (ფრეონით) ზუსტი შევსება.',
			en: 'The cause of a water leak cannot always be identified by an external inspection alone; fully dismantling the indoor unit may be necessary. In some cases, a refrigerant leak causes the system to freeze. This requires a separate service to locate and repair the leak, followed by an accurate refrigerant (Freon) recharge.',
		},
	},
	'service-dismantling': {
		intro: {
			ka: 'კონდიციონერის დემონტაჟი მოიცავს მოწყობილობის უსაფრთხო მოხსნას და ფრეონის შენარჩუნებით სისტემის გათიშვას.',
			en: 'Air-conditioner dismantling involves safely removing the unit and disconnecting the system while retaining its refrigerant (Freon).',
		},
		description: {
			ka: 'სარემონტო სამუშაოების, ლოკაციის შეცვლის ან ახალი ტექნიკის შეძენის დროს აუცილებელია პროფესიონალური კონდიციონერის დემონტაჟი. ჩვენი კონდიციონერის ხელოსანი სისტემას ისე ხსნის, რომ არ დაზიანდეს მოწყობილობა და შენარჩუნდეს მაცივარაგენტი (ფრეონი), რაც სამომავლოდ ტექნიკის ხელახალი გამოყენებისა და უპრობლემო კონდიციონერის მონტაჟის საშუალებას იძლევა.',
			en: 'Professional dismantling may be needed during renovation, relocation, or when replacing equipment. The technician removes the system without damaging it and retains the refrigerant (Freon), allowing the unit to be reused after reinstallation.',
		},
		scopeTitle: { ka: 'დემონტაჟის ძირითადი ეტაპები', en: 'Main dismantling steps' },
		scope: [
			{ ka: 'ფრეონის (მაცივარაგენტის) გარე ბლოკში ტუმბვა და შენარჩუნება', en: 'Pumping the refrigerant (Freon) into the outdoor unit and retaining it' },
			{ ka: 'შიდა და გარე ბლოკების უსაფრთხო კონდიციონერის დემონტაჟი', en: 'Safely removing the indoor and outdoor units' },
			{ ka: 'მილების, კაბელებისა და სადრენაჟე შეერთებების ჰერმეტული გათიშვა', en: 'Sealing off and disconnecting the pipes, cables, and drain connections' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'არაპროფესიონალური მოხსნისას ფრეონი იკარგება. მიანდეთ კონდიციონერის დემონტაჟი გამოცდილ სპეციალისტს.',
			en: 'Improper removal can result in refrigerant loss. Have the air conditioner dismantled by an experienced specialist.',
		},
	},
	'service-diagnostics': {
		intro: {
			ka: 'ზუსტი კონდიციონერის დიაგნოსტიკა აუცილებელია გაუმართაობის ნამდვილი მიზეზის დროულად დასადგენად და სისტემის გადასარჩენად.',
			en: 'Accurate air-conditioner diagnostics are essential for promptly identifying the underlying fault and protecting the system.',
		},
		description: {
			ka: 'თუ სისტემა ხმაურობს, არ აგრილებს ან წყალს უშვებს, პირველი და ყველაზე მნიშვნელოვანი ნაბიჯი კონდიციონერის დიაგნოსტიკაა. გამოცდილი კონდიციონერის ხელოსანი ამოწმებს მოწყობილობის მუშაობის რეჟიმებს, წნევას, ელექტრულ და მექანიკურ კომპონენტებს. სწორი და პროფესიონალური კონდიციონერის დიაგნოსტიკა გვეხმარება ზუსტად განვსაზღვროთ, რა სახის კონდიციონერის შეკეთება ესაჭიროება ტექნიკას.',
			en: 'If the system is noisy, does not cool properly, or is leaking water, diagnostics are the first step. A technician checks the operating modes, pressure, and electrical and mechanical components to determine what repair may be needed.',
		},
		scopeTitle: { ka: 'დიაგნოსტიკის ძირითადი ეტაპები', en: 'Main diagnostic steps' },
		scope: [
			{ ka: 'სიმპტომების მოსმენა და სისტემის მუშაობის რეჟიმის შეფასება', en: 'Reviewing symptoms and operating mode' },
			{ ka: 'პრობლემური კომპონენტების, ფრეონის წნევისა და ელექტროობის შემოწმება', en: 'Checking relevant components, refrigerant pressure, and electrical systems' },
			{ ka: 'ზუსტი მიზეზის დადგენა და კონდიციონერის შეკეთების დაგეგმვა', en: 'Identifying the cause and planning the air-conditioner repair' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'კონდიციონერის დიაგნოსტიკა გაწვდით სრულ სურათს, რის შემდეგაც მარტივად მიიღებთ გადაწყვეტილებას შეკეთებაზე.',
			en: 'Diagnostics provide a clear picture of the system’s condition so you can decide whether to proceed with a repair.',
		},
	},
	'service-repair': {
		intro: {
			ka: 'ხარისხიანი კონდიციონერის შეკეთება უზრუნველყოფს გამოვლენილი ხარვეზების სრულ აღმოფხვრას და მოწყობილობის მუშაობის გახანგრძლივებას.',
			en: 'A high-quality air-conditioner repair resolves identified faults and helps extend the equipment’s service life.',
		},
		description: {
			ka: 'მას შემდეგ, რაც ჩატარდება პროფესიონალური კონდიციონერის დიაგნოსტიკა და დადგინდება მიზეზი, იწყება უშუალოდ პრობლემის მოგვარება. კონდიციონერის შეკეთება შეიძლება მოიცავდეს როგორც მცირე მექანიკურ ან ელექტრულ სამუშაოებს, ისე დაზიანებული დეტალების შეკეთებას ან ახლით ჩანაცვლებას. ჩვენი კონდიციონერის ხელოსანი სამუშაოს ასრულებს უმაღლესი სტანდარტით, რათა სისტემამ კვლავ გამართულად და ენერგოეფექტურად იმუშაოს.',
			en: 'Once diagnostics identify the cause of a fault, the repair can begin. It may involve mechanical or electrical work, repairing a damaged component, or replacing it with a new one.',
		},
		scopeTitle: { ka: 'შეკეთების ძირითადი ეტაპები', en: 'Main repair steps' },
		scope: [
			{ ka: 'ზუსტი კონდიციონერის დიაგნოსტიკა და გაუმართაობის მიზეზის დადასტურება', en: 'Identifying the cause of the fault' },
			{ ka: 'კონდიციონერის შეკეთება დაზიანებული დეტალის აღდგენით ან ახლით ჩანაცვლებით', en: 'Air-conditioner repair by restoring or replacing the damaged component' },
			{ ka: 'შეკეთების დასრულების შემდეგ სისტემის ტესტირება რეალურ დატვირთვაზე', en: 'Testing the system under operating load after the repair' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'სამუშაოს ზუსტი მოცულობა და ფასი განისაზღვრება მხოლოდ მას შემდეგ, რაც კონდიციონერის ხელოსანი შეაფასებს მდგომარეობას.',
			en: 'The exact scope and any required parts are determined after assessing the specific unit and fault.',
		},
	},
	'service-control-board-repair': {
		intro: {
			ka: 'კონდიციონერის მართვის პლატის შეკეთება მოითხოვს მაღალკვალიფიციურ მიდგომას, რადგან ის სისტემის "ტვინს" წარმოადგენს.',
			en: 'Air-conditioner control-board repair requires specialist expertise because the board acts as the system’s “brain.”',
		},
		description: {
			ka: 'მართვის პლატა სისტემის ყველა ელექტრონულ პროცესს აკონტროლებს. როცა კონდიციონერის დიაგნოსტიკა მიუთითებს ელექტრონულ ხარვეზზე, აუცილებელია განისაზღვროს — პრობლემა თავად პლატაშია თუ სხვა კომპონენტში. პლატის დონეზე კონდიციონერის შეკეთება რთული პროცესია, რომელსაც გამოცდილი ელექტრონიკის სპეციალისტი (კონდიციონერის ხელოსანი) შეისწავლის და წყვეტს, ექვემდებარება თუ არა ის აღდგენას.',
			en: 'The control board manages the system’s electronic functions. When diagnostics point to an electrical fault, a qualified electronics specialist checks whether the board or another component is responsible and determines whether the board can be repaired.',
		},
		scopeTitle: { ka: 'სერვისის ძირითადი ეტაპები', en: 'Main service steps' },
		scope: [
			{ ka: 'ელექტრონული სისტემების კონდიციონერის დიაგნოსტიკა', en: 'Diagnosing the air conditioner’s electronic systems' },
			{ ka: 'პლატის მდგომარეობისა და დაზიანებული მიკროელემენტების შეფასება', en: 'Assessing the board and any damaged electronic components' },
			{ ka: 'პლატის აღდგენა (კონდიციონერის შეკეთება) ან ახლით შეცვლა', en: 'Repairing the board or replacing it with a new one, if needed' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'ზოგჯერ სიმპტომები პლატის დაზიანებას ჰგავს, თუმცა რეალური მიზეზი სხვაა. საბოლოო დიაგნოზს კონდიციონერის ხელოსანი დასვამს.',
			en: 'Similar symptoms do not always indicate a faulty board; the decision is made after inspection.',
		},
	},
	'service-refrigerant-check': {
		intro: {
			ka: 'ფრეონის (მაცივარაგენტის) შემოწმება და დამატება აუცილებელია, როცა კონდიციონერი ეფექტურობას კარგავს და ვეღარ აგრილებს.',
			en: 'Checking and recharging refrigerant (Freon) may be necessary when an air conditioner loses performance and no longer cools effectively.',
		},
		description: {
			ka: 'თუ კონდიციონერი სათანადოდ ვერ აგრილებს ან ვერ ათბობს, პირველი ნაბიჯი კონდიციონერის დიაგნოსტიკაა. ფრეონის უკმარისობა ხშირად მიკრო-გაჟონვის ბრალია. პროფესიონალი კონდიციონერის ხელოსანი ჯერ პოულობს და აღმოფხვრის გაჟონვის წყაროს (რომელიც შეიძლება იყოს დამაკავშირებელი მილები, საორთქლებელი (შიდა „რადიატორი“), კონდენსატორი (გარე „რადიატორი“) ან გარე ბლოკში არსებული კომპონენტები, როგორიცაა კომპრესორთან დაერთება, სოლენოიდები, ოთხსვლიანი სარქველი, ფილტრები და ა.შ.), და მხოლოდ ამის შემდეგ ავსებს სისტემას მაცივარაგენტით, რათა პრობლემა განმეორებით არ იჩენდეს თავს.',
			en: 'If an air conditioner is not cooling or heating properly, the first step is to diagnose the system. Low refrigerant is often caused by a small leak. A qualified technician first locates and repairs the leak, which may involve the connecting pipes, the evaporator (indoor coil), the condenser (outdoor coil), or outdoor-unit components such as compressor connections, solenoids, the four-way valve, or filters. Only then is the system recharged with refrigerant to help prevent the problem from recurring.',
		},
		scopeTitle: { ka: 'სერვისის ძირითადი ეტაპები', en: 'Main service steps' },
		scope: [
			{ ka: 'სისტემის მუშაობისა და წნევის დონის შეფასება', en: 'Assessing system operation and refrigerant pressure' },
			{ ka: 'ფრეონის გაჟონვის წყაროს მოძიება და კონდიციონერის შეკეთება', en: 'Locating and repairing the source of a refrigerant leak' },
			{ ka: 'სისტემის ვაკუუმირება და ფრეონით ზუსტი გრამობით შევსება', en: 'Evacuating the system and accurately recharging it by weight' },
		],
		noteTitle: { ka: 'მნიშვნელოვანია', en: 'Important' },
		note: {
			ka: 'ფრეონის უბრალოდ დამატება დიაგნოსტიკის გარეშე არასწორია. გამოცდილი კონდიციონერის ხელოსანი ჯერ გაჟონვის მიზეზს აგვარებს.',
			en: 'A refrigerant recharge does not replace fault diagnosis. If the system has a problem, its cause needs to be identified.',
		},
	},
	'service-refrigerant-leak-repair': {
		intro: {
			ka: 'კონდიციონერის ჟონვის პოვნა და შეკეთება მოიცავს გაჟონვის წყაროს მოძიებას, დაზიანებული მონაკვეთის შეკეთებას და სისტემის მაცივარაგენტით (ფრეონით) ზუსტ შევსებას.',
			en: 'Air-conditioner leak detection and repair includes locating the leak, repairing the affected area, and accurately recharging the system with refrigerant.',
		},
		description: {
			ka: 'კონდიციონერის ჟონვის მიზეზი შეიძლება იყოს დამაკავშირებელი მილები, საორთქლებელი (შიდა „რადიატორი“), კონდენსატორი (გარე „რადიატორი“) ან გარე ბლოკის კომპონენტები, როგორიცაა სოლენოიდები, ოთხსვლიანი სარქველი და ფილტრები. კონდიციონერის ხელოსანი მოძიებული გაჟონვის წყაროს შეაკეთებს, გადაამოწმებს სისტემის ჰერმეტულობას, შემდეგ კი სისტემას ვაკუუმირებას გაუკეთებს და მაცივარაგენტით (ფრეონით) ზუსტად შეავსებს.',
			en: 'An air-conditioner leak may come from the connecting pipes, the evaporator (indoor coil), the condenser (outdoor coil), or outdoor-unit components such as solenoids, the four-way valve, or filters. The technician locates and repairs the leak, checks the system for leaks, evacuates it, and accurately recharges it with refrigerant (Freon).',
		},
		scopeTitle: { ka: 'გაჟონვის მოძიებისა და შეკეთების ეტაპები', en: 'Leak detection and repair steps' },
		scope: [
			{ ka: 'კონდიციონერის მუშაობისა და მაცივარაგენტის წნევის შემოწმება', en: 'Checking system operation and refrigerant pressure' },
			{ ka: 'დამაკავშირებელი მილების, შეერთებებისა და ბლოკების შემოწმება გაჟონვის აღმოსაჩენად', en: 'Inspecting connecting pipes, joints, and units to locate the leak' },
			{ ka: 'გაჟონვის წყაროსა და დაზიანებული მონაკვეთის განსაზღვრა', en: 'Identifying the leak source and affected area' },
			{ ka: 'გაჟონვის გამომწვევი დაზიანების შეკეთება და ჰერმეტულობის ხელახალი შემოწმება', en: 'Repairing the fault that caused the leak and checking the system again for leaks' },
			{ ka: 'შეკეთების შემდეგ საჭიროების შემთხვევაში სისტემის ვაკუუმირება და მაცივარაგენტით შევსება', en: 'Evacuating the system and recharging it with refrigerant after repair when needed' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'მაცივარაგენტის დამატება გაჟონვის მიზეზს ვერ აღმოფხვრის. ჯერ საჭიროა გაჟონვის წყაროს მოძიება და შეკეთება.',
			en: 'Adding refrigerant does not fix the source of a leak. The leak must be located and repaired first.',
		},
	},
	'service-deep-cleaning': {
		intro: {
			ka: 'კონდიციონერის სიღრმისეული წმენდა უზრუნველყოფს სუფთა ჰაერს, ბაქტერიების განადგურებას და მოწყობილობის ენერგოეფექტურობას.',
			en: 'Deep cleaning of an air conditioner helps remove bacteria, provide cleaner air, and maintain the unit’s energy efficiency.',
		},
		description: {
			ka: 'დროთა განმავლობაში კონდიციონერში გროვდება მტვერი და სოკო, რაც იწვევს უსიამოვნო სუნს და ამცირებს გაგრილების ძალას. სიღრმისეული წმენდისას კონდიციონერის ხელოსანი სპეციალური ანტიბაქტერიული ხსნარებითა და წნევით წმენდს შიდა და გარე ბლოკებს. სუფთა ტექნიკა ნიშნავს ჯანსაღ გარემოს და ნაკლებ ელექტროენერგიის ხარჯს. გასაწმენდი კონდიციონერის სიმპტომებია მუშაობისას გადახურება და გათიშვა, წყლის წვეთა (ხშირ შემთხვევაში), ჰაერის ნაკადის შემცირება და სიცივის წარმოების შემცირება. საბოლოო ჯამში, გაუმართაობის ძირითადი პრობლემები წმენდასთან არის დაკავშირებული.',
			en: 'Dust and mold can build up in an air conditioner over time, causing unpleasant odors and reducing cooling performance. During a deep clean, the technician cleans the indoor and outdoor units using specialized antibacterial solutions and pressure. A clean unit supports a healthier environment and lower electricity use. Signs that an air conditioner may need cleaning include overheating or shutting down during operation, water dripping, reduced airflow, and reduced cooling output. Many common air-conditioner faults are related to a lack of cleaning.',
		},
		scopeTitle: { ka: 'წმენდის ძირითადი ეტაპები', en: 'Main cleaning steps' },
		scope: [
			{ ka: 'შიდა ბლოკის, ფილტრებისა და რადიატორის ანტიბაქტერიული წმენდა', en: 'Cleaning the indoor unit, filters, and coil with an antibacterial solution' },
			{ ka: 'გარე ბლოკის წნევით წმენდა და მტვრისგან გასუფთავება', en: 'Pressure-cleaning the outdoor unit and removing dust' },
			{ ka: 'სისტემის საერთო შემოწმება (მინი კონდიციონერის დიაგნოსტიკა)', en: 'Checking the system overall as part of a basic air-conditioner diagnostic' },
		],
		noteTitle: { ka: 'გასათვალისწინებელია', en: 'Please note' },
		note: {
			ka: 'თუ ტექნიკას გაგრილების პრობლემა აქვს, წმენდის გარდა შეიძლება საჭირო გახდეს დამატებითი კონდიციონერის შეკეთება.',
			en: 'If the unit has an issue beyond cleaning, additional diagnostics or repair may be needed.',
		},
	},
};
