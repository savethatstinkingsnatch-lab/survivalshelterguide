import type { ShelterId } from "@/data/guide";

const LABEL: Record<ShelterId, string> = {
  leanto: "Cross-section of a low lean-to. The closed slope faces the wind. A bed sits underneath.",
  debris: "Cross-section of a debris hut. Thick walls, a small cavity, a door at the high end.",
  tarp: "End view of a low tarp A-frame. The sheet is steep and the ridge is below waist height.",
  shade: "Side view of a shade roof. Two layers with a gap, open sides, body off the ground.",
  trench: "Cross-section of a snow trench. A light roof, a vent, and a body-sized slot.",
};

const CAPTION: Record<ShelterId, string> = {
  leanto: "Back to the wind. Bed off the soil. Thatch until the sky is gone.",
  debris: "Walls about as thick as your arm is long. Inside, only enough room to lie still.",
  tarp: "Knee to waist at the ridge. Every corner weighted. Bed still required.",
  shade: "Open sides. A gap between roof layers. Nothing closed.",
  trench: "Light roof you can push off. Fist-sized vent. No fire inside.",
};

export function ShelterDiagram({ id }: { id: ShelterId }) {
  return (
    <figure className="rounded-lg border border-line bg-paper-2 p-4">
      <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label={LABEL[id]}>
        {id === "leanto" ? <LeanTo /> : null}
        {id === "debris" ? <Debris /> : null}
        {id === "tarp" ? <Tarp /> : null}
        {id === "shade" ? <Shade /> : null}
        {id === "trench" ? <Trench /> : null}
      </svg>
      <figcaption className="mt-3 text-sm text-muted">{CAPTION[id]}</figcaption>
    </figure>
  );
}

function Ground() {
  return <path d="M12 176h296" className="text-ink" fill="none" stroke="currentColor" strokeWidth="1.75" />;
}

function Body({ x, y }: { x: number; y: number }) {
  return (
    <g className="fill-pine text-pine" stroke="none">
      <circle cx={x + 10} cy={y} r="7" />
      <path d={`M${x + 16} ${y + 2} h36 c8 0 12 6 12 12 v10 h-56 v-12 c0-6 2-10 8-10z`} />
    </g>
  );
}

function LeanTo() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g className="text-faint" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 78h28M22 94h22" />
        <path d="M50 78l8 5-8 5M44 94l8 5-8 5" />
      </g>
      <Ground />
      <path d="M118 176c16-20 64-20 86 0" className="text-pine" stroke="currentColor" strokeWidth="1.75" />
      <Body x={132} y={150} />
      <path d="M92 64v112" className="text-ink" stroke="currentColor" strokeWidth="2.25" />
      <path d="M84 64 L236 176" className="text-ink" stroke="currentColor" strokeWidth="2.25" />
      <g className="text-pine" stroke="currentColor" strokeWidth="1.5">
        <path d="M108 86 L188 176" />
        <path d="M128 110 L208 176" />
        <path d="M150 136 L224 176" />
      </g>
    </g>
  );
}

function Debris() {
  return (
    <g fill="none" strokeLinejoin="round" strokeLinecap="round">
      <path
        d="M36 176 L160 36 L284 176 Z"
        className="fill-pine/20 text-ink"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M112 176 L160 112 L208 176 Z"
        className="fill-paper-2 text-pine"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <Ground />
      <Body x={138} y={156} />
    </g>
  );
}

function Tarp() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 24v152M280 24v152" className="text-ink" stroke="currentColor" strokeWidth="2.25" />
      <path d="M40 78h240" className="text-faint" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M56 78 L160 168 L264 78 Z"
        className="fill-pine/20 text-pine"
        stroke="currentColor"
        strokeWidth="2"
      />
      <Ground />
      <path d="M48 176h16M256 176h16" className="text-ink" stroke="currentColor" strokeWidth="2" />
      <Body x={136} y={150} />
    </g>
  );
}

function Shade() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="248" cy="34" r="12" className="text-pine" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M248 14v6M268 34h6M232 18l5 5M264 18l-5 5"
        className="text-pine"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M52 96v80M268 96v80" className="text-ink" stroke="currentColor" strokeWidth="2.25" />
      <path d="M40 92h240" className="text-ink" stroke="currentColor" strokeWidth="2" />
      <path d="M32 70h256" className="text-pine" stroke="currentColor" strokeWidth="2" />
      <path
        d="M64 70v22M108 70v22M152 70v22M196 70v22M240 70v22"
        className="text-faint"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <Ground />
      <path d="M132 176c0-20 12-32 28-32s28 12 28 32" className="text-pine" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="160" cy="138" r="7" className="fill-pine text-pine" stroke="none" />
    </g>
  );
}

function Trench() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        fillRule="evenodd"
        d="M24 176 H296 V64 H24 Z M118 176 V108 H202 V176 Z"
        className="fill-paper text-ink"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M104 104 H216" className="text-ink" stroke="currentColor" strokeWidth="2.25" />
      <path d="M112 94 H208" className="text-pine" stroke="currentColor" strokeWidth="2" />
      <path d="M188 94 V72" className="text-pine" stroke="currentColor" strokeWidth="1.75" />
      <path d="M182 72 H196" className="text-pine" stroke="currentColor" strokeWidth="1.75" />
      <Body x={132} y={152} />
      <Ground />
    </g>
  );
}
