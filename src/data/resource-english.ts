import type { PageId } from './site';

interface ResourceSection {
	title: string;
	description: string;
	items?: string[];
	links?: { pageId: PageId; label: string }[];
	externalLinks?: { href: string; label: string }[];
}

interface ResourceEnglishPage {
	intro: string;
	sections: ResourceSection[];
	note?: string;
	georgianLink?: boolean;
	externalLink?: { href: string; label: string; description: string };
}

export const resourceEnglishPages: Partial<Record<PageId, ResourceEnglishPage>> = {
	learning: {
		intro: 'Air-conditioning systems are selected according to a building’s size and purpose, the number of rooms, the level of control required, and the way heat is transferred. This overview covers residential, commercial, industrial, and building-management systems.',
		sections: [
			{ title: 'Residential systems', description: 'Common air-conditioning systems for apartments and houses.', items: [
				'Split system (On/Off or inverter): one indoor unit and one outdoor unit circulate refrigerant to cool or heat the air. The system includes the indoor and outdoor units, connecting cable and power supply, and copper pipes.',
				'Multi-split system: one outdoor unit serves several indoor units, usually two to five. Each indoor unit has its own pair of copper pipes connected to the outdoor unit, along with the required power, control, and communication connections.',
				'Mini VRF: a smaller VRF / VRV arrangement with four to eight indoor units connected to one smart outdoor unit. It has a smart control system and a central main line with branches, such as Refnet or Y-joints, which reduce the number of long pipe runs.'
			] },
			{ title: 'Commercial systems', description: 'Systems for offices, shops, hotels, malls, and other commercial buildings.', items: [
				'VRF (Variable Refrigerant Flow) is the general technology name. VRV (Variable Refrigerant Volume) refers to the same technology and is Daikin’s registered trade term. One inverter outdoor unit can serve many indoor units, with individual control and energy-efficient operation. Three-pipe heat-recovery systems can cool one room while heating another at the same time. Typical components include wall-mounted, cassette, or ducted indoor units; copper pipes with Refnet / Y-joints; communication cables; and a central controller.',
				'Rooftop units (RTUs) are packaged units installed on a roof. They condition air and distribute it to large spaces through ducts. The package can include the casing, compressor and heat exchangers, supply and return fans, and an economizer.',
				'Packaged units place the system components in one self-contained cabinet. Like an RTU, a packaged unit may be installed at ground level and is used in smaller commercial spaces. The arrangement includes the unit, a room thermostat, and ductwork.',
				'Chiller and fan-coil systems circulate chilled or heated water: the chiller conditions the water and pipes carry it to fan-coil units (FCUs) in rooms. Most modern chillers are reversible heat pumps; a four-pipe system can provide heating and cooling. The arrangement includes a chiller, a hydraulic module with pumps and tanks, FCUs, and insulated water piping.',
				'An air-handling unit (AHU) can supply fresh air centrally while FCUs regulate room temperature. Variable Air Volume (VAV) equipment can provide zone-level control. The system may include ducts and diffusers, FCUs, VAV boxes, and a chiller or boiler.',
				'A Dedicated Outdoor Air System (DOAS) takes in 100% outdoor air, removes moisture, cools the air, and supplies it to the building. Its components include a DOAS unit, an energy-recovery wheel, and ventilation ducts.'
			] },
			{ title: 'Industrial and specialist systems', description: 'Systems for process cooling, high-capacity air handling, industrial ventilation, precision cooling, and cold storage.', items: [
				'Air-cooled chillers reject heat to outdoor air. Water-cooled chillers reject heat through water and a cooling tower. Free cooling can reduce compressor operation at low outdoor temperatures. A typical arrangement can include an industrial chiller, cooling tower where applicable, process pumps, and a buffer tank.',
				'High-airflow or hygienic AHUs are high-capacity units. Hygienic units may use HEPA filters to support sterile environments. Components can include stainless-steel casings, high-pressure fans, HEPA / ULPA filters, EC fans, heat-recovery sections, and humidity-control equipment.',
				'Industrial ventilation includes extraction and exhaust systems that remove harmful substances, dust, or smoke. Components can include centrifugal fans, cyclones or scrubbers for air cleaning, make-up air units (MAUs), and industrial ducts.',
				'Precision cooling is used in data centres to control temperature and humidity closely. CRAC units operate with refrigerant; CRAH units use chilled water from a chiller. Systems can also include hot-aisle / cold-aisle containment, N+1 or 2N redundancy, raised floors, humidifiers, and reheaters.',
				'Refrigeration systems provide low-temperature storage, including cold rooms operating at -18°C or -25°C. Common components include NH3 or CO2 systems, compressor racks, evaporators or unit coolers, and insulated panels.'
			] },
			{ title: 'Building Management System (BMS)', description: 'A central system for monitoring and controlling building services such as HVAC and lighting.', items: [
				'It is used in commercial buildings, including offices and hotels, to manage comfort and energy, and in industrial facilities such as pharmaceutical sites and data centres.',
				'A BMS arrangement can include a management server and software, Direct Digital Control (DDC) controllers, temperature, humidity, CO2 and pressure sensors, actuators and valves, and an operator interface (HMI).'
			] },
		],
	},
	'air-conditioner-components': {
		intro: 'An air conditioner contains refrigeration, airflow, electrical, and control components. The sections below describe the main parts of indoor and outdoor units, additional components in larger systems, and common indoor-unit formats.',
		sections: [
			{ title: 'Outdoor unit components', description: 'The outdoor unit contains the compressor and the components that reject heat, direct refrigerant flow, and control system operation.', items: [
				'The compressor circulates refrigerant through the system and creates the pressure difference required for operation.',
				'The condenser coil (radiator) is a network of aluminium fins and copper tubes. Hot refrigerant releases heat there and condenses into liquid.',
				'The fan and motor move outdoor air across the condenser coil to cool it.',
				'Heat-pump models use a four-way valve. Its solenoid coil changes the direction of refrigerant flow between heating and cooling.',
				'A capillary tube or expansion valve (TPV / EEV) reduces refrigerant pressure; cooling begins as the refrigerant expands.',
				'On/Off models may use a large compressor capacitor, a smaller fan-motor capacitor, and a contactor. Inverter models use an electronic control board with heat sinks and an IPM module.',
				'NTC temperature sensors may measure outdoor air, monitor the coil and defrost cycle, protect the compressor from overheating, help control an EEV, or protect the IPM heat sink.',
				'Pressure sensors and switches monitor pressure. A high-pressure switch can shut the system down at excessive pressure; a low-pressure sensor can trigger shutdown when refrigerant is lost.'
			] },
			{ title: 'Additional components in larger systems', description: 'Larger and VRF systems may contain components that are not present in a basic split system.', items: [
				'The suction accumulator is installed before the compressor on the low-pressure side and helps keep liquid refrigerant from entering the compressor.',
				'The oil separator, installed after the compressor on the high-pressure side, separates oil from refrigerant and returns it to the compressor crankcase.',
				'The liquid receiver is installed after the condenser and stores liquid refrigerant as system load changes.',
				'The filter drier captures moisture and solid particles in the refrigerant circuit and helps protect the compressor winding from acid formation.',
				'VRF systems can include inverter control boards and multiple electronic expansion valves (EEVs).'
			] },
			{ title: 'Indoor unit components', description: 'The indoor unit filters and moves room air across the indoor coil and collects condensate.', items: [
				'Air filters are mesh screens that catch dust, protect the coil, and need regular cleaning.',
				'The evaporator coil (radiator) cools or heats the air passing through the unit.',
				'A cross-flow fan moves air through the coil and into the room.',
				'The drain pan collects condensate and directs it outside through the drain line.',
				'The control board connects to the indoor unit’s wiring and sensors.',
				'Sensors measure room-air and coil-pipe temperatures.'
			] },
			{ title: 'Indoor-unit formats', description: 'Indoor units are available in several formats for different installation locations and airflow needs.', items: [
				'Cassette units are installed in the ceiling. They can use a drain pump and float switch for condensate removal and overflow protection, with a centrifugal fan.',
				'Ducted units are concealed above the ceiling and distribute air through ducts. They use high-pressure blower fans.',
				'Floor-ceiling units can be installed horizontally at the ceiling or vertically on a wall; a double drain pan supports both orientations.',
				'Floor-standing units are used in larger halls and may include an additional electric heater for winter operation.'
			] },
		],
	},
	'air-conditioner-service': {
		intro: 'Use a step-by-step approach to air-conditioner diagnostics: begin with basic checks, follow electrical safety precautions, then assess sensors, motors, inverter operation, control boards, drainage, and model-specific error codes.',
		sections: [
			{ title: 'Five checks before disassembly', description: 'Start with basic checks before taking the system apart.', items: [
				'Power supply: check for a stable voltage of 210–230 V and balanced phases on three-phase equipment. Voltage instability is a common inverter-system fault. Check for phase loss, neutral faults, and missing earthing; phase symmetry matters as well as the voltage reading.',
				'Filters and indoor coil: check whether the filters and coil are clean. Dirty filters can be associated with high pressure, icing, and weak airflow.',
				'Operating mode: verify the remote-control setting. Check that the unit is not set to Heat in summer or Cool in winter. Available modes include Auto, Cool, Heat, and Fan; some units also have Dry. In Auto mode, the system selects heating or cooling itself, which can reduce efficiency and may make users think the system is faulty.',
				'Communication: check whether the indoor and outdoor units exchange signals, whether the outdoor unit receives the required signal, and whether wiring or contacts are damaged.',
				'Outdoor unit: inspect the condenser coil for dirt and check that the fan is not blocked. A dirty condenser can cause high pressure, overheating, and protective shutdown.'
			] },
			{ title: 'Safety before inspection', description: 'Follow these precautions before opening the system or inspecting hardware and electronics.', items: ['Disconnect electrical power before beginning work.', 'Discharge capacitors safely.', 'Follow the applicable safety procedures.', 'Use a multimeter only if you have basic electronics knowledge.'] },
			{ title: 'Temperature and pressure sensors', description: 'Sensor faults or inaccurate readings can interrupt operation, cause incorrect control decisions, or stop the system.', items: [
				'NTC thermistors are common temperature sensors: resistance decreases as temperature rises and increases as temperature falls. Disconnect the sensor from the board, measure resistance in ohms, and compare the result with the manufacturer’s table. Typical examples are 5, 10, 15, or 50 kΩ at 25°C.',
				'An NTC sensor that reads open circuit (∞), short circuit (0 Ω), or does not change as the temperature changes is faulty.',
				'PTC thermistors are used mainly for protection. Their resistance rises as temperature increases, often sharply. They are commonly used in compressor, motor, or inverter overheating-protection circuits rather than for precise temperature measurement. A PTC that remains open or does not change resistance when warmed is faulty.',
				'Pressure transducers, common in inverter systems, are checked on an energized system by measuring the supply (typically 5 V DC) and output signal (approximately 0.5–4.5 V depending on pressure).',
				'Check high- and low-pressure switches for continuity. The circuit should be closed under normal conditions; an open circuit can mean the protection has activated or the component has failed.'
			] },
			{ title: 'Compressors, fan motors, and Hall sensors', description: 'The diagnostic method depends on whether the equipment uses an On/Off or inverter drive.', items: [
				'An On/Off single-phase compressor has C (Common), R (Run), and S (Start) terminals. The winding relationship is R(CS) = R(CR) + R(RS). There should be no continuity between the terminals and the compressor casing. Check that the start capacitor matches its rated value, for example 35 µF ±5%.',
				'An inverter compressor has U, V, and W terminals. Resistance should be equal between every pair (for example, 0.8 Ω, 0.8 Ω, and 0.8 Ω); even a small difference can indicate a fault. Check insulation to the casing, preferably with a megohmmeter.',
				'Check AC fan-motor windings and the capacitor. For a DC fan motor with five to seven wires, energized readings can include 300 V DC (power), 15 V DC (control), and Vsp (speed control). Do not measure resistance without the correct wiring diagram, as this may damage the Hall sensor.',
				'A Hall-effect sensor is a semiconductor chip that responds to a magnetic field and tells the control board the motor state, rotor position, and speed. In a BLDC motor, three sensors are usually positioned 120° apart. As the rotor turns, they produce 0–5 V DC pulse signals that let the board track rotor position and speed and energize the correct winding at the right time for smooth start-up, stable rotation, and efficient operation.',
				'To test a Hall sensor, use a 9 V battery, an LED, and a 470 Ω–1 kΩ resistor. Connect Vcc (red) to positive (+), GND (black) to negative (−), and the signal wire (for example, yellow) to the LED’s negative lead. Connect the LED’s positive lead to the resistor, then connect the resistor’s other end to positive (+). Slowly turn the motor shaft. A blinking LED indicates that the sensor is working; an LED that stays on or off indicates a faulty sensor.'
			] },
			{ title: 'Inverter operation and motor compatibility', description: 'Unlike a traditional On/Off system, an inverter is a frequency converter that changes fixed mains voltage and frequency (220 V / 50 Hz) into controllable values to regulate motor speed.', items: [
				'Rectification (AC to DC): a diode bridge converts incoming AC to pulsating DC. The reactor or choke acts as a current reservoir and supports power-factor correction.',
				'Filtering and the DC bus: electrolytic capacitors store the rectified energy. A single-phase system has approximately 310 V DC on the bus.',
				'Inversion (DC to simulated AC): an IPM with six IGBT transistors switches the DC using PWM. Changing the output frequency changes motor speed; an example operating range is 10–120 Hz.',
				'Inverter systems use BLDC motors without a commutator or brushes. This improves reliability but requires precise control. The rotor is a permanent magnet; the stator windings (U, V, W) must create a magnetic field at the right moment for the rotor’s position. Hall-effect feedback is used in indoor-unit fans: three sensors send rotor-position pulses to the board. Sensorless control is used in compressors and outdoor-unit fans; the motor produces back electromotive force (Back-EMF) as it turns, and the board measures the voltage on the free phase to determine rotor position.',
				'At start-up, the control board aligns the rotor with a fixed current, accelerates it in open-loop mode, then switches to closed-loop control once Back-EMF is available and the motor reaches its minimum speed.',
				'An inverter compressor is not a simple drop-in replacement because the control board contains a mathematical model of the motor. Compatibility depends on displacement, winding resistance and inductance, Back-EMF constant, rotor inertia, mechanical fit, and refrigerant type.',
				'Four key replacement criteria are displacement (cc/rev), electrical resistance, mechanical compatibility, and refrigerant type. Replacement with another brand can be suitable when the physical parameters match, including displacement, resistance (ohms), and power (watts).',
				'To identify a compatible compressor, photograph its label, note the model number, search for “[Model Number] compressor datasheet,” and find the displacement (cc) specification.',
				'After replacement, evacuate the system, listen for abnormal noise at start-up, and run it for at least 20 minutes so the control board can adapt. If the compressor is noisy at start-up, switch the system off and interchange phases U and V.'
			] },
			{ title: 'Control-board checks', description: 'Begin with a visual inspection, then check the electrical components.', items: [
				'On an unresponsive board, check the fuse for continuity and inspect the MOV varistor. It should read open circuit; replace it if it shows resistance.',
				'For a bridge rectifier, use diode mode and check that the AC-to-positive or AC-to-negative path conducts in one direction, with a typical voltage drop of 0.5–0.7 V.',
				'Check the secondary power rails: a 7805 regulator should receive more than 7 V DC and supply +5 V to the processor; a 7812 should receive more than 14 V DC and supply +12 V to relays and drivers. If the 7805 has no output, the processor cannot start.',
				'Also check capacitors in the indoor and outdoor units, magnetic starters, and the internal wiring.',
				'For an IPM, check the P and N DC input terminals and compare diode-mode readings across U, V, and W. Readings should be consistent; a zero reading (short circuit) or a markedly different value may indicate a failed module. An IPM failure can also damage the compressor, so check the compressor as well.',
				'For communication faults such as E1, E5, or E6, check optocouplers such as the PC817. In diode mode, pins 1 and 2 should behave like a diode, while pins 3 and 4 should not be shorted.',
				'Inspect DC-link capacitors for bulging or cracks. Before measuring capacitance, disconnect power, discharge the capacitor, and compare its measured value with the rated value.',
				'HVAC/R electrical systems are complex, and some details cannot be conveyed through theory alone; the rest comes from practical experience.'
			] },
			{ title: 'Drain-pump checks', description: 'A failed or blocked drain pump causes water to overflow or the air conditioner to switch off and enter protective mode.', items: [
				'The simplest and most reliable test is to simulate drainage. Remove the decorative panel or corner cover where the pump is located, run the air conditioner in cooling mode so the pump receives power, and slowly pour water from a bottle into the drain pan. As the water level rises, the float switch should signal the pump to remove the water; you should hear a light hum. If the water level rises but the pump does not start, there is a fault.',
				'Check that the float switch moves freely up and down. Clean it if sludge is blocking it. If it moves freely but the pump still does not start, check the electrical supply.',
				'If the pump does not respond, use a multimeter to check whether voltage reaches its connector from the control board. Most pumps use 220 V, but some are DC; check the label.',
				'With power disconnected, measure the pump winding resistance in ohms. An OL or 0 Ω reading indicates that the pump motor is burned out or open.'
			] },
			{ title: 'Finding and reading error codes', description: 'Error codes are model-specific; the same code can have different meanings on different brands.', items: [
				'On units with a display, note the code (for example, E1, E4, F3, or P0). Codes are not universal: E1 can indicate a sensor fault on one brand and high-pressure protection on another. Search using “[Brand Name] [Model] error code [Code]”.',
				'On units without a display, or on cassette models, count the LED flashes and note the pauses. For example, the Operation light may flash five times, pause, and repeat. Use the service manual or the model-specific error-code sticker inside the cover.',
				'On complex inverter and VRV / VRF systems, the outdoor-unit board may provide the most precise diagnosis. Remove the upper or front cover, find the board’s LEDs or digital display, and count the flashes or read the code.',
				'Check the wiring-diagram sticker on the inside of the indoor- or outdoor-unit cover. It often includes an Error Codes or Troubleshooting table for that model. A service manual contains technical diagnostic information that is not usually included in the user manual. Search by model number plus “Service Manual PDF”.'
			], externalLinks: [
				{ href: 'https://acerrorcode.com/', label: 'Error codes' },
			] },
		],
	},
	'air-conditioner-electrical': {
		intro: 'This overview introduces electrical and electronic components used in HVAC/R systems, how they work, and how they are checked. It covers power switching, capacitors, transformers, relays, inverter semiconductors, component groups, and printed circuit boards.',
		sections: [
			{ title: 'Safety first', description: 'Before touching any component, disconnect the electrical supply and discharge the capacitors.', items: ['Disconnect the electrical supply before touching components.', 'Discharge capacitors before working on or measuring them; capacitors can retain charge after power is removed.'] },
			{ title: 'Magnetic contactors', description: 'A contactor is a high-current electromechanical switch between a low-voltage control circuit and loads such as a compressor or motors.', items: [
				'When cooling is requested, the thermostat or control board energizes the contactor coil (commonly 24 V). The magnetic coil closes the contacts and supplies the compressor and outdoor fan with their operating voltage.',
				'Coil voltages can be 24 V, 120 V, or 230 V. Contactors may have one, one-and-a-half, two, or three poles, with full-load current ratings such as 30 A or 40 A.',
				'Inspect for burned or darkened contacts. When energized, the voltage drop between the incoming and outgoing contact terminals should be 0 V. With power off, measure coil resistance; OL indicates an open coil (an example reading is 0.675 kΩ). Arcing can pit or oxidize the contacts.'
			] },
			{ title: 'Run and start capacitors', description: 'Capacitors store electrical energy. In single-phase motors, they create a phase shift that helps the motor start and continue running.', items: [
				'A dual-run capacitor commonly has C (common), HERM (compressor), and FAN (fan motor) terminals.',
				'A start capacitor, usually in a black plastic casing, operates briefly during start-up.',
				'Measure capacitance in MFD / µF between C and HERM and between C and FAN, then compare each result with the label. For example, a capacitor rated at 35 µF may be marked ±5%. Replace a capacitor if its measured value is 10% or more below the rating.'
			] },
			{ title: 'Control transformer', description: 'A control transformer uses induction to reduce supply voltage for controls, boards, and sensors.', items: [
				'The transformer typically has a 220 V input (or 120 V under the US standard) and a 24 V AC output.',
				'Check the primary input and secondary output. The expected output is 24–28 V. If input is present but output is absent, the transformer is faulty.',
				'A short circuit in the 24 V circuit can overheat and damage the transformer. A 3 A or 5 A fuse is often fitted on the secondary side for protection.'
			] },
			{ title: 'Relays', description: 'A relay is a smaller switching device used for lower-current loads and control functions.', items: [
				'Relays can switch indoor blower speeds, electric heat strips, or logic functions on a PCB.',
				'With power off, check the coil resistance: 0 Ω suggests a short and OL suggests an open circuit.',
				'With the relay de-energized, a Normally Open (NO) contact should be open (OL), while a Normally Closed (NC) contact should conduct (about 0 Ω). Common faults include stuck-closed contacts and burned coils.'
			] },
			{ title: 'Inverter semiconductors and rectification', description: 'Inverter equipment converts mains AC to DC and then switches the DC to produce a variable-frequency AC output.', items: [
				'A four-terminal diode bridge rectifier converts AC to DC. It produces about 310 V DC from a 220 V single-phase supply and about 540 V DC in 380 V systems.',
				'In diode mode, the bridge should conduct in one direction between AC and positive / negative terminals, with a typical 0.4–0.6 V drop. Conduction in both directions or a zero reading indicates a failed bridge.',
				'The IPM (Intelligent Power Module) combines IGBT transistors and converts DC into three-phase pulsed output for a variable-speed compressor. An example operating range is 10%–120%.',
				'To check an IPM, disconnect power, wait for the capacitors to discharge, and use diode mode. With the red probe on P and the black probe on U, V, then W, the meter should show OL. Reverse the probes: readings from P to U, V, and W should each be about 0.4–0.7 V. Repeat the checks at N. A short or inconsistent result may indicate module damage. Dried thermal paste between the module and heat sink can contribute to overheating.',
				'A reactor or choke is a large copper coil with two leads. It smooths current pulses, improves power factor, and helps protect the IPM from voltage spikes. Its resistance should be very low; an OL reading indicates an open winding.'
			] },
			{ title: 'Electrical component groups', description: 'Common electrical components grouped by their role in the system.', items: [
				'Power and electromechanical: contactors, control transformers, run and start capacitors, SPDT / SPST / DPDT relays, potential relays, sequencers, solenoid coils, reversing-valve coils, and actuator motors.',
				'Protection and safety: fuses, circuit breakers, thermal overloads, MOV varistors, phase monitors, high- and low-pressure switches, crankcase heaters, and discharge-temperature switches.',
				'Sensors and inputs: NTC and PTC thermistors, pressure transducers, humidity sensors, float switches, flow switches, and Hall-effect sensors.',
				'PCB components and semiconductors: diode bridges, IPM / IGBT modules, MOSFETs, optocouplers, voltage regulators, microcontrollers, EEPROM chips, resistors, Zener diodes, electrolytic capacitors, reactors, DIP switches, terminal blocks, and LEDs.'
			] },
			{ title: 'HVAC/R circuit boards', description: 'Common control and power boards used in On/Off and inverter systems.', items: [
				'The main control board receives sensor data, makes control decisions, and manages operating modes, defrost, compressor logic, fans, and error codes. It appears in both On/Off and inverter systems, but does not directly drive the inverter motor.',
				'An inverter / power board converts AC to DC and back to variable-frequency AC. It includes a diode bridge, DC bus, IGBT / MOSFET transistors, and current and temperature protections.',
				'The DC bus stores and supplies high-voltage DC after rectification. Typical values are about 310 V DC for single-phase systems and 560 V DC for three-phase systems.',
				'A Power Factor Correction (PFC) board improves current draw and reduces DC-bus voltage drop. It may be found in higher-capacity systems such as VRF units and chillers.',
				'An IPM / compressor-driver board controls the transistor gates and power protections; some manufacturers use a separate board.',
				'A fan inverter board varies fan speed to control airflow and noise. A communication board exchanges data between modules and a BMS using protocols such as CAN, RS-485, Modbus, or BACnet.',
				'Expansion / I/O boards add inputs and outputs for sensors, solenoids, valves, and protections. A display / HMI board lets users interact with the system and shows temperatures, modes, errors, and settings.'
			] },
		],
	},
	refrigerants: {
		intro: 'Learn about refrigerant safety classifications, blend behaviour, technical terms, chemical families, environmental measures, and practical reference information.',
		sections: [
			{ title: 'ASHRAE Standard 34 safety classification', description: 'A refrigerant safety class uses a letter for toxicity and a number for flammability.', items: [
				'A: lower toxicity classification; B: higher toxicity classification.',
				'1: no flame propagation; 2L: lower flammability with a low burning velocity; 2: flammable; 3: higher flammability. Propane is an example of class 3.',
				'Examples of safety classes include A1, A2L, A3, and B1 / B2L. R600a and R290 are examples of A3 refrigerants.'
			] },
			{ title: 'Zeotropic and azeotropic blends', description: 'Refrigerant blends differ in how their components boil and whether their composition can shift.', items: [
				'Zeotropic blends have components with different boiling temperatures and a temperature glide. Charge them in liquid form to help preserve the blend composition. Examples include R-407C and R-404A, mostly in the 400 series.',
				'Azeotropic blends behave more like a single pure substance and boil at a constant temperature without glide. R-410A is nearly azeotropic and should also be charged as a liquid to preserve its 50/50 proportion.'
			] },
			{ title: 'Temperature glide and critical temperature', description: 'Two operating terms used when assessing refrigerants and blends.', items: [
				'Temperature glide is the difference, at constant pressure, between the start of boiling (bubble point) and the end of boiling (dew point). With a blend such as R-407C, evaporation begins at one temperature and finishes at a higher one.',
				'A leak can change the composition of a gliding blend as lighter components evaporate. A full refrigerant replacement may be needed instead of simply adding more.',
				'Critical temperature is the limit above which refrigerant cannot be liquefied by increasing pressure. It is 71°C for R-410A, 101°C for R-134a, and 31°C for CO2 (R-744). As the refrigerant approaches this limit, system efficiency can decrease.'
			] },
			{ title: 'Refrigerant chemical families', description: 'The chemical abbreviations indicate composition and are related to ozone impact and global warming.', items: [
				'HCFC (Hydrochlorofluorocarbons) contain chlorine, deplete ozone, and are being phased out; R-22 is an example.',
				'HFO (Hydrofluoroolefins) are fourth-generation refrigerants that are ozone-safe and do not contribute to global warming; R-1234yf is an example.',
				'HFC (Hydrofluorocarbons) do not contain chlorine and do not deplete ozone, but can contribute to global warming; examples include R-410A and R-134a.',
				'HC (hydrocarbons) are natural refrigerants that can be efficient, but are flammable; R-290 is an example.'
			] },
			{ title: 'Environmental measures and regulation', description: 'ODP, GWP, and TEWI are measures used to describe environmental impact.', items: [
				'Ozone Depletion Potential (ODP) compares ozone impact with R-11 (ODP = 1); the stated target is ODP = 0.',
				'Global Warming Potential (GWP) compares warming impact with CO2 (CO2 = 1). R-410A has a GWP of 2,088; one kilogram has a warming impact comparable to about two tonnes of CO2.',
				'Total Equivalent Warming Impact (TEWI) is a measure of total warming impact.',
				'The Kigali Amendment regulates reductions in HFC use.'
			] },
			{ title: 'Tables and practical reference topics', description: 'Quick-reference information for identifying refrigerants and working with them.', items: [
				'Chemical-family tables show common examples and their ozone-depletion classification.',
				'Safety-class examples include R22, R134a, R410A, R744, R1234yf, R600a, R290, and R717 (ammonia).',
				'R-22: HCFC; chlorodifluoromethane; no glide; MO or AB oil; A1 / GWP 1810; used in older systems; light-green cylinder.',
				'R-134a: HFC; tetrafluoroethane; no glide; POE or PAG oil; A1 / GWP 1430; used in vehicles and refrigerators; blue cylinder.',
				'R-1234yf: HFO; tetrafluoropropene; no glide; POE or PAG oil; A2L / GWP 4; used in newer vehicles; cylinder with a red stripe.',
				'R-404A: HFC blend of R-125, R-143a, and R-134a; small glide (about 0.8°C); POE oil; A1 / GWP 3922; used for commercial refrigeration; orange cylinder.',
				'R-407C: HFC blend of R-32, R-125, and R-134a; glide about 7°C; POE oil; A1 / GWP 1774; used as an R-22 replacement; brownish cylinder.',
				'R-410A: HFC blend of 50% R-32 and 50% R-125; near-zero glide (0.1°C); POE oil; A1 / GWP 2088; used in modern air conditioners; pink cylinder.',
				'R-32: HFC; difluoromethane; no glide; POE oil; A2L / GWP 675; used in newer air conditioners; cylinder with a red stripe.',
				'R-290: hydrocarbon propane; no glide; MO or POE oil; A3 / GWP 3; used in small commercial refrigerators.',
				'R-600a: hydrocarbon isobutane; no glide; MO oil; A3 / GWP 3; used in domestic refrigerators.',
				'R-123: HCFC; dichlorotrifluoroethane; no glide; MO or AB oil; B1 / GWP 77; used in centrifugal chillers; light-grey cylinder.',
				'R-717: ammonia (NH3); no glide; MO oil; B2L / GWP 0; used in industrial refrigeration; silver cylinder.'
			] },
			{ title: 'Seasonal operating-pressure reference', description: 'Approximate pressure ranges for outdoor temperatures of +25°C to +35°C in summer cooling mode and 0°C to +7°C in winter heating mode.', items: [
				'R-410A, summer cooling: suction 110–130 PSI (7.5–9 bar); discharge 320–450 PSI (22–31 bar). Winter heating: outdoor coil 75–100 PSI (5–7 bar); indoor coil 350–500+ PSI (24–34+ bar).',
				'R-32, summer cooling: suction 115–135 PSI (8–9.5 bar); discharge 360–480 PSI (25–33 bar). Winter heating: outdoor coil 80–105 PSI (5.5–7.2 bar); indoor coil 380–520+ PSI (26–36+ bar).',
				'R-22, summer cooling: suction 60–75 PSI (4–5 bar); discharge 250–280 PSI (17–19 bar). Winter heating: outdoor coil 35–50 PSI (2.5–3.5 bar); indoor coil 250–320 PSI (17–22 bar).',
				'R-134a: automotive suction 25–35 PSI (1.7–2.4 bar); refrigerator suction 0–5 PSI (0–0.3 bar); discharge 150–220 PSI (10–15 bar). Pressure drops in winter as the outdoor temperature falls. Refrigerators do not reverse into heating mode.',
				'R-600a: suction -5 to 0 PSI (vacuum; -0.3 to 0 bar); discharge 50–80 PSI (3.5–5.5 bar). Pressure falls further at lower temperatures.'
			] },
			{ title: 'Retrofit replacements', description: 'Examples of refrigerant replacements and related oil changes.', items: [
				'R-22 replacements include R-407C, R-422D (MO29), or R-417A. R-407C requires POE oil, while MO29 can also operate with MO oil.',
				'R-12 to R-134a: POE / PAG oil is required.',
				'R-134a to R-1234yf in vehicles: the oils are compatible and do not need changing.',
				'R-11 to R-123: an oil change is usually required.'
			] },
			{ title: 'Refrigerant lubricants', description: 'Lubricant and refrigerant compatibility is important to system operation.', items: [
				'MO (mineral oil): used with R-22, ammonia (R-717), and natural hydrocarbons such as R-290 and R-600a.',
				'PAG (polyalkylene glycol): used in automotive air conditioning with R-134a and R-1234yf.',
				'POE (polyolester): used with HFC and HFO refrigerants including R-410A, R-404A, R-134a, and R-32. POE is highly hygroscopic and absorbs moisture. Moisture can form acids, damage compressor windings, create sludge that blocks filters or capillary tubes, and corrode copper pipes.',
				'AB (alkylbenzene): used with R-22 and transitional HCFC refrigerants such as R-123.'
			] },
		],
	},
	licensing: {
		intro: 'A licence is required in Georgia to work on systems that use refrigerants. Use these study materials to prepare for the exam, build your theoretical knowledge, and take a practice simulation.',
		sections: [
			{ title: 'Choose a study section', description: 'Select a module to continue.', links: [
				{ pageId: 'licensing-learning', label: 'Exam questions and answers' },
				{ pageId: 'licensing-info', label: 'Main exam topics' },
				{ pageId: 'licensing-testing', label: 'Simulation testing' },
			] },
		],
	},
	'licensing-info': {
		intro: 'Review the main topics and requirements covered in the refrigerant licensing exam: refrigerant classifications, penalties and regulations, service intervals, safety limits, and practical technical guidance.',
		externalLink: {
			href: 'https://www.eiec.gov.ge/ka/programs/certificate-courses/refrigerant-equipment-certification',
			label: 'Official Ministry page',
			description: 'For detailed information about certification requirements, visit the ministry’s official website.',
		},
		sections: [
			{ title: 'Refrigerant families and safety groups', description: 'The classification below groups refrigerants by chemical family and safety characteristics.', items: [
				'CFC (chlorofluorocarbons), such as R12: high ozone-depletion potential.',
				'HCFC (hydrochlorofluorocarbons), such as R22: medium ozone-depletion potential.',
				'HFC (hydrofluorocarbons), such as R134a and R410A: zero ozone-depletion potential.',
				'HC (natural hydrocarbons), such as R600a and R290: zero ozone-depletion potential.',
				'Safety classes include A1 (R22, R134a, R410A, R744), A2L (R1234yf), A3 (R600a, R290), and B2 (R717 / ammonia).'
			] },
			{ title: 'Penalties and legislation', description: 'The listed fines and regulatory notes are provided as exam-study information.', items: [
				'Violation of electronic-system record-keeping rules: 500 GEL.',
				'General violation of technical regulations: 1,000 GEL.',
				'Service by an uncertified person: 400 GEL for an individual or 1,000 GEL for a legal entity; repeat violation: 800 GEL or 2,000 GEL, respectively.',
				'Illegal purchase or transfer of a substance: 150 GEL per kilogram.',
				'R22 is stated to be fully prohibited in 2040. The Kigali Amendment regulates HFC reductions. A certificate is valid for five years.'
			] },
			{ title: 'Service intervals and record keeping', description: 'Exam-study intervals and record-keeping requirements.', items: [
				'Planned leak checks for stationary equipment containing 3 kg or more of controlled refrigerant: at least once every 12 months.',
				'Calibration of a stationary fluorinated-refrigerant detector: once every 12 months.',
				'Technician certificate validity: five years; minimum supervised work period before independent work: one month.',
				'For stationary equipment containing 3 kg or more of refrigerant, the equipment owner and the certified service technician are responsible for maintaining the electronic log. Certified technicians must also enter service data for equipment containing less than 3 kg.'
			] },
			{ title: 'Safety limits and handling', description: 'Practical concentration values and safety thresholds.', items: [
				'Refrigerant concentration values: R134a — 0.25 kg/m³; R744 (CO2) — 0.07 kg/m³; R290 (propane) — 0.008 kg/m³; R717 (ammonia) — 0.00035 kg/m³.',
				'Minimum ventilation: four air changes per hour.',
				'The stated minimum difference between a hot surface and auto-ignition temperature is 150°C.',
				'The safe cylinder fill level is 80%. An A2 / A3 detector alarm is set at 20% of the lower flammability limit (LFL).'
			] },
			{ title: 'Practical technical guidance', description: 'Key practical points for refrigerant service.', items: [
				'Evacuation: create a vacuum sufficient to evaporate moisture at the ambient temperature.',
				'Leak-tightness testing: use dry nitrogen.',
				'Lubricant: use polyolester (POE) oil with R134a.',
				'Zeotropic blends: charge in liquid form only.',
				'Recycling: the stated impurity limit is no more than 2%.'
			] },
		],
	},
	'licensing-learning': {
		intro: 'Review the refrigerant licensing exam study bank in English. The correct option is marked for each question.',
		sections: [
			{ title: 'Exam questions and answers', description: 'The translated study bank includes all 203 questions and their four answer choices. Correct answers are marked in advance.' },
		],
		georgianLink: true,
	},
	'licensing-testing': {
		intro: 'Take a timed practice simulation for the refrigerant licensing exam in English.',
		sections: [
			{ title: 'Practice simulation', description: 'The simulation selects 30 questions at random from the study bank. The available time is 30 minutes, and a score of at least 27 correct answers is required to pass.' },
		],
		georgianLink: true,
	},
};
