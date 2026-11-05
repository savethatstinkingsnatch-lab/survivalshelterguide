export type Threat = "rain" | "wind" | "cold" | "snow" | "heat" | "fast";

export type KitKey = "cord" | "tarp" | "blade" | "snow";

export type Kit = Record<KitKey, boolean>;

export type ShelterId = "leanto" | "debris" | "tarp" | "shade" | "trench";

export type Step = {
  id: string;
  title: string;
  detail: string;
};

export type Shelter = {
  id: ShelterId;
  name: string;
  minutes: string;
  minutesNote: string;
  bestFor: string;
  summary: string;
  materials: string[];
  steps: Step[];
  fails: string[];
};

export const THREATS: { id: Threat; label: string; hint: string }[] = [
  { id: "rain", label: "Cold rain", hint: "Wet steals heat fast" },
  { id: "wind", label: "Hard wind", hint: "Keep the ridge low" },
  { id: "cold", label: "Clear cold", hint: "You need insulation" },
  { id: "snow", label: "Snow", hint: "Depth changes the build" },
  { id: "heat", label: "Heat", hint: "Shade and moving air" },
  { id: "fast", label: "Almost dark", hint: "Fastest cover that works" },
];

export const KITS: { id: KitKey; label: string; hint: string }[] = [
  { id: "tarp", label: "Tarp or poncho", hint: "A sheet, bags, a blanket" },
  { id: "cord", label: "Cord", hint: "Line, laces, or strips" },
  { id: "blade", label: "Knife or saw", hint: "Useful, not required" },
  { id: "snow", label: "Deep snow", hint: "Knee-deep or more" },
];

export const WORK_ORDER: { n: string; title: string; detail: string }[] = [
  { n: "01", title: "Site", detail: "Walk off bad ground before you touch a branch." },
  { n: "02", title: "Bed", detail: "Get off the soil, even if the roof is not finished." },
  { n: "03", title: "Roof", detail: "Block rain and wind. Low beats tall." },
  { n: "04", title: "Close", detail: "Shut drafts. Leave yourself air to breathe." },
];

export const RULES: { n: string; title: string; detail: string }[] = [
  { n: "01", title: "Off the ground", detail: "Soil pulls heat out of you even when the air feels mild." },
  { n: "02", title: "Out of the wind", detail: "A low back into the weather beats a tall roof." },
  { n: "03", title: "Not in a wash", detail: "Dry creek beds fill while you are asleep." },
  { n: "04", title: "Small enough to heat", detail: "A hut you can sit up in will stay cold." },
];

export const COLD_WATCH =
  "If you are shivering hard, slurring, or fumbling simple tasks, stop improving the roof. Get the driest layer you have against your skin, get on the bed, and block the wind. A finished frame does not warm you. Being inside it does.";

export const HEAT_WATCH =
  "If you stop sweating, feel confused, or feel sick, you are past the point of a nicer roof. Get into shade, off the hot ground, and rest. Wetting your skin only helps when you can spare the water and you are already in the shade.";

export const FIRE_NOTE =
  "Do not delay the shelter to start a fire. Do not light one inside a debris hut or a snow trench. Smoke, melt, and collapse turn a shelter into a trap.";

const AVOID = [
  "Dry washes, creek beds, and the bottom of a narrow gully. Water arrives faster than you can climb.",
  "Anything overhead that can fall: dead limbs, a leaning snag, a trunk with a fresh crack.",
  "The crown of a ridge in wind, and a valley floor on a still cold night. Cold air pools in the low spots.",
  "Game trails, dens, nests, and ground covered in droppings.",
  "Loose rock above you, or a snow slope that could slide.",
];

const SETTLE = [
  "A slight rise, so water drains past the bed instead of through it.",
  "The lee of something solid, with the door turned out of the wind.",
  "A short walk from dead wood and a deep pile of leaves. Hauling them is how you get cold.",
  "Morning sun if you are cold. Solid shade if you are hot.",
  "Far enough from a river that a rise will not reach you, close enough that you can find it again in daylight.",
];

export const SITE = { avoid: AVOID, settle: SETTLE };

export const SIGNAL =
  "If you are lost, this shelter is for the night, not a reason to keep walking. Three of anything is a distress pattern: whistle blasts, bright piles, smokes. Leave a bright scrap where it can be seen from above, and stay with the shelter if someone may already be looking.";

function steps(
  shelter: ShelterId,
  rows: [string, string][],
): Step[] {
  return rows.map(([title, detail], index) => ({
    id: `${shelter}-${index + 1}`,
    title,
    detail,
  }));
}

export const SHELTERS: Shelter[] = [
  {
    id: "leanto",
    name: "Low lean-to",
    minutes: "25–45 min",
    minutesNote: "One person, materials close by. Cold hands take longer.",
    bestFor: "Rain or wind from one direction, or when the light is almost gone.",
    summary:
      "A single slope with its back to the weather. It is a windbreak and a roof, not a room. The bed under it matters as much as the thatch.",
    materials: [
      "A ridge pole a little longer than you are",
      "Two supports: trees, forks, stumps, or rocks",
      "Ribs, about a hand-width apart",
      "Boughs, bark, ferns, or a deep pile of leaves",
      "The driest of that pile, saved for the bed",
    ],
    steps: steps("leanto", [
      [
        "Face the closed side into the weather",
        "The open side looks away from rain and wind. The ground under you should tilt so water runs off, not in. If gusts wrap around, you will close the sides last.",
      ],
      [
        "Set the ridge no higher than your waist",
        "A chest-high lean-to looks roomy and lets the weather in. Waist high, lower if the wind is hard. Rest a straight pole in two forks, or on a rock and a stump.",
      ],
      [
        "Lay ribs on the weather side only",
        "A hand-width apart, from the ridge down to the ground. Aim for a slope near 45 degrees, steeper if the rain is heavy, so water runs off instead of sitting.",
      ],
      [
        "Thatch from the bottom up",
        "Boughs, then bark, ferns, and leaf litter. Start at the ground and work toward the ridge so each layer overlaps the one below, like shingles. Tips point downhill. Stop when you cannot see daylight through the roof. A hand-span thick for rain. Closer to a forearm if the night is cold.",
      ],
      [
        "Build the bed before you sit down",
        "Dry leaves, grass, or boughs under your whole body, at least a hand deep, better a forearm. Bare ground pulls heat out of you faster than cold air does. Damp debris still beats dirt.",
      ],
      [
        "Scrape a drip trench",
        "Just outside where water falls off the roof, scrape a shallow groove that leads downhill. Without it, runoff creeps back under the bed.",
      ],
      [
        "Shut the sides, keep a way in",
        "Pile brush on the upwind corners so gusts cannot curl in. Leave a door on the lee side. A pack can be the door.",
      ],
    ]),
    fails: [
      "You can still see sky through the roof",
      "The ridge is at head height",
      "The open side points at the rain",
      "You sleep on bare dirt",
      "You built it in a drainage",
    ],
  },
  {
    id: "debris",
    name: "Debris hut",
    minutes: "60–120 min",
    minutesNote: "Most of the time is hauling leaves, not cutting wood.",
    bestFor: "A clear cold night, or any night you have to sleep and stay warm.",
    summary:
      "A sleeping bag made of sticks and leaves. Your body is the furnace. The hut only works if it is barely bigger than you and the walls are absurdly thick.",
    materials: [
      "A ridge pole a little longer than your body",
      "One support at the high end: stump, rock, or forked stick",
      "Ribs for both sides, set close together",
      "A pile of dry debris you can barely see over",
      "A separate armful for the door plug",
    ],
    steps: steps("debris", [
      [
        "Build where the debris already is",
        "You will use more leaves than you can carry far. Pick a safe site within a short walk of dry leaves, needles, or grass. Brush snow off the pile before you use it.",
      ],
      [
        "Set a ridge just longer than you",
        "One end on the ground. The other on a stump, rock, or forked stick about hip high. Lie beside it. You should fit underneath without sitting up, with a little space past your feet.",
      ],
      [
        "Rib both sides and leave a door",
        "Space the ribs so leaves cannot pour through. The opening is at the high end, just wide enough to crawl in. This is not a tent you can kneel in.",
      ],
      [
        "Pile debris an arm’s length thick",
        "Leaves, needles, ferns, grass, bark. Pat it down, then add more. If you can still see the ribs, you are not done. Walk on the pile so it settles, then top it up. Rain and wind both get through a neat, thin layer.",
      ],
      [
        "Keep the inside coffin-small",
        "If you can turn around easily, the hut is too big and your body will not heat it. You should be able to lie still. You should not be able to sit up and hold a conversation.",
      ],
      [
        "Fill the floor, then plug the door",
        "The driest material goes under you, wrist-deep, wall to wall. Stuff a separate bundle as a door plug you pull in behind your back. Do not seal your face into it.",
      ],
      [
        "Leave a fist-sized vent",
        "Near your head, clear of the door plug, so you are not breathing a sealed box. Keep it open. No fire inside.",
      ],
    ]),
    fails: [
      "The cavity is big enough to sit up in",
      "You can still see the ribs through the walls",
      "Wet leaves are against your skin and nothing dry is under you",
      "The door is sealed and there is no vent",
      "Someone lights a fire inside",
    ],
  },
  {
    id: "tarp",
    name: "Tarp A-frame",
    minutes: "10–20 min",
    minutesNote: "Pitch first. Spend every leftover minute on the bed.",
    bestFor: "Rain, wind, or failing light, when you already have a sheet.",
    summary:
      "The fastest real roof. Pitch it low. A tarp stops wind and rain. It does not insulate you from the ground or from a cold night on its own.",
    materials: [
      "A tarp, poncho, or heavy bags split and overlapped",
      "A ridgeline: cord, a vine, or knotted laces",
      "Two anchors, trees or a propped pole",
      "Rocks or stakes for every corner",
      "Leaves, boughs, or a pack for the bed",
    ],
    steps: steps("tarp", [
      [
        "String the ridge at knee to waist height",
        "Between two trees, or a tree and a propped pole. Lower holds heat and sheds wind. Go higher only in heat, and that is a different shelter.",
      ],
      [
        "Drape the sheet into a steep A",
        "Equal panels both sides. Pull the edges out and down so rain runs off. A sagging belly collects water and then dumps it on you.",
      ],
      [
        "Fix every corner",
        "Tie, stake, or bury a rock in a bunched corner. The shelter fails when one gust turns it into a flag. If the wind has a direction, drop the weather edge all the way to the ground.",
      ],
      [
        "Turn the door off the wind",
        "Not a little. A quarter-turn if gusts wrap. Enter from the end of the A instead of the open side when the wind is shifty.",
      ],
      [
        "Put a bed down before you rest",
        "A tarp does not insulate you from the soil. Leaves, boughs, a pack, or spare clothing under your hips and shoulders.",
      ],
      [
        "If the night is cold, add debris",
        "Stuff the inside with leaves or build a thick wall on the weather side. A sheet stops wind. It does not replace insulation. Do not wrap yourself tight in a crinkling emergency blanket with no air.",
      ],
    ]),
    fails: [
      "The ridge is head-high in a wind",
      "The middle sags and holds a pool",
      "A corner is loose",
      "There is no bed under you",
      "A space blanket is doing the job of a sleeping bag",
    ],
  },
  {
    id: "shade",
    name: "Shade roof",
    minutes: "15–30 min",
    minutesNote: "Build it before the hottest hour, not after you are dizzy.",
    bestFor: "Sun and heat. Not for cold, rain, or a night that will drop.",
    summary:
      "A roof and a breeze. Closed walls are the hazard here. You want shade, a gap in the roof, and your body off ground that has been baking all day.",
    materials: [
      "Poles, or low trees that can carry a flat roof",
      "Brush for two layers, and a tarp if you have one",
      "Something to lie on: boughs, a pack, clothing",
      "Open ground so air can cross under the roof",
    ],
    steps: steps("shade", [
      [
        "Do not close the walls",
        "Trapped air cooks you. Leave at least two sides open so a breeze can cross your body. This is a roof, not a hut.",
      ],
      [
        "Put a gap in the roof",
        "Brush over a tarp, or two layers of brush with air between them. A single dark sheet in full sun becomes a radiator. The outer layer takes the sun. The inner layer should not touch it.",
      ],
      [
        "Get off sand and rock",
        "Ground that has been in the sun is an oven. Boughs, a pack, clothing, anything that puts a gap under your torso.",
      ],
      [
        "Sit out the worst of the day",
        "Stay under the roof through the hottest hours. If you must move, dawn and dusk cost less water than noon.",
      ],
      [
        "Shade first, then water",
        "Drink if you have water. Confusion, hot dry skin, and a stop in sweating mean you stop traveling and cool down now. Do not spend that hour improving the carpentry.",
      ],
    ]),
    fails: [
      "The walls are closed",
      "One dark tarp is the entire roof",
      "You lie on hot sand",
      "You build it after you are already dizzy",
    ],
  },
  {
    id: "trench",
    name: "Snow trench",
    minutes: "30–50 min",
    minutesNote: "Only when the snow is already deep. Digging thin snow just soaks you.",
    bestFor: "Knee-deep snow or more, when a night outside would otherwise be all wind.",
    summary:
      "A slot the width of your shoulders, roofed lightly and vented. Snow is insulation once you are out of the wind. It is also how people get buried if the roof is too heavy or a fire is lit inside.",
    materials: [
      "Snow at least to your knees",
      "A way to move it: a pot, a plank, a snowshoe, your hands",
      "Poles or boughs long enough to span the slot",
      "More boughs for a bed",
      "A stick to mark the roof",
    ],
    steps: steps("trench", [
      [
        "Dig only if the snow is knee-deep or more",
        "If you hit ground in a few scoops, stop. Thin snow will not roof you. Build a debris hut on the surface instead.",
      ],
      [
        "Dig a slot just wider than your shoulders",
        "A little longer than you are tall. Waist deep if the snow allows. Pile what you remove on the windward side as a wall. Smooth the inside so melt cannot drip from a ledge onto your chest.",
      ],
      [
        "Roof it lightly",
        "Poles or boughs across the trench, then boughs, then just enough snow to stop the wind. You must be able to push the roof off if it slumps. Leave a gap so it does not rest on your chest.",
      ],
      [
        "Keep a fist-sized vent open",
        "Poke it and check it after you are inside. A closed snow hole fills with air you have already breathed. No stove, no fire, no candle.",
      ],
      [
        "Boughs under you, a mark above you",
        "Snow under your body is still a heat sink. A hand of boughs or a pack matters. Stick a branch upright so you, or anyone walking, can see the roof and not step through it.",
      ],
      [
        "Crawl in from the downwind end",
        "The door sits below the wind, not as a wide mouth facing the gusts. Keep your hands able to clear a collapse. If the roof feels heavy or is sagging, get out and rebuild it lighter.",
      ],
    ]),
    fails: [
      "You dug through shallow snow onto frozen ground",
      "The roof is heavier than you can lift",
      "There is no vent",
      "A fire or a stove is inside",
      "The roof is unmarked and gets walked on",
    ],
  },
];

export function shelterById(id: ShelterId): Shelter {
  const found = SHELTERS.find((shelter) => shelter.id === id);
  if (!found) throw new Error(`Unknown shelter: ${id}`);
  return found;
}

export function threatLabel(id: Threat): string {
  return THREATS.find((threat) => threat.id === id)?.label ?? id;
}

export type Recommendation = {
  id: ShelterId;
  why: string;
  caution?: string;
};

export function recommend(threat: Threat, kit: Kit): Recommendation {
  if (threat === "heat") {
    return {
      id: "shade",
      why: kit.tarp
        ? "Heat needs shade and a cross-breeze, not a sealed room. String the tarp as a high roof with open sides, and put brush on top so the sheet does not radiate heat down onto you."
        : "In heat, a closed hut traps air and cooks you. Build a roof only, open on two sides, and get your body off the hot ground.",
    };
  }

  if (threat === "snow" && kit.snow) {
    return {
      id: "trench",
      why: "Deep snow is already insulation once you are out of the wind. A body-sized trench with a light roof is faster than hunting dry leaves that are buried.",
      caution:
        "Do not put a fire inside, and do not roof it so heavily that you cannot push your way out.",
    };
  }

  if (threat === "snow") {
    return {
      id: "debris",
      why: "Snow that is not deep enough to dig is just cold rain in slow motion. A small debris hut holds body heat. Brush the snow off your materials before you pile them. If it is actually knee-deep, say so above and switch to the trench.",
    };
  }

  if (threat === "cold") {
    return {
      id: "debris",
      why: kit.tarp
        ? "A clear cold night is an insulation problem. Build the debris hut small, then drape the tarp over the outside as a wind skin. The tarp does not replace the leaves."
        : "Clear cold is not solved by a roof alone. A debris hut barely bigger than your body holds the heat you already make. Thickness and a door plug matter more than carpentry.",
    };
  }

  if (threat === "fast") {
    if (kit.tarp) {
      return {
        id: "tarp",
        why: "You are buying minutes. A low tarp A-frame goes up before a thatched roof does. Stake it, then spend every leftover minute on a dry bed under it.",
      };
    }
    return {
      id: "leanto",
      why: "With the light almost gone, build a low lean-to, not a perfect hut. Bed first, then a roof thick enough to stop wind. Thicken it after you are out of the weather.",
    };
  }

  if (threat === "wind") {
    if (kit.tarp) {
      return {
        id: "tarp",
        why: "Wind finds every gap above your shoulders. Pitch the tarp as a low A, door turned off the gusts, edges weighted so it cannot flap itself apart.",
      };
    }
    return {
      id: "leanto",
      why: "Put the closed back into the wind and keep the ridge low, waist high rather than head high. A tall lean-to is a sail.",
    };
  }

  if (kit.tarp) {
    return {
      id: "tarp",
      why: "Cold rain steals heat the moment it soaks you. Get the tarp up low, then a thick dry bed under it. If rain is driven sideways, drop one edge to the ground on the weather side.",
    };
  }

  return {
    id: "leanto",
    why: "Without a sheet, shingle a low lean-to until you cannot see light through the roof, and keep the bed off the soil. Wet clothes plus bare ground is how a short storm becomes a cold injury.",
  };
}

export function kitNotes(kit: Kit, id: ShelterId): string[] {
  const notes: string[] = [];
  if (!kit.blade && id !== "shade") {
    notes.push("No blade: snap dead wood. Green wood costs strength and still thatches poorly.");
  }
  if (!kit.cord && (id === "leanto" || id === "tarp" || id === "shade")) {
    notes.push("No cord: seat poles in forks, or weigh the ends with rocks. A lashing is optional.");
  }
  if (kit.tarp && (id === "debris" || id === "leanto")) {
    notes.push("You have a sheet. Use it as the outer skin after the debris is on, not instead of it.");
  }
  return notes;
}

export const EMPTY_KIT: Kit = {
  cord: false,
  tarp: false,
  blade: false,
  snow: false,
};
