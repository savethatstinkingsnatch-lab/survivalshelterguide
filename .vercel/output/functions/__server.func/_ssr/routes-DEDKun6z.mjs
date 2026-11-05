import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Snowflake, c as Layers, i as Sun, l as CloudRain, o as PocketKnife, r as Thermometer, s as Link2, t as Wind, u as Clock } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEDKun6z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THREATS = [
	{
		id: "rain",
		label: "Cold rain",
		hint: "Wet steals heat fast"
	},
	{
		id: "wind",
		label: "Hard wind",
		hint: "Keep the ridge low"
	},
	{
		id: "cold",
		label: "Clear cold",
		hint: "You need insulation"
	},
	{
		id: "snow",
		label: "Snow",
		hint: "Depth changes the build"
	},
	{
		id: "heat",
		label: "Heat",
		hint: "Shade and moving air"
	},
	{
		id: "fast",
		label: "Almost dark",
		hint: "Fastest cover that works"
	}
];
var KITS = [
	{
		id: "tarp",
		label: "Tarp or poncho",
		hint: "A sheet, bags, a blanket"
	},
	{
		id: "cord",
		label: "Cord",
		hint: "Line, laces, or strips"
	},
	{
		id: "blade",
		label: "Knife or saw",
		hint: "Useful, not required"
	},
	{
		id: "snow",
		label: "Deep snow",
		hint: "Knee-deep or more"
	}
];
var WORK_ORDER = [
	{
		n: "01",
		title: "Site",
		detail: "Walk off bad ground before you touch a branch."
	},
	{
		n: "02",
		title: "Bed",
		detail: "Get off the soil, even if the roof is not finished."
	},
	{
		n: "03",
		title: "Roof",
		detail: "Block rain and wind. Low beats tall."
	},
	{
		n: "04",
		title: "Close",
		detail: "Shut drafts. Leave yourself air to breathe."
	}
];
var RULES = [
	{
		n: "01",
		title: "Off the ground",
		detail: "Soil pulls heat out of you even when the air feels mild."
	},
	{
		n: "02",
		title: "Out of the wind",
		detail: "A low back into the weather beats a tall roof."
	},
	{
		n: "03",
		title: "Not in a wash",
		detail: "Dry creek beds fill while you are asleep."
	},
	{
		n: "04",
		title: "Small enough to heat",
		detail: "A hut you can sit up in will stay cold."
	}
];
var COLD_WATCH = "If you are shivering hard, slurring, or fumbling simple tasks, stop improving the roof. Get the driest layer you have against your skin, get on the bed, and block the wind. A finished frame does not warm you. Being inside it does.";
var HEAT_WATCH = "If you stop sweating, feel confused, or feel sick, you are past the point of a nicer roof. Get into shade, off the hot ground, and rest. Wetting your skin only helps when you can spare the water and you are already in the shade.";
var FIRE_NOTE = "Do not delay the shelter to start a fire. Do not light one inside a debris hut or a snow trench. Smoke, melt, and collapse turn a shelter into a trap.";
var SITE = {
	avoid: [
		"Dry washes, creek beds, and the bottom of a narrow gully. Water arrives faster than you can climb.",
		"Anything overhead that can fall: dead limbs, a leaning snag, a trunk with a fresh crack.",
		"The crown of a ridge in wind, and a valley floor on a still cold night. Cold air pools in the low spots.",
		"Game trails, dens, nests, and ground covered in droppings.",
		"Loose rock above you, or a snow slope that could slide."
	],
	settle: [
		"A slight rise, so water drains past the bed instead of through it.",
		"The lee of something solid, with the door turned out of the wind.",
		"A short walk from dead wood and a deep pile of leaves. Hauling them is how you get cold.",
		"Morning sun if you are cold. Solid shade if you are hot.",
		"Far enough from a river that a rise will not reach you, close enough that you can find it again in daylight."
	]
};
var SIGNAL = "If you are lost, this shelter is for the night, not a reason to keep walking. Three of anything is a distress pattern: whistle blasts, bright piles, smokes. Leave a bright scrap where it can be seen from above, and stay with the shelter if someone may already be looking.";
function steps(shelter, rows) {
	return rows.map(([title, detail], index) => ({
		id: `${shelter}-${index + 1}`,
		title,
		detail
	}));
}
var SHELTERS = [
	{
		id: "leanto",
		name: "Low lean-to",
		minutes: "25–45 min",
		minutesNote: "One person, materials close by. Cold hands take longer.",
		bestFor: "Rain or wind from one direction, or when the light is almost gone.",
		summary: "A single slope with its back to the weather. It is a windbreak and a roof, not a room. The bed under it matters as much as the thatch.",
		materials: [
			"A ridge pole a little longer than you are",
			"Two supports: trees, forks, stumps, or rocks",
			"Ribs, about a hand-width apart",
			"Boughs, bark, ferns, or a deep pile of leaves",
			"The driest of that pile, saved for the bed"
		],
		steps: steps("leanto", [
			["Face the closed side into the weather", "The open side looks away from rain and wind. The ground under you should tilt so water runs off, not in. If gusts wrap around, you will close the sides last."],
			["Set the ridge no higher than your waist", "A chest-high lean-to looks roomy and lets the weather in. Waist high, lower if the wind is hard. Rest a straight pole in two forks, or on a rock and a stump."],
			["Lay ribs on the weather side only", "A hand-width apart, from the ridge down to the ground. Aim for a slope near 45 degrees, steeper if the rain is heavy, so water runs off instead of sitting."],
			["Thatch from the bottom up", "Boughs, then bark, ferns, and leaf litter. Start at the ground and work toward the ridge so each layer overlaps the one below, like shingles. Tips point downhill. Stop when you cannot see daylight through the roof. A hand-span thick for rain. Closer to a forearm if the night is cold."],
			["Build the bed before you sit down", "Dry leaves, grass, or boughs under your whole body, at least a hand deep, better a forearm. Bare ground pulls heat out of you faster than cold air does. Damp debris still beats dirt."],
			["Scrape a drip trench", "Just outside where water falls off the roof, scrape a shallow groove that leads downhill. Without it, runoff creeps back under the bed."],
			["Shut the sides, keep a way in", "Pile brush on the upwind corners so gusts cannot curl in. Leave a door on the lee side. A pack can be the door."]
		]),
		fails: [
			"You can still see sky through the roof",
			"The ridge is at head height",
			"The open side points at the rain",
			"You sleep on bare dirt",
			"You built it in a drainage"
		]
	},
	{
		id: "debris",
		name: "Debris hut",
		minutes: "60–120 min",
		minutesNote: "Most of the time is hauling leaves, not cutting wood.",
		bestFor: "A clear cold night, or any night you have to sleep and stay warm.",
		summary: "A sleeping bag made of sticks and leaves. Your body is the furnace. The hut only works if it is barely bigger than you and the walls are absurdly thick.",
		materials: [
			"A ridge pole a little longer than your body",
			"One support at the high end: stump, rock, or forked stick",
			"Ribs for both sides, set close together",
			"A pile of dry debris you can barely see over",
			"A separate armful for the door plug"
		],
		steps: steps("debris", [
			["Build where the debris already is", "You will use more leaves than you can carry far. Pick a safe site within a short walk of dry leaves, needles, or grass. Brush snow off the pile before you use it."],
			["Set a ridge just longer than you", "One end on the ground. The other on a stump, rock, or forked stick about hip high. Lie beside it. You should fit underneath without sitting up, with a little space past your feet."],
			["Rib both sides and leave a door", "Space the ribs so leaves cannot pour through. The opening is at the high end, just wide enough to crawl in. This is not a tent you can kneel in."],
			["Pile debris an arm’s length thick", "Leaves, needles, ferns, grass, bark. Pat it down, then add more. If you can still see the ribs, you are not done. Walk on the pile so it settles, then top it up. Rain and wind both get through a neat, thin layer."],
			["Keep the inside coffin-small", "If you can turn around easily, the hut is too big and your body will not heat it. You should be able to lie still. You should not be able to sit up and hold a conversation."],
			["Fill the floor, then plug the door", "The driest material goes under you, wrist-deep, wall to wall. Stuff a separate bundle as a door plug you pull in behind your back. Do not seal your face into it."],
			["Leave a fist-sized vent", "Near your head, clear of the door plug, so you are not breathing a sealed box. Keep it open. No fire inside."]
		]),
		fails: [
			"The cavity is big enough to sit up in",
			"You can still see the ribs through the walls",
			"Wet leaves are against your skin and nothing dry is under you",
			"The door is sealed and there is no vent",
			"Someone lights a fire inside"
		]
	},
	{
		id: "tarp",
		name: "Tarp A-frame",
		minutes: "10–20 min",
		minutesNote: "Pitch first. Spend every leftover minute on the bed.",
		bestFor: "Rain, wind, or failing light, when you already have a sheet.",
		summary: "The fastest real roof. Pitch it low. A tarp stops wind and rain. It does not insulate you from the ground or from a cold night on its own.",
		materials: [
			"A tarp, poncho, or heavy bags split and overlapped",
			"A ridgeline: cord, a vine, or knotted laces",
			"Two anchors, trees or a propped pole",
			"Rocks or stakes for every corner",
			"Leaves, boughs, or a pack for the bed"
		],
		steps: steps("tarp", [
			["String the ridge at knee to waist height", "Between two trees, or a tree and a propped pole. Lower holds heat and sheds wind. Go higher only in heat, and that is a different shelter."],
			["Drape the sheet into a steep A", "Equal panels both sides. Pull the edges out and down so rain runs off. A sagging belly collects water and then dumps it on you."],
			["Fix every corner", "Tie, stake, or bury a rock in a bunched corner. The shelter fails when one gust turns it into a flag. If the wind has a direction, drop the weather edge all the way to the ground."],
			["Turn the door off the wind", "Not a little. A quarter-turn if gusts wrap. Enter from the end of the A instead of the open side when the wind is shifty."],
			["Put a bed down before you rest", "A tarp does not insulate you from the soil. Leaves, boughs, a pack, or spare clothing under your hips and shoulders."],
			["If the night is cold, add debris", "Stuff the inside with leaves or build a thick wall on the weather side. A sheet stops wind. It does not replace insulation. Do not wrap yourself tight in a crinkling emergency blanket with no air."]
		]),
		fails: [
			"The ridge is head-high in a wind",
			"The middle sags and holds a pool",
			"A corner is loose",
			"There is no bed under you",
			"A space blanket is doing the job of a sleeping bag"
		]
	},
	{
		id: "shade",
		name: "Shade roof",
		minutes: "15–30 min",
		minutesNote: "Build it before the hottest hour, not after you are dizzy.",
		bestFor: "Sun and heat. Not for cold, rain, or a night that will drop.",
		summary: "A roof and a breeze. Closed walls are the hazard here. You want shade, a gap in the roof, and your body off ground that has been baking all day.",
		materials: [
			"Poles, or low trees that can carry a flat roof",
			"Brush for two layers, and a tarp if you have one",
			"Something to lie on: boughs, a pack, clothing",
			"Open ground so air can cross under the roof"
		],
		steps: steps("shade", [
			["Do not close the walls", "Trapped air cooks you. Leave at least two sides open so a breeze can cross your body. This is a roof, not a hut."],
			["Put a gap in the roof", "Brush over a tarp, or two layers of brush with air between them. A single dark sheet in full sun becomes a radiator. The outer layer takes the sun. The inner layer should not touch it."],
			["Get off sand and rock", "Ground that has been in the sun is an oven. Boughs, a pack, clothing, anything that puts a gap under your torso."],
			["Sit out the worst of the day", "Stay under the roof through the hottest hours. If you must move, dawn and dusk cost less water than noon."],
			["Shade first, then water", "Drink if you have water. Confusion, hot dry skin, and a stop in sweating mean you stop traveling and cool down now. Do not spend that hour improving the carpentry."]
		]),
		fails: [
			"The walls are closed",
			"One dark tarp is the entire roof",
			"You lie on hot sand",
			"You build it after you are already dizzy"
		]
	},
	{
		id: "trench",
		name: "Snow trench",
		minutes: "30–50 min",
		minutesNote: "Only when the snow is already deep. Digging thin snow just soaks you.",
		bestFor: "Knee-deep snow or more, when a night outside would otherwise be all wind.",
		summary: "A slot the width of your shoulders, roofed lightly and vented. Snow is insulation once you are out of the wind. It is also how people get buried if the roof is too heavy or a fire is lit inside.",
		materials: [
			"Snow at least to your knees",
			"A way to move it: a pot, a plank, a snowshoe, your hands",
			"Poles or boughs long enough to span the slot",
			"More boughs for a bed",
			"A stick to mark the roof"
		],
		steps: steps("trench", [
			["Dig only if the snow is knee-deep or more", "If you hit ground in a few scoops, stop. Thin snow will not roof you. Build a debris hut on the surface instead."],
			["Dig a slot just wider than your shoulders", "A little longer than you are tall. Waist deep if the snow allows. Pile what you remove on the windward side as a wall. Smooth the inside so melt cannot drip from a ledge onto your chest."],
			["Roof it lightly", "Poles or boughs across the trench, then boughs, then just enough snow to stop the wind. You must be able to push the roof off if it slumps. Leave a gap so it does not rest on your chest."],
			["Keep a fist-sized vent open", "Poke it and check it after you are inside. A closed snow hole fills with air you have already breathed. No stove, no fire, no candle."],
			["Boughs under you, a mark above you", "Snow under your body is still a heat sink. A hand of boughs or a pack matters. Stick a branch upright so you, or anyone walking, can see the roof and not step through it."],
			["Crawl in from the downwind end", "The door sits below the wind, not as a wide mouth facing the gusts. Keep your hands able to clear a collapse. If the roof feels heavy or is sagging, get out and rebuild it lighter."]
		]),
		fails: [
			"You dug through shallow snow onto frozen ground",
			"The roof is heavier than you can lift",
			"There is no vent",
			"A fire or a stove is inside",
			"The roof is unmarked and gets walked on"
		]
	}
];
function shelterById(id) {
	const found = SHELTERS.find((shelter) => shelter.id === id);
	if (!found) throw new Error(`Unknown shelter: ${id}`);
	return found;
}
function threatLabel(id) {
	return THREATS.find((threat) => threat.id === id)?.label ?? id;
}
function recommend(threat, kit) {
	if (threat === "heat") return {
		id: "shade",
		why: kit.tarp ? "Heat needs shade and a cross-breeze, not a sealed room. String the tarp as a high roof with open sides, and put brush on top so the sheet does not radiate heat down onto you." : "In heat, a closed hut traps air and cooks you. Build a roof only, open on two sides, and get your body off the hot ground."
	};
	if (threat === "snow" && kit.snow) return {
		id: "trench",
		why: "Deep snow is already insulation once you are out of the wind. A body-sized trench with a light roof is faster than hunting dry leaves that are buried.",
		caution: "Do not put a fire inside, and do not roof it so heavily that you cannot push your way out."
	};
	if (threat === "snow") return {
		id: "debris",
		why: "Snow that is not deep enough to dig is just cold rain in slow motion. A small debris hut holds body heat. Brush the snow off your materials before you pile them. If it is actually knee-deep, say so above and switch to the trench."
	};
	if (threat === "cold") return {
		id: "debris",
		why: kit.tarp ? "A clear cold night is an insulation problem. Build the debris hut small, then drape the tarp over the outside as a wind skin. The tarp does not replace the leaves." : "Clear cold is not solved by a roof alone. A debris hut barely bigger than your body holds the heat you already make. Thickness and a door plug matter more than carpentry."
	};
	if (threat === "fast") {
		if (kit.tarp) return {
			id: "tarp",
			why: "You are buying minutes. A low tarp A-frame goes up before a thatched roof does. Stake it, then spend every leftover minute on a dry bed under it."
		};
		return {
			id: "leanto",
			why: "With the light almost gone, build a low lean-to, not a perfect hut. Bed first, then a roof thick enough to stop wind. Thicken it after you are out of the weather."
		};
	}
	if (threat === "wind") {
		if (kit.tarp) return {
			id: "tarp",
			why: "Wind finds every gap above your shoulders. Pitch the tarp as a low A, door turned off the gusts, edges weighted so it cannot flap itself apart."
		};
		return {
			id: "leanto",
			why: "Put the closed back into the wind and keep the ridge low, waist high rather than head high. A tall lean-to is a sail."
		};
	}
	if (kit.tarp) return {
		id: "tarp",
		why: "Cold rain steals heat the moment it soaks you. Get the tarp up low, then a thick dry bed under it. If rain is driven sideways, drop one edge to the ground on the weather side."
	};
	return {
		id: "leanto",
		why: "Without a sheet, shingle a low lean-to until you cannot see light through the roof, and keep the bed off the soil. Wet clothes plus bare ground is how a short storm becomes a cold injury."
	};
}
function kitNotes(kit, id) {
	const notes = [];
	if (!kit.blade && id !== "shade") notes.push("No blade: snap dead wood. Green wood costs strength and still thatches poorly.");
	if (!kit.cord && (id === "leanto" || id === "tarp" || id === "shade")) notes.push("No cord: seat poles in forks, or weigh the ends with rocks. A lashing is optional.");
	if (kit.tarp && (id === "debris" || id === "leanto")) notes.push("You have a sheet. Use it as the outer skin after the debris is on, not instead of it.");
	return notes;
}
var EMPTY_KIT = {
	cord: false,
	tarp: false,
	blade: false,
	snow: false
};
var LABEL = {
	leanto: "Cross-section of a low lean-to. The closed slope faces the wind. A bed sits underneath.",
	debris: "Cross-section of a debris hut. Thick walls, a small cavity, a door at the high end.",
	tarp: "End view of a low tarp A-frame. The sheet is steep and the ridge is below waist height.",
	shade: "Side view of a shade roof. Two layers with a gap, open sides, body off the ground.",
	trench: "Cross-section of a snow trench. A light roof, a vent, and a body-sized slot."
};
var CAPTION = {
	leanto: "Back to the wind. Bed off the soil. Thatch until the sky is gone.",
	debris: "Walls about as thick as your arm is long. Inside, only enough room to lie still.",
	tarp: "Knee to waist at the ridge. Every corner weighted. Bed still required.",
	shade: "Open sides. A gap between roof layers. Nothing closed.",
	trench: "Light roof you can push off. Fist-sized vent. No fire inside."
};
function ShelterDiagram({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-lg border border-line bg-paper-2 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 200",
			className: "h-auto w-full",
			role: "img",
			"aria-label": LABEL[id],
			children: [
				id === "leanto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeanTo, {}) : null,
				id === "debris" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Debris, {}) : null,
				id === "tarp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tarp, {}) : null,
				id === "shade" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shade, {}) : null,
				id === "trench" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trench, {}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: CAPTION[id]
		})]
	});
}
function Ground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M12 176h296",
		className: "text-ink",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75"
	});
}
function Body({ x, y }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "fill-pine text-pine",
		stroke: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x + 10,
			cy: y,
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M${x + 16} ${y + 2} h36 c8 0 12 6 12 12 v10 h-56 v-12 c0-6 2-10 8-10z` })]
	});
}
function LeanTo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "text-faint",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 78h28M22 94h22" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 78l8 5-8 5M44 94l8 5-8 5" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M118 176c16-20 64-20 86 0",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				x: 132,
				y: 150
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 64v112",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 64 L236 176",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M108 86 L188 176" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 110 L208 176" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150 136 L224 176" })
				]
			})
		]
	});
}
function Debris() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		strokeLinejoin: "round",
		strokeLinecap: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 176 L160 36 L284 176 Z",
				className: "fill-pine/20 text-ink",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M112 176 L160 112 L208 176 Z",
				className: "fill-paper-2 text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				x: 138,
				y: 156
			})
		]
	});
}
function Tarp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 24v152M280 24v152",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 78h240",
				className: "text-faint",
				stroke: "currentColor",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 78 L160 168 L264 78 Z",
				className: "fill-pine/20 text-pine",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 176h16M256 176h16",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				x: 136,
				y: 150
			})
		]
	});
}
function Shade() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "248",
				cy: "34",
				r: "12",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M248 14v6M268 34h6M232 18l5 5M264 18l-5 5",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 96v80M268 96v80",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 92h240",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 70h256",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 70v22M108 70v22M152 70v22M196 70v22M240 70v22",
				className: "text-faint",
				stroke: "currentColor",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M132 176c0-20 12-32 28-32s28 12 28 32",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "138",
				r: "7",
				className: "fill-pine text-pine",
				stroke: "none"
			})
		]
	});
}
function Trench() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fillRule: "evenodd",
				d: "M24 176 H296 V64 H24 Z M118 176 V108 H202 V176 Z",
				className: "fill-paper text-ink",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 104 H216",
				className: "text-ink",
				stroke: "currentColor",
				strokeWidth: "2.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M112 94 H208",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M188 94 V72",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M182 72 H196",
				className: "text-pine",
				stroke: "currentColor",
				strokeWidth: "1.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
				x: 132,
				y: 152
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var STORAGE_KEY = "bivvy.v1";
var THREAT_ICON = {
	rain: CloudRain,
	wind: Wind,
	cold: Thermometer,
	snow: Snowflake,
	heat: Sun,
	fast: Clock
};
var KIT_ICON = {
	tarp: Layers,
	cord: Link2,
	blade: PocketKnife,
	snow: Snowflake
};
function isThreat(value) {
	return THREATS.some((threat) => threat.id === value);
}
function isShelterId(value) {
	return SHELTERS.some((shelter) => shelter.id === value);
}
function loadSaved() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const data = JSON.parse(raw);
		if (!isThreat(data.threat) || !data.kit || typeof data.kit !== "object") return null;
		const kit = { ...EMPTY_KIT };
		for (const key of Object.keys(EMPTY_KIT)) kit[key] = Boolean(data.kit[key]);
		const checks = {};
		if (data.checks && typeof data.checks === "object") {
			for (const [key, value] of Object.entries(data.checks)) if (value) checks[key] = true;
		}
		return {
			threat: data.threat,
			kit,
			picked: isShelterId(data.picked) ? data.picked : null,
			checks
		};
	} catch {
		return null;
	}
}
function scrollToId(id) {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	document.getElementById(id)?.scrollIntoView({
		behavior: reduce ? "auto" : "smooth",
		block: "start"
	});
}
function Guide() {
	const [threat, setThreat] = (0, import_react.useState)("rain");
	const [kit, setKit] = (0, import_react.useState)(EMPTY_KIT);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [checks, setChecks] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = loadSaved();
		if (saved) {
			setThreat(saved.threat);
			setKit(saved.kit);
			setPicked(saved.picked);
			setChecks(saved.checks);
		}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			const payload = {
				threat,
				kit,
				picked,
				checks
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
		} catch {}
	}, [
		threat,
		kit,
		picked,
		checks,
		ready
	]);
	const rec = recommend(threat, kit);
	const activeId = picked ?? rec.id;
	const shelter = shelterById(activeId);
	const notes = kitNotes(kit, activeId);
	const doneCount = shelter.steps.filter((step) => checks[step.id]).length;
	const allDone = doneCount === shelter.steps.length;
	const matched = activeId === rec.id;
	const watch = threat === "heat" ? HEAT_WATCH : COLD_WATCH;
	const showFire = activeId === "debris" || activeId === "trench";
	function toggleKit(key) {
		setKit((current) => ({
			...current,
			[key]: !current[key]
		}));
	}
	function toggleStep(id) {
		setChecks((current) => ({
			...current,
			[id]: !current[id]
		}));
	}
	function clearSteps() {
		setChecks((current) => {
			const next = { ...current };
			for (const step of shelter.steps) delete next[step.id];
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#weather",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:bg-paper focus:px-3 focus:py-2",
				children: "Skip to the weather"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex min-h-11 items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-medium tracking-tight text-ink",
							children: "Bivvy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-sm text-faint sm:inline",
							children: "Small shelter guide"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Sections",
						className: "flex items-center text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#weather",
								className: "inline-flex min-h-11 items-center px-2 text-muted",
								children: "Weather"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#build",
								className: "inline-flex min-h-11 items-center px-2 text-muted",
								children: "Build"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#site",
								className: "inline-flex min-h-11 items-center px-2 text-muted",
								children: "Site"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 pb-28 sm:px-6 md:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pt-8 pb-6 sm:pt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-faint uppercase",
								children: "Field shelter guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-display text-ink",
								children: "Get out of the weather."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 block h-0.5 w-10 bg-pine",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg text-muted",
								children: "A small shelter from what is already on the ground. Safe site, a bed, then a roof. In that order."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "Rules that do not change",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4",
							children: RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "bg-paper p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm text-pine tabular-nums",
										children: rule.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-lg font-medium text-ink",
										children: rule.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: rule.detail
									})
								]
							}, rule.n))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "weather",
							className: "scroll-mt-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-medium text-ink",
									children: "What is hitting you"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-lg text-muted",
									children: "One choice. The match updates with it. You can open any other build further down."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									role: "radiogroup",
									"aria-label": "What the weather is doing",
									className: "mt-4 grid grid-cols-2 gap-2",
									children: THREATS.map((item) => {
										const Icon = THREAT_ICON[item.id];
										const selected = threat === item.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											role: "radio",
											"aria-checked": selected,
											onClick: () => {
												setThreat(item.id);
												setPicked(null);
											},
											className: cn("press flex min-h-11 flex-col items-start gap-1 rounded-sm border px-3 py-3 text-left", selected ? "border-pine bg-pine text-paper" : "border-line bg-paper text-ink hover:bg-paper-2"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-4",
													strokeWidth: 1.75,
													"aria-hidden": true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: item.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("text-sm", selected ? "text-paper" : "text-faint"),
													children: item.hint
												})
											]
										}, item.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-8 font-display text-2xl font-medium text-ink",
									children: "What you can use"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted",
									children: "Leave these off if you have nothing but the woods. The builds still work."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-2 gap-2",
									children: KITS.map((item) => {
										const Icon = KIT_ICON[item.id];
										const on = kit[item.id];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": on,
											onClick: () => {
												toggleKit(item.id);
												setPicked(null);
											},
											className: cn("press flex min-h-11 flex-col items-start gap-1 rounded-sm border px-3 py-3 text-left", on ? "border-pine bg-pine text-paper" : "border-line bg-paper text-ink hover:bg-paper-2"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-4",
													strokeWidth: 1.75,
													"aria-hidden": true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: item.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("text-sm", on ? "text-paper" : "text-faint"),
													children: item.hint
												})
											]
										}, item.id);
									})
								}),
								threat === "snow" && !kit.snow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: "If the snow reaches your knees, turn on deep snow. The build changes."
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "scroll-mt-20 lg:sticky lg:top-20",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-faint uppercase",
									children: "Build this"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 rounded-xl bg-pine p-5 text-paper",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-3xl font-medium text-paper",
											children: shelterById(rec.id).name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm tabular-nums text-paper",
											children: shelterById(rec.id).minutes
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-paper",
											children: rec.why
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setPicked(null);
												scrollToId("build");
											},
											className: "press mt-5 inline-flex min-h-11 items-center rounded-sm bg-paper px-4 text-sm font-medium text-pine",
											children: "Show the steps"
										})
									]
								}),
								rec.caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-warn",
										children: "Watch. "
									}), rec.caution]
								}) : null
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						"aria-label": "Order of work",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-medium text-ink",
								children: "Order of work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-muted",
								children: "Same sequence for every shelter. Do not skip the bed to finish a prettier roof."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4 grid gap-2 sm:grid-cols-4",
								children: WORK_ORDER.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-line bg-paper p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm text-pine tabular-nums",
											children: item.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-lg font-medium",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: item.detail
										})
									]
								}, item.n))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "build",
						className: "mt-12 scroll-mt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-faint uppercase",
									children: matched ? `For ${threatLabel(threat).toLowerCase()}` : "Chosen from the list"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl font-medium text-ink",
									children: shelter.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-right text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium text-ink tabular-nums",
										children: shelter.minutes
									}), shelter.minutesNote]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: shelter.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-faint",
								children: shelter.bestFor
							}),
							!matched ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setPicked(null);
									scrollToId("build");
								},
								className: "press mt-4 inline-flex min-h-11 items-center text-sm font-medium text-pine underline decoration-line underline-offset-4",
								children: [
									"Use ",
									shelterById(rec.id).name.toLowerCase(),
									" for this weather instead"
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShelterDiagram, { id: shelter.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted tabular-nums",
											children: [
												doneCount,
												" of ",
												shelter.steps.length,
												" in place"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: clearSteps,
											className: "inline-flex min-h-11 items-center text-sm text-faint underline decoration-line underline-offset-4",
											children: "Clear checks"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1 overflow-hidden rounded-sm bg-paper-2",
										role: "progressbar",
										"aria-valuemin": 0,
										"aria-valuemax": shelter.steps.length,
										"aria-valuenow": doneCount,
										"aria-label": "Steps finished",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-pine",
											style: { width: `${doneCount / shelter.steps.length * 100}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-4 flex flex-col gap-2",
										children: shelter.steps.map((step, index) => {
											const on = Boolean(checks[step.id]);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: cn("flex cursor-pointer gap-3 rounded-md border p-3", on ? "border-pine bg-paper" : "border-line bg-paper"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													className: "mt-1 size-5 shrink-0 accent-pine",
													checked: on,
													onChange: () => toggleStep(step.id)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-baseline gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-display text-sm text-pine tabular-nums",
															children: String(index + 1).padStart(2, "0")
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-ink",
															children: step.title
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 block text-sm leading-relaxed text-muted",
														children: step.detail
													})]
												})]
											}) }, step.id);
										})
									}),
									allDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm font-medium text-pine",
										children: "You are in it. Improve the bed before you improve the looks."
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-faint",
										children: "Checks stay on this device."
									})
								] })]
							}),
							notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-col gap-2",
								children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-ink",
									children: note
								}, note))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-line pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-widest text-warn uppercase",
										children: "Stop building if"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm text-ink",
										children: watch
									}),
									showFire ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-2xl text-sm text-muted",
										children: FIRE_NOTE
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-medium",
									children: "Gather"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-col gap-2",
									children: shelter.materials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 size-1 shrink-0 rounded-full bg-pine",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-medium",
									children: "It fails when"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-col gap-2",
									children: shelter.fails.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 size-1 shrink-0 rounded-full bg-warn",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						"aria-label": "Other shelters",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-medium text-ink",
								children: "The other shelters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-muted",
								children: "Open one if your situation does not match the recommendation. The steps above switch with it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-col gap-2",
								children: SHELTERS.map((item) => {
									const active = item.id === activeId;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setPicked(item.id);
											scrollToId("build");
										},
										"aria-current": active ? "true" : void 0,
										className: cn("press flex w-full min-h-11 items-center justify-between gap-4 rounded-md border px-4 py-3 text-left", active ? "border-pine bg-paper" : "border-line bg-paper hover:bg-paper-2"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium text-ink",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-sm text-muted",
											children: item.bestFor
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-sm text-faint tabular-nums",
											children: item.minutes
										})]
									}) }, item.id);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "site",
						className: "mt-12 scroll-mt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-medium text-ink",
								children: "Where to put it"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-muted",
								children: "Two minutes of walking away from the wrong ground is worth more than an hour of building on it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-6 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-line p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-medium text-warn",
										children: "Walk away from"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 flex flex-col gap-3",
										children: SITE.avoid.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-sm text-ink",
											children: item
										}, item))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-line p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-medium text-pine",
										children: "Settle on"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 flex flex-col gap-3",
										children: SITE.settle.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-sm text-ink",
											children: item
										}, item))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-sm text-muted",
								children: SIGNAL
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-12 border-t border-line pt-6 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm text-faint",
							children: "Field guidance for getting out of the weather. It is not a rescue service and not a substitute for training. Terrain, weather, and your body decide what is safe. If you are injured or truly lost, signal and stay put."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper md:hidden safe-bottom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-lg leading-tight text-ink",
							children: shelter.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted tabular-nums",
							children: shelter.minutes
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scrollToId("build"),
						className: "press inline-flex min-h-11 shrink-0 items-center rounded-sm bg-pine px-4 text-sm font-medium text-paper",
						children: "Build steps"
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guide, {});
}
//#endregion
export { Home as component };
