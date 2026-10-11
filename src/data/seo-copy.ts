import type { Locale, PageId } from './site';

interface LocalizedSeoCopy {
	title: Record<Locale, string>;
	description: Record<Locale, string>;
}

/** Search metadata is kept separate from the page copy used in visible UI. */
export const seoCopy: Record<PageId, LocalizedSeoCopy> = {
	home: {
		title: {
			ka: 'კონდიციონერის ხელოსანი - KlimatMasteri. | კლიმატ მასტერი',
			en: 'Air-Conditioner Repair and Installation | KlimatMasteri',
		},
		description: {
			ka: 'კონდიციონერის ხელოსანი | KlimatMasteri. კონდიციონერის მონტაჟი, კონდიციონერის შეკეთება, მოგემსახურებიან პროფესიონალი კონდიციონერის ხელოსნები',
			en: 'Air-conditioner technician in Tbilisi for installation, diagnostics and repair. KlimatMasteri serves Tbilisi and the surrounding areas.',
		},
	},
	services: {
		title: { ka: 'კონდიციონერის სერვისები და მონტაჟი | KlimatMasteri', en: 'Air Conditioner Services in Tbilisi | KlimatMasteri' },
		description: {
			ka: 'კონდიციონერის მონტაჟი, დემონტაჟი, დიაგნოსტიკა, შეკეთება, გაწმენდა და სერვისები თბილისში. ნახეთ მომსახურების დეტალები და შეარჩიეთ საჭირო სერვისი.',
			en: 'Air-conditioner installation, removal, diagnostics, repair and cleaning services in Tbilisi. Review details and choose a service for your needs.',
		},
	},
	about: {
		title: { ka: 'ჩვენ შესახებ: კონდიციონერის ხელოსნები | KlimatMasteri', en: 'KlimatMasteri: Air-Conditioning Technicians in Tbilisi' },
		description: {
			ka: 'გაიცანით KlimatMasteri: კონდიციონერის ხელოსნები თბილისში. ვმუშაობთ მონტაჟის, დიაგნოსტიკის, შეკეთებისა და ტექნიკური მომსახურების მიმართულებით.',
			en: "Meet KlimatMasteri's certified air-conditioning team in Tbilisi. We provide installation, diagnostics, repair and maintenance services.",
		},
	},
	contact: {
		title: { ka: 'კონდიციონერის ხელოსნის კონტაქტი თბილისში | KlimatMasteri', en: 'Contact KlimatMasteri | Air-Conditioning Service in Tbilisi' },
		description: {
			ka: 'დაგვიკავშირდით კონდიციონერის მომსახურებისთვის თბილისში და მის შემოგარენში. დარეკეთ ან მოგვწერეთ WhatsApp-ზე; იხილეთ საკონტაქტო ინფორმაცია.',
			en: 'Contact KlimatMasteri for air-conditioning services in Tbilisi and the surrounding area. Call or message us on WhatsApp using the details below.',
		},
	},
	faq: {
		title: { ka: 'კონდიციონერი: კითხვები და პასუხები | KlimatMasteri', en: 'Air-Conditioner Service FAQs: Installation & Repair' },
		description: {
			ka: 'პასუხები კონდიციონერის მონტაჟის, მოვლის, ენერგოეფექტურობისა და გაუმართაობების შესახებ გავრცელებულ კითხვებზე. გაეცანით ხშირად დასმულ კითხვებს.',
			en: 'Learn about air-conditioner installation, maintenance, energy efficiency and common faults. Get clear answers to common service questions.',
		},
	},
	refrigerants: {
		title: { ka: 'მაცივარაგენტები: უსაფრთხოება და ტერმინები | KlimatMasteri', en: 'Refrigerant Safety, Types and Terms | KlimatMasteri' },
		description: {
			ka: 'გაეცანით მაცივარაგენტების უსაფრთხოების კლასიფიკაციას, ნარევებს, ტექნიკურ ტერმინებსა და გარემოსდაცვით საკითხებს ერთ საინფორმაციო გვერდზე.',
			en: 'Learn about refrigerant safety classifications, blends, technical terms and environmental topics in this overview of refrigerant information.',
		},
	},
	licensing: {
		title: { ka: 'მაცივარაგენტის გამოცდის გზამკვლევი | KlimatMasteri', en: 'Refrigerant Licensing Exam Preparation Guide | KlimatMasteri' },
		description: {
			ka: 'მაცივარაგენტზე მომუშავე სისტემების სალიცენზიო გამოცდისთვის მოემზადეთ: შეისწავლეთ თემები, ივარჯიშეთ ტესტებით და გაეცანით კითხვა-პასუხებს.',
			en: 'Prepare for the refrigerant licensing exam with topic reviews, practice tests and Q&A. Explore exam resources and review the subject areas.',
		},
	},
	'licensing-learning': {
		title: { ka: 'მაცივარაგენტის გამოცდის კითხვები და პასუხები | KlimatMasteri', en: 'Refrigerant Licensing Exam Questions and Answers Guide' },
		description: {
			ka: 'მოემზადეთ მაცივარაგენტის სალიცენზიო გამოცდისთვის თემატური კითხვებითა და პასუხებით. მასალა აერთიანებს ძირითად საკითხებს და პრაქტიკულ გამეორებას.',
			en: 'Review questions and answers for the refrigerant licensing exam. Use topic-based material to study subjects and reinforce your preparation.',
		},
	},
	'licensing-testing': {
		title: { ka: 'მაცივარაგენტის გამოცდის სიმულაციური ტესტი | KlimatMasteri', en: 'Refrigerant Licensing Exam: Practice Test and Simulation' },
		description: {
			ka: 'ივარჯიშეთ მაცივარაგენტის სალიცენზიო გამოცდის სიმულაციურ ონლაინ ტესტირებაში. გაეცანით კითხვების ფორმატს და შეამოწმეთ ცოდნა გამოცდის თემებზე.',
			en: 'Practice with the refrigerant licensing exam simulation. Review the test format and check your knowledge of the main exam topics before the exam.',
		},
	},
	'licensing-info': {
		title: { ka: 'მაცივარაგენტის სალიცენზიო გამოცდის საკითხები | KlimatMasteri', en: 'Refrigerant Licensing Exam Topics and Test Rules Guide' },
		description: {
			ka: 'ნახეთ მაცივარაგენტის სალიცენზიო ტესტების ძირითადი საკითხები და წესები. მოემზადეთ გამოცდისთვის და გადაამოწმეთ საგამოცდო თემატური მასალა.',
			en: 'Review the main topics and rules covered by refrigerant licensing tests. Use this guide to organize your study and revisit key exam material.',
		},
	},
	learning: {
		title: { ka: 'კონდიცირების სისტემები: ტიპები და მიმოხილვა | KlimatMasteri', en: 'Residential, Commercial and Industrial AC Systems Guide' },
		description: {
			ka: 'გაეცანით საცხოვრებელი, კომერციული და ინდუსტრიული კონდიცირების სისტემების ტიპებს, გამოყენების სფეროებსა და მათ ძირითად განსხვავებებს შორის.',
			en: 'Explore residential, commercial and industrial air-conditioning system types, their common applications and the main differences between them.',
		},
	},
	'air-conditioner-components': {
		title: { ka: 'კონდიციონერის კომპონენტები: ფუნქციები | KlimatMasteri', en: 'Air-Conditioner Components: Parts and Functions Guide' },
		description: {
			ka: 'შეისწავლეთ კონდიციონერის შიდა და გარე ბლოკების ძირითადი კომპონენტები და მათი დანიშნულება. მასალა განმარტავს სისტემის ნაწილების ფუნქციებს.',
			en: 'Learn about key indoor and outdoor air-conditioner components and their functions. This guide explains the parts that make up the system.',
		},
	},
	'air-conditioner-service': {
		title: { ka: 'კონდიციონერის დიაგნოსტიკა: ეტაპები | KlimatMasteri', en: 'Air-Conditioner Diagnostics: Checks and Troubleshooting' },
		description: {
			ka: 'კონდიციონერის დიაგნოსტიკის ძირითადი ეტაპები, კომპონენტების შემოწმება და გაუმართაობის მიზეზის ძიება. გაეცანით შემოწმების პროცესის მიმოხილვას.',
			en: 'Review the main steps in air-conditioner diagnostics, including component checks and identifying possible causes of a fault on this page.',
		},
	},
	'air-conditioner-electrical': {
		title: { ka: 'კონდიციონერის ელექტროობა და უსაფრთხოება | KlimatMasteri', en: 'Air-Conditioner Electrical Systems and Safety Guide' },
		description: {
			ka: 'გაეცანით HVAC/R სისტემების ელექტრულ კომპონენტებს, მართვის ელემენტებსა და უსაფრთხოების საკითხებს. გვერდი მიმოიხილავს კონდიციონერის ელექტროობას.',
			en: 'An introduction to HVAC/R electrical components, controls and safety, with an overview of air-conditioner electrical systems for technicians.',
		},
	},
	calculators: {
		title: { ka: 'კონდიცირების სისტემის კალკულატორები | KlimatMasteri', en: 'HVAC/R Air-Conditioning Design Calculators and Tools' },
		description: {
			ka: 'გამოიყენეთ კონდიცირების სისტემებისთვის ოთახის დატვირთვისა და ტექნიკური პარამეტრების გამოსათვლელი ხელსაწყოები. აირჩიეთ შესაბამისი კალკულატორი.',
			en: 'Use HVAC/R tools to estimate room load and work with technical parameters for air-conditioning systems. Choose the calculator for your needs.',
		},
	},
	privacy: {
		title: { ka: 'კონფიდენციალურობის პოლიტიკა: მონაცემები | KlimatMasteri', en: 'KlimatMasteri Privacy Policy and Personal Data Protection' },
		description: {
			ka: 'გაეცანით, რა პერსონალური მონაცემები მუშავდება ვებსაიტზე, რისთვის გამოიყენება და როგორ არის დაცული. გვერდი ხსნის მონაცემთა დაცვის წესებს.',
			en: 'Learn what information the website may collect, how it is used and protected, and how to contact KlimatMasteri with questions about your data.',
		},
	},
	terms: {
		title: { ka: 'KlimatMasteri-ის მომსახურების პირობები და გამოყენება', en: 'KlimatMasteri Terms of Service and Website Use Policy' },
		description: {
			ka: 'წაიკითხეთ KlimatMasteri.ge-ის გამოყენების, მომსახურების, ფასების, ინტელექტუალური საკუთრებისა და საკონტაქტო ინფორმაციის პირობები სრულად.',
			en: "Read KlimatMasteri.ge's website and service terms, covering service scope, pricing, intellectual property and contact information in one place.",
		},
	},
	'service-consultation': {
		title: { ka: 'კონდიციონერის ხელოსნის კონსულტაცია თბილისში | KlimatMasteri', en: 'Air-Conditioner Technician Consultation in Tbilisi' },
		description: {
			ka: 'კონსულტაცია კონდიციონერის ხელოსანთან დაგეხმარებათ სისტემის მონტაჟის დაგეგმვასა და არსებული მოწყობილობის საჭიროებების განხილვაში. იხილეთ გვერდზე.',
			en: 'Discuss installation plans, an existing system and possible repair needs with an air-conditioning technician. Review consultation details.',
		},
	},
	'service-installation': {
			title: { ka: 'კონდიციონერის მონტაჟის სერვისი თბილისში | KlimatMasteri', en: 'Air-Conditioner Installation in Tbilisi | KlimatMasteri' },
		description: {
			ka: 'კონდიციონერის მონტაჟი მოიცავს ადგილის შერჩევას, ბლოკების დაყენებასა და საჭირო კომუნიკაციების მიერთებას. სამუშაოს მოცულობა ობიექტზეა დამოკიდებული.',
			en: 'Air-conditioner installation includes site selection, fitting both units and connecting required services. Scope varies by system and site.',
		},
	},
	'service-pipe-preinstallation': {
		title: { ka: 'კონდიციონერის მილების წინასწარი მონტაჟი | KlimatMasteri', en: 'Air-Conditioner Pipe Pre-Installation Service in Tbilisi' },
		description: {
			ka: 'კონდიციონერის მილებისა და კონდენსატის გადინების მარშრუტის წინასწარი დაგეგმვა სისტემის დაყენებამდე. გაიგეთ, რა კომუნიკაციები ეწყობა რემონტისას.',
			en: 'Plan air-conditioner pipe routes and condensate drainage before installation. See which connections can be prepared during home renovation.',
		},
	},
	'service-drainage-system': {
		title: { ka: 'კონდიციონერის სადრენაჟე სისტემა და პომპა | KlimatMasteri', en: 'Air-Conditioner Drainage and Pump Installation in Tbilisi' },
		description: {
			ka: 'კონდიციონერის კონდენსატის სადრენაჟე მარშრუტის მოწყობა და საჭიროებისას პომპის დაყენება. გაეცანით სამუშაოს დანიშნულებასა და შესაძლო ეტაპებს.',
			en: 'Set up an air-conditioner condensate drainage route and add a pump when needed. Review the purpose of the work and the steps it may include.',
		},
	},
	'service-water-leak': {
		title: { ka: 'კონდიციონერიდან წყლის გაჟონვის დიაგნოსტიკა | KlimatMasteri', en: 'Air-Conditioner Water Leak Diagnosis and Repair in Tbilisi' },
		description: {
			ka: 'კონდიციონერიდან წყლის წვეთის მიზეზებია დაბინძურება, მილების იზოლაცია ან სადრენაჟე სისტემის პრობლემა. გვერდი აღწერს შემოწმების მიმართულებებს.',
			en: 'Water dripping may relate to dirt, pipe insulation, drainage or casing issues. This page outlines causes to check during air-conditioner service.',
		},
	},
	'service-dismantling': {
		title: { ka: 'კონდიციონერის დემონტაჟი და ბლოკების მოხსნა | KlimatMasteri', en: 'Air-Conditioner Removal and Dismantling in Tbilisi' },
		description: {
			ka: 'კონდიციონერის შიდა და გარე ბლოკების მოხსნა და შესაბამისი კომუნიკაციების გათიშვა. გაეცანით დემონტაჟის სერვისის მოცულობას და სამუშაოს პირობებს.',
			en: 'Remove indoor and outdoor air-conditioner units and disconnect unit lines. Review what the dismantling service includes before work begins.',
		},
	},
	'service-diagnostics': {
		title: { ka: 'კონდიციონერის დიაგნოსტიკა თბილისში | KlimatMasteri', en: 'Air-Conditioner Diagnostics and Fault Checks in Tbilisi' },
		description: {
			ka: 'კონდიციონერის გაუმართაობის მიზეზის შემოწმება თბილისში და შემდგომი მომსახურების საჭიროების განსაზღვრა. აღწერილია დიაგნოსტიკის ძირითადი მიზანი.',
			en: 'Inspect an air conditioner in Tbilisi to identify a fault and determine the next service step. Learn what diagnostics are intended to establish.',
		},
	},
	'service-repair': {
		title: { ka: 'კონდიციონერის შეკეთება და დეტალის შეცვლა | KlimatMasteri', en: 'Air-Conditioner Repair and Damaged Part Replacement' },
		description: {
			ka: 'კონდიციონერის შეკეთება და შემოწმებით გამოვლენილი დაზიანებული ნაწილის საჭიროების შემთხვევაში შეცვლა. გაიგეთ სერვისის მოცულობა და პროცესი.',
			en: 'Repair an air conditioner and replace a damaged part when inspection shows it is needed. Review the service scope and how repairs are assessed.',
		},
	},
	'service-control-board-repair': {
		title: { ka: 'კონდიციონერის მართვის პლატის შეკეთება | KlimatMasteri', en: 'Air-Conditioner Control Board Repair and Replacement' },
		description: {
			ka: 'კონდიციონერის მართვის პლატის შემოწმება და საჭიროების შემთხვევაში შეკეთება ან შეცვლა. გვერდზე გაეცანით სერვისის დანიშნულებასა და ძირითად ეტაპებს.',
			en: 'Inspect an air-conditioner control board and repair or replace it when needed. Learn what the service covers and why diagnosis comes first.',
		},
	},
	'service-refrigerant-check': {
		title: { ka: 'კონდიციონერის ფრეონის შემოწმება და შევსება | KlimatMasteri', en: 'Air-Conditioner Refrigerant Check and Refill | KlimatMasteri' },
		description: {
			ka: 'შეამოწმეთ კონდიციონერის მაცივარაგენტის მუხტი და შეავსეთ მხოლოდ საჭიროებისას. დაბალი დონე შესაძლოა გაჟონვაზე მიუთითებდეს; ჯერ მიზეზი მოწმდება.',
			en: 'Check the air-conditioner refrigerant charge and recharge only when needed. Low refrigerant may indicate a leak, so check its cause first.',
		},
	},
	'service-refrigerant-leak-repair': {
		title: { ka: 'კონდიციონერის ფრეონის გაჟონვის შეკეთება | KlimatMasteri', en: 'Air-Conditioner Refrigerant Leak Detection and Repair' },
		description: {
			ka: 'კონდიციონერის მაცივარაგენტის გაჟონვის ადგილის პოვნა და დაზიანებული მონაკვეთის შეკეთება. მოწმდება ჰერმეტულობა და საჭიროებისას ივსება სისტემა.',
			en: 'Locate an air-conditioner refrigerant leak, repair the area, check for leaks and recharge the system when needed. Review these service steps.',
		},
	},
	'service-deep-cleaning': {
		title: { ka: 'კონდიციონერის შიდა და გარე ბლოკების სიღრმისეული წმენდა', en: 'Air-Conditioner Indoor and Outdoor Unit Deep Cleaning' },
		description: {
			ka: 'კონდიციონერის შიდა და გარე ბლოკების სიღრმისეული წმენდა მოწყობილობის მდგომარეობის გათვალისწინებით. გაეცანით წმენდის სერვისის აღწერასა და ეტაპებს.',
			en: 'Deep cleaning of indoor and outdoor air-conditioner units based on their condition. Learn what the service includes and steps that may be needed.',
		},
	},
};
