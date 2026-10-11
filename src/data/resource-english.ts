import type { PageId } from './site';

interface ResourceSection {
	title: string;
	description: string;
	items?: string[];
	links?: { pageId: PageId; label: string }[];
}

interface ResourceEnglishPage {
	intro: string;
	sections: ResourceSection[];
	note?: string;
	georgianLink?: boolean;
}

export const resourceEnglishPages: Partial<Record<PageId, ResourceEnglishPage>> = {
	learning: {
		intro: 'An overview of common air-conditioning system types used in residential, commercial, and industrial settings.',
		sections: [
			{ title: 'Residential systems', description: 'Systems used in apartments and houses.', items: ['Split systems: one indoor unit connected to one outdoor unit', 'Multi-split systems: several indoor units connected to one outdoor unit', 'Mini VRF systems'] },
			{ title: 'Commercial systems', description: 'Solutions used in offices, shops, hotels, and other commercial buildings.', items: ['VRF / VRV systems', 'Rooftop and packaged units', 'Chiller with fan coil units', 'Air handling units with fan coil units', 'Dedicated outdoor air systems (DOAS)'] },
			{ title: 'Industrial and specialist systems', description: 'Systems used in industrial sites and facilities with specific cooling or ventilation needs.', items: ['Air- or water-cooled chillers', 'High-airflow and hygienic air handling units', 'Industrial ventilation', 'Precision cooling (CRAC / CRAH)', 'Refrigeration systems'] },
			{ title: 'Building management', description: 'Building Management Systems (BMS) bring building services under coordinated monitoring and control.' },
		],
	},
	'air-conditioner-components': {
		intro: 'Learn about the main components of indoor and outdoor air-conditioner units and the role they play in system operation.',
		sections: [
			{ title: 'Outdoor unit', description: 'Common outdoor-unit components include:', items: ['Compressor', 'Condenser coil and fan motor', 'Four-way valve on heat-pump models', 'Expansion device, such as a capillary tube or electronic expansion valve', 'Electrical components and temperature or pressure sensors'] },
			{ title: 'Additional components in larger systems', description: 'Depending on system design, larger and VRF systems may also include:', items: ['Suction accumulator and oil separator', 'Liquid receiver and filter drier', 'Additional VRF system components'] },
			{ title: 'Indoor unit', description: 'Indoor-unit components and configurations include:', items: ['Filters and evaporator coil', 'Cross-flow fan and drain pan', 'Control board and sensors', 'Cassette, ducted, floor-ceiling, and floor-standing unit types'] },
		],
	},
	'air-conditioner-service': {
		intro: 'A structured overview of air-conditioner diagnostics, from initial checks to identifying the next service step.',
		sections: [
			{ title: 'Diagnostic topics', description: 'The guide covers the following areas:', items: ['Initial checks before disassembly', 'Safety and system-component inspection', 'Temperature sensor checks', 'Compressor and motor diagnostics', 'Inverter system operation and component compatibility', 'Control-board checks, drainage-pump checks, and error codes'] },
		],
		note: 'Electrical and refrigerant-system work can be hazardous. Use qualified technicians and follow the equipment manufacturer’s safety instructions.',
	},
	'air-conditioner-electrical': {
		intro: 'An introduction to the electrical and electronic components that control and protect HVAC/R systems.',
		sections: [
			{ title: 'Safety first', description: 'The guide covers electrical components and basic diagnostic concepts.', items: ['Disconnect power before working on components', 'Capacitors may retain a charge after power is removed; discharge them safely'] },
			{ title: 'Components covered', description: 'The material introduces common components and their roles:', items: ['Contactors, capacitors, transformers, and relays', 'Diode bridge rectifiers, IPM / IGBT modules, and reactors', 'Sensors, protection devices, and control-board components', 'Main control, inverter, fan, communication, and input/output boards'] },
		],
		note: 'The material is educational and does not replace qualified electrical work or manufacturer documentation.',
	},
	refrigerants: {
		intro: 'An introduction to refrigerant safety classes, mixture behavior, technical terms, and environmental regulations.',
		sections: [
			{ title: 'Safety classification', description: 'The guide explains how refrigerants are grouped by toxicity and flammability under ASHRAE Standard 34.' },
			{ title: 'Mixtures and technical terms', description: 'Topics include zeotropic and azeotropic mixtures, temperature glide, and critical temperature.' },
			{ title: 'Reference topics', description: 'Additional sections cover chemical groups, environmental regulations, technical tables, seasonal operating pressures, retrofit options, and lubricant types.' },
		],
	},
	licensing: {
		intro: 'Study resources for the licensing exam covering systems that operate with refrigerants.',
		sections: [
			{ title: 'Choose a study section', description: 'Open a section to continue preparing for the refrigerant licensing exam.', links: [
				{ pageId: 'licensing-learning', label: 'Exam questions and answers' },
				{ pageId: 'licensing-info', label: 'Main exam topics' },
				{ pageId: 'licensing-testing', label: 'Simulation testing' },
			] },
		],
		note: 'The exam question bank and practice tests are available in Georgian only. English information about the main exam topics is available on this site.',
	},
	'licensing-info': {
		intro: 'An overview of the main subjects and rules presented in the refrigerant licensing study materials.',
		sections: [
			{ title: 'Topics in this section', description: 'The material introduces general licensing information, refrigerant safety groups, and related exam topics.' },
		],
	},
	'licensing-learning': {
		intro: 'This section contains the refrigerant licensing exam questions and answers.',
		sections: [
			{ title: 'Available in Georgian only', description: 'The exam questions and answers are currently available only in Georgian. Switch the site language to Georgian to read the question bank.' },
		],
		georgianLink: true,
	},
	'licensing-testing': {
		intro: 'A practice simulation for the refrigerant licensing exam.',
		sections: [
			{ title: 'Available in Georgian only', description: 'The exam questions and practice test are currently available only in Georgian. Switch the site language to Georgian to take the simulation.' },
		],
		georgianLink: true,
	},
};
