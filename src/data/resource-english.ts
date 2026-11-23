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
		intro: 'Air-conditioning systems are selected according to the size and purpose of a building, the number of rooms, the required level of control, and the way heat is transferred. The sections below describe the residential, commercial, industrial, and building-management systems covered in the Georgian guide.',
		sections: [
			{ title: 'Residential systems', description: 'The Georgian guide covers three system types commonly used in apartments and houses.', items: [
				'Split system (On/Off or inverter): one indoor unit and one outdoor unit circulate refrigerant to cool or heat the air. The system includes the indoor and outdoor units, connecting cable and power supply, and copper pipes.',
				'Multi-split system: one outdoor unit serves several indoor units, usually two to five. Each indoor unit has its own pair of copper pipes connected to the outdoor unit, along with the required power, control, and communication connections.',
				'Mini VRF: a smaller VRF / VRV arrangement, described in the guide with four to eight indoor units connected to one outdoor unit. A central main line and branches, such as Refnet or Y-joints, reduce the number of long pipe runs.'
			] },
			{ title: 'Commercial systems', description: 'The guide discusses systems used in offices, shops, hotels, malls, and other commercial buildings.', items: [
				'VRF (Variable Refrigerant Flow) is the general technology name. VRV (Variable Refrigerant Volume) refers to the same technology and is Daikin’s registered trade term. One outdoor unit can serve many indoor units, with individual control and energy-efficient operation. Three-pipe heat-recovery systems can cool one room while heating another at the same time.',
				'Rooftop units (RTUs) are packaged units installed on a roof. They condition air and distribute it to large spaces through ducts. The package can include the casing, compressor and heat exchangers, supply and return fans, and an economizer.',
				'Packaged units place the system components in one self-contained cabinet. Like an RTU, a packaged unit may be installed at ground level and is used in smaller commercial spaces. The arrangement includes the unit, a room thermostat, and ductwork.',
				'Chiller and fan-coil systems circulate chilled or heated water: the chiller conditions the water and pipes carry it to fan-coil units (FCUs) in rooms. The described arrangement includes a chiller, a hydraulic module with pumps and tanks, FCUs, and insulated water piping.',
				'An air-handling unit (AHU) can supply fresh air centrally while FCUs regulate room temperature. Variable Air Volume (VAV) equipment can provide zone-level control. The system may include ducts and diffusers, FCUs, VAV boxes, and a chiller or boiler.',
				'A Dedicated Outdoor Air System (DOAS) takes in 100% outdoor air, removes moisture, cools it, and supplies it to the building. The guide lists a DOAS unit, an energy-recovery wheel, and ventilation ducts.'
			] },
			{ title: 'Industrial and specialist systems', description: 'The Georgian guide covers process cooling, high-capacity air handling, industrial ventilation, precision cooling, and cold-storage refrigeration.', items: [
				'Air-cooled chillers reject heat to outdoor air. Water-cooled chillers reject heat through water and a cooling tower. Free cooling can reduce compressor operation at low outdoor temperatures. A typical arrangement can include an industrial chiller, cooling tower where applicable, process pumps, and a buffer tank.',
				'High-airflow or hygienic AHUs are high-capacity units. The guide lists stainless-steel casings, high-pressure fans, HEPA / ULPA filters, EC fans, heat-recovery sections, and humidity-control equipment.',
				'Industrial ventilation includes extraction and exhaust systems that remove harmful substances, dust, or smoke. Listed equipment includes centrifugal fans, cyclones or scrubbers, make-up air units (MAUs), and industrial ducts.',
				'Precision cooling is used in data centres to control temperature and humidity closely. CRAC units operate with refrigerant; CRAH units use chilled water from a chiller. The guide also mentions hot-aisle / cold-aisle containment, N+1 or 2N redundancy, raised floors, humidifiers, and reheaters.',
				'Refrigeration systems provide low-temperature storage, including cold rooms operating at -18°C or -25°C. The guide mentions NH3 or CO2 systems, compressor racks, evaporators or unit coolers, and insulated panels.'
			] },
			{ title: 'Building Management System (BMS)', description: 'The guide describes a BMS as a central system for monitoring and controlling building services such as HVAC and lighting.', items: [
				'It is used in commercial buildings, including offices and hotels, to manage comfort and energy, and in industrial facilities such as pharmaceutical sites and data centres.',
				'A BMS arrangement can include a management server and software, Direct Digital Control (DDC) controllers, temperature, humidity, CO2 and pressure sensors, actuators and valves, and an operator interface (HMI).'
			] },
		],
	},
	'air-conditioner-components': {
		intro: 'An air conditioner contains refrigeration, airflow, electrical, and control components. This guide follows the Georgian source and describes the common parts of the outdoor and indoor units, additional components in larger systems, and several indoor-unit formats.',
		sections: [
			{ title: 'Outdoor unit components', description: 'The outdoor unit contains the compressor and the components that reject heat, direct refrigerant flow, and control system operation.', items: [
				'The compressor circulates refrigerant through the system and creates the pressure difference required for operation.',
				'The condenser coil (often called the outdoor radiator) is a network of aluminium fins and copper tubes. Hot refrigerant releases heat there and condenses into liquid.',
				'The fan and motor move outdoor air across the condenser coil to cool it.',
				'Heat-pump models use a four-way valve. Its solenoid coil changes the direction of refrigerant flow between heating and cooling.',
				'A capillary tube or expansion valve reduces refrigerant pressure; cooling begins as the refrigerant expands.',
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
				'The evaporator coil (the indoor radiator) cools or heats the air passing through the unit.',
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
		intro: 'Use a step-by-step approach to air-conditioner diagnostics: begin with the basic checks, follow electrical safety precautions, then assess sensors, motors, inverter operation, control boards, drainage, and model-specific error codes. The detailed checks below translate the corresponding Georgian guide.',
		sections: [
			{ title: 'Five checks before disassembly', description: 'Start with basic checks before taking the system apart.', items: [
				'Power supply: check that voltage is stable (the Georgian guide gives 210–230 V) and, on three-phase equipment, that the phases are balanced. The guide identifies voltage instability, phase loss, neutral faults, and missing earthing as issues to check.',
				'Filters and indoor coil: check whether the filters and coil are clean. The guide notes that dirty filters can be associated with high pressure, icing, and weak airflow.',
				'Operating mode: verify the remote-control setting. The guide lists Auto, Cool, Heat, Fan, and, on some units, Dry. In Auto mode the system selects heating or cooling itself.',
				'Communication: check whether the indoor and outdoor units exchange signals, whether the outdoor unit receives the required signal, and whether wiring or contacts are damaged.',
				'Outdoor unit: inspect the condenser coil for dirt and check that the fan is not blocked. The guide links a dirty condenser with high pressure, overheating, and protective shutdown.'
			] },
			{ title: 'Safety before inspection', description: 'The Georgian guide calls for safety precautions before opening the system or inspecting hardware and electronics.', items: ['Disconnect electrical power before beginning work.', 'Discharge capacitors safely.', 'Follow the applicable safety procedures.', 'Use a multimeter only with the necessary basic electronics knowledge.'] },
			{ title: 'Temperature and pressure sensors', description: 'Sensor faults or inaccurate readings can interrupt operation, cause incorrect control decisions, or stop the system.', items: [
				'NTC thermistors are common temperature sensors: resistance decreases as temperature rises and increases as temperature falls. Disconnect the sensor from the board, measure resistance in ohms, and compare the result with the manufacturer’s table; the guide gives examples of 5, 10, 15, or 50 kΩ at 25°C.',
				'An NTC sensor that reads open circuit (∞), short circuit (0 Ω), or does not change as temperature changes is described in the guide as faulty.',
				'PTC thermistors are used mainly for protection. Their resistance rises as temperature increases, often sharply. The guide says a PTC that remains open or does not change resistance when warmed is faulty.',
				'Pressure transducers, common in inverter systems, are checked on an energized system by measuring the supply (typically 5 V DC) and output signal (approximately 0.5–4.5 V depending on pressure).',
				'High- and low-pressure switches are checked for continuity. The guide states the circuit should be closed under normal conditions; an open circuit can mean the protection has activated or the component has failed.'
			] },
			{ title: 'Compressors, fan motors, and Hall sensors', description: 'The diagnostic method depends on whether the equipment uses an On/Off or inverter drive.', items: [
				'An On/Off single-phase compressor has C (Common), R (Run), and S (Start) terminals. The guide gives the winding relationship R(CS) = R(CR) + R(RS); there should be no continuity between the terminals and the compressor casing. Check that the start capacitor matches its stated rating.',
				'An inverter compressor has U, V, and W terminals. The guide says resistance between each pair should be equal and insulation to the casing should be checked, preferably with a megohmmeter.',
				'AC fan motors are checked by assessing the windings and capacitor. For a DC fan motor with five to seven wires, the guide lists energized readings such as 300 V DC (power), 15 V DC (control), and Vsp (speed control). It warns not to measure resistance without the correct wiring diagram because the Hall sensor may be damaged.',
				'Hall-effect sensors report motor and rotor position and speed to the control board. The guide describes three sensors positioned 120° apart and pulse signals of 0–5 V DC.',
				'The guide’s suggested Hall-sensor test uses a 9 V battery, an LED, and a 470 Ω–1 kΩ resistor: the LED should blink as the motor shaft is turned slowly. It states that a continuously lit or unlit LED indicates a faulty sensor.'
			] },
			{ title: 'Inverter operation and motor compatibility', description: 'The inverter converts fixed mains power into a variable-frequency supply to control motor speed. The Georgian guide describes a three-stage conversion and the relationship between the control board and motor.', items: [
				'Rectification (AC to DC): a diode bridge converts incoming AC to pulsating DC; the reactor or choke helps smooth current and supports power-factor correction.',
				'Filtering and the DC bus: electrolytic capacitors store the rectified energy. The guide gives approximately 310 V DC for a single-phase system.',
				'Inversion (DC to simulated AC): an IPM with six IGBT transistors switches the DC using PWM. Changing the output frequency changes motor speed; the guide gives 10–120 Hz as an example range.',
				'BLDC motors use electronic commutation rather than brushes. Hall sensors can provide rotor-position feedback; sensorless control can infer rotor position from back electromotive force (Back-EMF).',
				'The guide describes start-up as rotor alignment, open-loop acceleration, and a switch to closed-loop control once Back-EMF is available.',
				'When considering a replacement inverter compressor, the guide says to compare displacement, winding resistance and inductance, Back-EMF constant, rotor inertia, mechanical fit, and refrigerant type. It recommends finding the compressor model and its datasheet.',
				'After replacement, the guide calls for evacuation, listening for abnormal sound during start-up, and running the system for at least 20 minutes to allow the board to adapt.'
			] },
			{ title: 'Control-board checks', description: 'The Georgian guide begins with a visual inspection and then lists component-level electrical checks.', items: [
				'On an unresponsive board, check the fuse for continuity and inspect the MOV varistor; the guide says a varistor should read open circuit and should be replaced if it shows resistance.',
				'For a bridge rectifier, use diode mode and check that the AC-to-positive or AC-to-negative path conducts in one direction, with a typical voltage drop of 0.5–0.7 V.',
				'Check secondary power rails: the guide describes a 7805 regulator producing +5 V for the processor and a 7812 producing +12 V for relays and drivers.',
				'For an IPM, the guide checks the P and N DC input terminals and compares diode-mode readings across U, V, and W. A short circuit or markedly different readings may indicate a failed module; it also says the compressor should be checked.',
				'For communication faults, the guide describes checking optocouplers such as PC817: the input should behave like a diode and the output should not be shorted.',
				'Before measuring DC-link capacitor capacitance, the guide says to discharge the capacitor and then compare its measured value with the rated value.'
			] },
			{ title: 'Drain-pump checks', description: 'A failed or blocked drain pump can be associated with water overflow or the air conditioner entering a protective shutdown.', items: [
				'The guide’s water test is to access the pump area, run the unit in cooling mode, and slowly pour water into the drain pan. As the float rises, the float switch should trigger the pump to remove the water.',
				'Check that the float switch moves freely; clean it if sludge is preventing movement.',
				'If the pump does not respond, check whether voltage reaches its connector. The guide notes that many pumps use 220 V, while some are DC, so check the unit label.',
				'With power disconnected, measure the pump winding resistance. The guide says an OL or 0 Ω reading indicates a failed motor.'
			] },
			{ title: 'Finding and reading error codes', description: 'Error codes are model-specific; the same code can have different meanings on different brands.', items: [
				'On units with a display, note the displayed code and look it up with the brand and model. Do not assume the code has a universal meaning.',
				'On units without a display, observe the number and timing of LED flashes and consult the service manual or the model-specific diagram inside the cover.',
				'On complex inverter and VRV / VRF systems, the outdoor-unit board may display the most precise code. The guide says to check its LEDs or digital display.',
				'Use the wiring diagram or service manual for the exact model. The guide distinguishes a service manual from a user manual and suggests searching by model number plus “Service Manual PDF”.'
			] },
		],
		note: 'The Georgian source contains hazardous-voltage and refrigerant-system diagnostic procedures. Have these checks performed by a qualified technician using the equipment manufacturer’s service information and appropriate safety procedures.',
	},
	'air-conditioner-electrical': {
		intro: 'This guide introduces electrical and electronic parts used in HVAC/R systems, how they function, and the checks described in the Georgian source. It covers power switching, capacitors, transformers, relays, inverter semiconductors, component groups, and printed circuit boards.',
		sections: [
			{ title: 'Safety first', description: 'The Georgian guide places safety before component inspection.', items: ['Disconnect the electrical supply before touching components.', 'Discharge capacitors before working on or measuring them; capacitors can retain charge after power is removed.'] },
			{ title: 'Magnetic contactors', description: 'A contactor is a high-current electromechanical switch between a low-voltage control circuit and loads such as a compressor or motors.', items: [
				'When cooling is requested, the thermostat or control board energizes the contactor coil (commonly 24 V). The magnetic coil closes the contacts and supplies the compressor and outdoor fan with their operating voltage.',
				'The guide lists coil voltages of 24 V, 120 V, or 230 V; one-, one-and-a-half-, two-, or three-pole arrangements; and full-load current ratings such as 30 A or 40 A.',
				'Inspection includes checking for burned or darkened contacts, measuring voltage drop across the contacts while energized, and measuring coil resistance with power off. The guide describes an OL reading as an open coil and notes that arcing can pit or oxidize contacts.'
			] },
			{ title: 'Run and start capacitors', description: 'Capacitors store electrical energy. In single-phase motors, they create a phase shift that helps the motor start and continue running.', items: [
				'A dual-run capacitor commonly has C (common), HERM (compressor), and FAN (fan motor) terminals.',
				'A start capacitor, described in the guide as having a black plastic casing, operates briefly during start-up.',
				'The guide checks capacitance in MFD / µF between C and HERM and between C and FAN, comparing each result with the label. It says a value 10% or more below the rating needs replacement.'
			] },
			{ title: 'Control transformer', description: 'A control transformer uses induction to reduce supply voltage for controls, boards, and sensors.', items: [
				'The Georgian guide describes 220 V input (or 120 V in the US standard) and 24 V AC output.',
				'It checks the primary input and secondary output, giving 24–28 V as the expected output range. If input is present but output is absent, it identifies the transformer as faulty.',
				'A short circuit in the 24 V circuit can overheat and damage the transformer. The guide notes that a 3 A or 5 A fuse is often fitted on the secondary side for protection.'
			] },
			{ title: 'Relays', description: 'A relay is a smaller switching device used for lower-current loads and control functions.', items: [
				'Relays can switch indoor blower speeds, electric heat strips, or logic functions on a PCB.',
				'The guide checks coil resistance with power off: 0 Ω suggests a short and OL suggests an open circuit.',
				'With the relay de-energized, a Normally Open (NO) contact should be open (OL), while a Normally Closed (NC) contact should conduct (about 0 Ω). Stuck-closed contacts and burned coils are listed as common faults.'
			] },
			{ title: 'Inverter semiconductors and rectification', description: 'Inverter equipment converts mains AC to DC and then switches the DC to produce a variable-frequency AC output.', items: [
				'A four-terminal diode bridge rectifier converts AC to DC. The guide gives about 310 V DC from a 220 V single-phase supply and about 540 V DC in 380 V systems.',
				'In diode mode, the guide checks that the bridge conducts in one direction between AC and positive / negative terminals, with a typical 0.4–0.6 V drop. Conduction in both directions or a zero reading is described as a failed bridge.',
				'The IPM (Intelligent Power Module) combines IGBT transistors. It converts DC into three-phase pulsed output for a variable-speed compressor; the guide gives 10%–120% as an example operating range.',
				'The guide’s IPM check is performed with power disconnected and capacitors discharged. It compares diode-mode readings from P and N to U, V, and W. A short or inconsistent result may indicate module damage. It also notes that dried thermal paste between the module and heat sink can contribute to overheating.',
				'A reactor or choke is a large copper coil with two leads. It smooths current pulses, improves power factor, and helps protect the IPM from voltage spikes; the guide expects very low resistance and treats OL as an open winding.'
			] },
			{ title: 'Electrical component groups', description: 'The Georgian guide groups commonly used parts by their role in the system.', items: [
				'Power and electromechanical: contactors, control transformers, run and start capacitors, SPDT / SPST / DPDT relays, potential relays, sequencers, solenoid coils, reversing-valve coils, and actuator motors.',
				'Protection and safety: fuses, circuit breakers, thermal overloads, MOV varistors, phase monitors, high- and low-pressure switches, crankcase heaters, and discharge-temperature switches.',
				'Sensors and inputs: NTC and PTC thermistors, pressure transducers, humidity sensors, float switches, flow switches, and Hall-effect sensors.',
				'PCB components and semiconductors: diode bridges, IPM / IGBT modules, MOSFETs, optocouplers, voltage regulators, microcontrollers, EEPROM chips, resistors, Zener diodes, electrolytic capacitors, reactors, DIP switches, terminal blocks, and LEDs.'
			] },
			{ title: 'HVAC/R circuit boards', description: 'The source describes the functions of common control and power boards used in On/Off and inverter systems.', items: [
				'The main control board receives sensor data, makes control decisions, and manages operating modes, defrost, compressor logic, fans, and error codes. It appears in both On/Off and inverter systems, but does not directly drive the inverter motor.',
				'The inverter / power board converts AC to DC and back to variable-frequency AC. The guide lists a diode bridge, DC bus, IGBT / MOSFET transistors, and current and temperature protections.',
				'The DC bus stores and supplies high-voltage DC after rectification. The source gives typical values of about 310 V DC for single-phase and 560 V DC for three-phase systems.',
				'A Power Factor Correction (PFC) board improves current draw and reduces DC-bus voltage drop. The source says it may appear in higher-capacity systems such as VRF units and chillers.',
				'An IPM / compressor-driver board controls the transistor gates and power protections; some manufacturers use a separate board.',
				'A fan inverter board varies fan speed to control airflow and noise. A communication board exchanges data between modules and a BMS using protocols such as CAN, RS-485, Modbus, or BACnet.',
				'Expansion / I/O boards add inputs and outputs for sensors, solenoids, valves, and protections. A display / HMI board lets users interact with the system and shows temperatures, modes, errors, and settings.'
			] },
		],
		note: 'The material is educational and does not replace qualified electrical work or manufacturer documentation.',
	},
	refrigerants: {
		intro: 'This guide translates the Georgian overview of refrigerant safety classification, blend behavior, technical terms, chemical families, environmental measures, and refrigerant reference information.',
		sections: [
			{ title: 'ASHRAE Standard 34 safety classification', description: 'The source explains the letter and number portions of a refrigerant safety class: the letter describes toxicity and the number describes flammability.', items: [
				'A: lower toxicity classification; B: higher toxicity classification.',
				'1: no flame propagation; 2L: lower flammability with a low burning velocity; 2: flammable; 3: higher flammability. The source gives propane as an example of class 3.',
				'Classes shown in the guide include A1, A2L, A3, and B1 / B2L. It lists R600a and R290 as examples of A3 refrigerants.'
			] },
			{ title: 'Zeotropic and azeotropic blends', description: 'The source distinguishes refrigerant blends according to how their components boil and whether their composition can shift.', items: [
				'Zeotropic blends have components with different boiling temperatures and a temperature glide. The source says to charge them in liquid form to help preserve the blend composition; examples include R-407C and R-404A, mostly in the 400 series.',
				'Azeotropic blends behave more like a single pure substance and boil at a constant temperature without glide. The source describes R-410A as nearly azeotropic and says it is still charged as liquid to preserve its 50/50 proportion.'
			] },
			{ title: 'Temperature glide and critical temperature', description: 'The guide defines two operating terms used when assessing refrigerants and blends.', items: [
				'Temperature glide is the difference, at constant pressure, between the start of boiling (bubble point) and the end of boiling (dew point). With a blend such as R-407C, evaporation begins at one temperature and finishes at a higher one.',
				'The source warns that a leak can change the composition of a gliding blend as lighter components evaporate; it says a full refrigerant replacement may be needed instead of simply adding more.',
				'Critical temperature is the limit above which refrigerant cannot be liquefied by increasing pressure. The source gives 71°C for R-410A, 101°C for R-134a, and 31°C for CO2 (R-744), and explains that approaching this limit can reduce system efficiency.'
			] },
			{ title: 'Refrigerant chemical families', description: 'The chemical abbreviations indicate composition and are related to ozone impact and global warming.', items: [
				'HCFC (Hydrochlorofluorocarbons) contain chlorine, deplete ozone, and are being phased out; R-22 is an example.',
				'HFO (Hydrofluoroolefins) are described as fourth-generation refrigerants that are ozone-safe and have low global-warming impact; R-1234yf is an example.',
				'HFC (Hydrofluorocarbons) do not contain chlorine and do not deplete ozone, but can contribute to global warming; examples include R-410A and R-134a.',
				'HC (hydrocarbons) are natural refrigerants that can be efficient, but are flammable; R-290 is an example.'
			] },
			{ title: 'Environmental measures and regulation', description: 'The source introduces ODP, GWP, and TEWI as measures used to describe environmental impact.', items: [
				'Ozone Depletion Potential (ODP) compares ozone impact with R-11 (ODP = 1); the stated target is ODP = 0.',
				'Global Warming Potential (GWP) compares warming impact with CO2 (CO2 = 1). The source gives R-410A a GWP of 2,088 and compares one kilogram of it with about two tonnes of CO2.',
				'Total Equivalent Warming Impact (TEWI) is included in the source as a measure of total warming impact.',
				'The guide also discusses the Kigali Amendment and its role in regulating reductions in HFC use.'
			] },
			{ title: 'Tables and practical reference topics', description: 'The Georgian page also includes reference tables and topics for working with refrigerants.', items: [
				'Chemical-family tables show common examples and their ozone-depletion classification.',
				'Safety-class examples include R22, R134a, R410A, R744, R1234yf, R600a, R290, and R717 (ammonia).',
				'R-22: HCFC; chlorodifluoromethane; no glide; MO or AB oil; A1 / GWP 1810; shown for older systems; light-green cylinder.',
				'R-134a: HFC; tetrafluoroethane; no glide; POE or PAG oil; A1 / GWP 1430; shown for vehicles and refrigerators; blue cylinder.',
				'R-1234yf: HFO; tetrafluoropropene; no glide; POE or PAG oil; A2L / GWP 4; shown for newer vehicles; cylinder with a red stripe.',
				'R-404A: HFC blend of R-125, R-143a, and R-134a; small glide (about 0.8°C); POE oil; A1 / GWP 3922; shown for commercial refrigeration; orange cylinder.',
				'R-407C: HFC blend of R-32, R-125, and R-134a; glide about 7°C; POE oil; A1 / GWP 1774; shown as an R-22 replacement; brownish cylinder.',
				'R-410A: HFC blend of 50% R-32 and 50% R-125; near-zero glide (0.1°C); POE oil; A1 / GWP 2088; shown for modern air conditioners; pink cylinder.',
				'R-32: HFC; difluoromethane; no glide; POE oil; A2L / GWP 675; shown for newer air conditioners; cylinder with a red stripe.',
				'R-290: hydrocarbon propane; no glide; MO or POE oil; A3 / GWP 3; shown for small commercial refrigerators.',
				'R-600a: hydrocarbon isobutane; no glide; MO oil; A3 / GWP 3; shown for domestic refrigerators.',
				'R-123: HCFC; dichlorotrifluoroethane; no glide; MO or AB oil; B1 / GWP 77; shown for centrifugal chillers; light-grey cylinder.',
				'R-717: ammonia (NH3); no glide; MO oil; B2L / GWP 0; shown for industrial refrigeration; silver cylinder.'
			] },
			{ title: 'Seasonal operating-pressure reference', description: 'The values below reproduce the Georgian page’s approximate ranges. Its table assumes outdoor temperatures of +25°C to +35°C for summer cooling and 0°C to +7°C for winter heating.', items: [
				'R-410A, summer cooling: suction 110–130 PSI (7.5–9 bar); discharge 320–450 PSI (22–31 bar). Winter heating: outdoor coil 75–100 PSI (5–7 bar); indoor coil 350–500+ PSI (24–34+ bar).',
				'R-32, summer cooling: suction 115–135 PSI (8–9.5 bar); discharge 360–480 PSI (25–33 bar). Winter heating: outdoor coil 80–105 PSI (5.5–7.2 bar); indoor coil 380–520+ PSI (26–36+ bar).',
				'R-22, summer cooling: suction 60–75 PSI (4–5 bar); discharge 250–280 PSI (17–19 bar). Winter heating: outdoor coil 35–50 PSI (2.5–3.5 bar); indoor coil 250–320 PSI (17–22 bar).',
				'R-134a: the page lists automotive suction at 25–35 PSI (1.7–2.4 bar), refrigerator suction at 0–5 PSI (0–0.3 bar), and discharge at 150–220 PSI (10–15 bar). It notes that pressure drops in winter with outdoor temperature and that refrigerators do not reverse into heating mode.',
				'R-600a: the page lists suction at -5 to 0 PSI (vacuum; -0.3 to 0 bar) and discharge at 50–80 PSI (3.5–5.5 bar), noting that pressure falls further at lower temperatures.'
			] },
			{ title: 'Retrofit replacements', description: 'The Georgian page lists these examples of refrigerant replacements and oil changes.', items: [
				'R-22 replacements shown: R-407C, R-422D (MO29), or R-417A. The source says R-407C requires POE oil, while MO29 can also operate with MO oil.',
				'R-12 to R-134a: the source says POE / PAG oil is required.',
				'R-134a to R-1234yf in vehicles: the source says the oils are compatible and do not need changing.',
				'R-11 to R-123: the source says an oil change is usually required.'
			] },
			{ title: 'Refrigerant lubricants', description: 'The source emphasizes that lubricant and refrigerant compatibility matters to system operation.', items: [
				'MO (mineral oil): listed for R-22, ammonia (R-717), and natural hydrocarbons such as R-290 and R-600a.',
				'PAG (polyalkylene glycol): listed for automotive air conditioning with R-134a and R-1234yf.',
				'POE (polyolester): listed for HFC and HFO refrigerants including R-410A, R-404A, R-134a, and R-32. The source says POE is highly hygroscopic and absorbs moisture; it warns that moisture can form acids, damage compressor windings, create sludge that blocks filters or capillary tubes, and corrode copper pipes.',
				'AB (alkylbenzene): listed for R-22 and transitional HCFC refrigerants such as R-123.'
			] },
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
		note: 'The study questions and timed practice simulation are available in English and Georgian.',
	},
	'licensing-info': {
		intro: 'This English guide translates the key study topics presented on the Georgian refrigerant-licensing information page, including refrigerant classifications, penalties and regulations, service intervals, safety limits, and practical technical guidance.',
		sections: [
			{ title: 'Refrigerant families and safety groups', description: 'The source lists refrigerant families, examples, and safety classifications.', items: [
				'CFC (chlorofluorocarbons), example R12: the source marks ozone-depletion potential as high.',
				'HCFC (hydrochlorofluorocarbons), example R22: the source marks ozone-depletion potential as medium.',
				'HFC (hydrofluorocarbons), examples R134a and R410A: the source marks ozone-depletion potential as zero.',
				'HC (natural hydrocarbons), examples R600a and R290: the source marks ozone-depletion potential as zero.',
				'Safety classes shown include A1 (R22, R134a, R410A, R744), A2L (R1234yf), A3 (R600a, R290), and B2 (R717 / ammonia).'
			] },
			{ title: 'Penalties and legislation', description: 'The Georgian source reproduces the following penalty amounts and notes. These are translated as displayed on that page.', items: [
				'Violation of electronic-system record-keeping rules: 500 GEL.',
				'General violation of technical regulations: 1,000 GEL.',
				'Service by an uncertified person: 400 GEL for an individual or 1,000 GEL for a legal entity; repeat violation: 800 GEL or 2,000 GEL, respectively.',
				'Illegal purchase or transfer of a substance: 150 GEL per kilogram.',
				'The page states that R22 will be fully prohibited in 2040, the Kigali Amendment regulates HFC reductions, and a certificate is valid for five years.'
			] },
			{ title: 'Service intervals and record keeping', description: 'The page lists these periods as exam-study values.', items: [
				'Planned leak checks for stationary equipment containing 3 kg or more of controlled refrigerant: at least once every 12 months.',
				'Calibration of a stationary fluorinated-refrigerant detector: once every 12 months.',
				'Technician certificate validity: five years; minimum supervised work period before independent work: one month.',
				'The source says the equipment owner and servicing certified person are responsible for the electronic log for stationary equipment containing 3 kg or more. It also says certified persons record service data for equipment containing less than 3 kg.'
			] },
			{ title: 'Safety limits and handling', description: 'The Georgian study page lists these practical values and thresholds.', items: [
				'Refrigerant concentration values shown: R134a — 0.25 kg/m³; R744 (CO2) — 0.07 kg/m³; R290 (propane) — 0.008 kg/m³; R717 (ammonia) — 0.00035 kg/m³.',
				'Minimum ventilation: four air changes per hour.',
				'The stated minimum difference between a hot surface and auto-ignition temperature is 150°C.',
				'The page gives 80% as a safe cylinder fill level and says an A2 / A3 detector alarm is set at 20% of the lower flammability limit (LFL).'
			] },
			{ title: 'Practical technical guidance', description: 'The source lists the following study points.', items: [
				'Evacuation: create a vacuum sufficient to evaporate moisture at the ambient temperature.',
				'Leak-tightness testing: use dry nitrogen.',
				'Lubricant: use polyolester (POE) oil with R134a.',
				'Zeotropic blends: charge in liquid form only.',
				'Recycling: the stated impurity limit is no more than 2%.'
			] },
		],
		note: 'This is a translation of the study information already published in Georgian. Legal requirements and regulatory values are reproduced as they appear in that source page.',
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
