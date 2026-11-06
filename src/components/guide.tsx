import { useEffect, useState } from "react";
import {
  Check,
  Clock,
  CloudRain,
  Layers,
  Link2,
  PocketKnife,
  Snowflake,
  Sun,
  Thermometer,
  Wind,
  type LucideIcon,
} from "lucide-react";
import {
  AUTHOR,
  COLD_WATCH,
  EMPTY_KIT,
  FIRE_NOTE,
  FOOTER,
  GLOSSARY,
  HEAT_WATCH,
  KIDS,
  KITS,
  PERMISSION,
  RULES,
  SERIES,
  SHELTERS,
  SIGNAL,
  SITE,
  START_HERE,
  THREATS,
  VOLUME_NOTE,
  WORK_ORDER,
  kitNotes,
  recommend,
  shelterById,
  threatLabel,
  type Kit,
  type KitKey,
  type ShelterId,
  type Threat,
} from "@/data/guide";
import { ShelterDiagram } from "@/components/diagrams";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "bivvy.v1";

const THREAT_ICON: Record<Threat, LucideIcon> = {
  rain: CloudRain,
  wind: Wind,
  cold: Thermometer,
  snow: Snowflake,
  heat: Sun,
  fast: Clock,
};

const KIT_ICON: Record<KitKey, LucideIcon> = {
  tarp: Layers,
  cord: Link2,
  blade: PocketKnife,
  snow: Snowflake,
};

type Saved = {
  threat: Threat;
  kit: Kit;
  picked: ShelterId | null;
  checks: Record<string, boolean>;
};

function isThreat(value: unknown): value is Threat {
  return THREATS.some((threat) => threat.id === value);
}

function isShelterId(value: unknown): value is ShelterId {
  return SHELTERS.some((shelter) => shelter.id === value);
}

function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<Saved>;
    if (!isThreat(data.threat) || !data.kit || typeof data.kit !== "object") return null;
    const kit: Kit = { ...EMPTY_KIT };
    for (const key of Object.keys(EMPTY_KIT) as KitKey[]) {
      kit[key] = Boolean((data.kit as Kit)[key]);
    }
    const checks: Record<string, boolean> = {};
    if (data.checks && typeof data.checks === "object") {
      for (const [key, value] of Object.entries(data.checks)) {
        if (value) checks[key] = true;
      }
    }
    return {
      threat: data.threat,
      kit,
      picked: isShelterId(data.picked) ? data.picked : null,
      checks,
    };
  } catch {
    return null;
  }
}

function scrollToId(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

export function Guide() {
  const [threat, setThreat] = useState<Threat>("rain");
  const [kit, setKit] = useState<Kit>(EMPTY_KIT);
  const [picked, setPicked] = useState<ShelterId | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadSaved();
    if (saved) {
      setThreat(saved.threat);
      setKit(saved.kit);
      setPicked(saved.picked);
      setChecks(saved.checks);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const payload: Saved = { threat, kit, picked, checks };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* private mode and quota failures are non-fatal */
    }
  }, [threat, kit, picked, checks, ready]);

  const rec = recommend(threat, kit);
  const activeId = picked ?? rec.id;
  const shelter = shelterById(activeId);
  const notes = kitNotes(kit, activeId);
  const doneCount = shelter.steps.filter((step) => checks[step.id]).length;
  const allDone = doneCount === shelter.steps.length;
  const matched = activeId === rec.id;
  const watch = threat === "heat" ? HEAT_WATCH : COLD_WATCH;
  const showFire = activeId === "debris" || activeId === "trench";

  function toggleKit(key: KitKey) {
    setKit((current) => ({ ...current, [key]: !current[key] }));
  }

  function toggleStep(id: string) {
    setChecks((current) => ({ ...current, [id]: !current[id] }));
  }

  function clearSteps() {
    setChecks((current) => {
      const next = { ...current };
      for (const step of shelter.steps) delete next[step.id];
      return next;
    });
  }

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <a
        href="#weather"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to the weather
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-h-11 items-baseline gap-3">
            <span className="font-display text-xl font-medium tracking-tight text-ink">Bivvy</span>
            <span className="hidden text-sm text-faint sm:inline">Small shelter guide</span>
          </a>
          <nav aria-label="Sections" className="flex min-w-0 items-center overflow-x-auto text-sm">
            <a href="#start" className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted">
              Start
            </a>
            <a href="#weather" className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted">
              Weather
            </a>
            <a href="#build" className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted">
              Build
            </a>
            <a href="#site" className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted">
              Site
            </a>
            <a href="#glossary" className="inline-flex min-h-11 shrink-0 items-center px-2 text-muted">
              Words
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-28 sm:px-6 md:pb-16">
        <section className="pt-8 pb-6 sm:pt-12">
          <p className="text-xs font-medium tracking-widest text-faint uppercase">Field shelter guide</p>
          <h1 className="mt-3 font-display text-display text-ink">Get out of the weather.</h1>
          <p className="mt-3 text-sm font-medium text-ink">{SERIES}</p>
          <p className="text-sm text-muted">{AUTHOR}</p>
          <span className="mt-4 block h-0.5 w-10 bg-pine" aria-hidden />
          <p className="mt-4 max-w-xl text-lg text-muted">
            A small shelter from what is already on the ground. Safe site, a bed, then a roof. In that order.
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">{VOLUME_NOTE}</p>
        </section>

        <section id="start" className="scroll-mt-20">
          <h2 className="font-display text-2xl font-medium text-ink">Start here</h2>
          <p className="mt-2 text-muted">Need shelter tonight?</p>
          <ol className="mt-4 flex flex-col gap-2">
            {START_HERE.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-md border border-line px-4 py-3">
                <span className="font-display text-sm text-pine tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="Rules that do not change" className="mt-10">
          <div className="rounded-lg border border-pine bg-paper p-4">
            <p className="font-display text-sm text-pine tabular-nums">{RULES[0].n}</p>
            <h2 className="mt-2 font-display text-lg font-medium text-ink">{RULES[0].title}</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">{RULES[0].detail}</p>
          </div>
          <ol className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
            {RULES.slice(1).map((rule) => (
              <li key={rule.n} className="bg-paper p-4">
                <p className="font-display text-sm text-pine tabular-nums">{rule.n}</p>
                <h2 className="mt-2 font-display text-lg font-medium text-ink">{rule.title}</h2>
                <p className="mt-1 text-sm text-muted">{rule.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div id="weather" className="scroll-mt-20">
            <h2 className="font-display text-2xl font-medium text-ink">What is hitting you</h2>
            <p className="mt-2 max-w-lg text-muted">
              One choice. The match updates with it. You can open any other build further down.
            </p>
            <div role="radiogroup" aria-label="What the weather is doing" className="mt-4 grid grid-cols-2 gap-2">
              {THREATS.map((item) => {
                const Icon = THREAT_ICON[item.id];
                const selected = threat === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => {
                      setThreat(item.id);
                      setPicked(null);
                    }}
                    className={cn(
                      "press flex min-h-11 flex-col items-start gap-1 rounded-sm border px-3 py-3 text-left",
                      selected
                        ? "border-pine bg-pine text-paper"
                        : "border-line bg-paper text-ink hover:bg-paper-2",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    <span className="font-medium">{item.label}</span>
                    <span className={cn("text-sm", selected ? "text-paper" : "text-faint")}>{item.hint}</span>
                  </button>
                );
              })}
            </div>

            <h2 className="mt-8 font-display text-2xl font-medium text-ink">What you can use</h2>
            <p className="mt-2 text-muted">Leave these off if you have nothing but the woods. The builds still work.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {KITS.map((item) => {
                const Icon = KIT_ICON[item.id];
                const on = kit[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      toggleKit(item.id);
                      setPicked(null);
                    }}
                    className={cn(
                      "press flex min-h-11 flex-col items-start gap-1 rounded-sm border px-3 py-3 text-left",
                      on ? "border-pine bg-pine text-paper" : "border-line bg-paper text-ink hover:bg-paper-2",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    <span className="font-medium">{item.label}</span>
                    <span className={cn("text-sm", on ? "text-paper" : "text-faint")}>{item.hint}</span>
                  </button>
                );
              })}
            </div>
            {threat === "snow" && !kit.snow ? (
              <p className="mt-3 text-sm text-muted">
                If the snow reaches your knees, turn on deep snow. The build changes.
              </p>
            ) : null}
          </div>

          <aside className="scroll-mt-20 lg:sticky lg:top-20" aria-live="polite">
            <p className="text-xs font-medium tracking-widest text-faint uppercase">Build this</p>
            <div className="mt-3 rounded-xl bg-pine p-5 text-paper">
              <h2 className="font-display text-3xl font-medium text-paper">{shelterById(rec.id).name}</h2>
              <p className="mt-1 text-sm tabular-nums text-paper">{shelterById(rec.id).minutes}</p>
              <p className="mt-4 text-sm leading-relaxed text-paper">{rec.why}</p>
              <button
                type="button"
                onClick={() => {
                  setPicked(null);
                  scrollToId("build");
                }}
                className="press mt-5 inline-flex min-h-11 items-center rounded-sm bg-paper px-4 text-sm font-medium text-pine"
              >
                Show the steps
              </button>
            </div>
            {rec.caution ? (
              <p className="mt-3 text-sm text-ink">
                <span className="font-medium text-warn">Watch. </span>
                {rec.caution}
              </p>
            ) : null}
          </aside>
        </section>

        <section className="mt-12" aria-label="Order of work">
          <h2 className="font-display text-2xl font-medium text-ink">Order of work</h2>
          <p className="mt-2 max-w-xl text-muted">Same sequence for every shelter. Do not skip the bed to finish a prettier roof.</p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-4">
            {WORK_ORDER.map((item) => (
              <li key={item.n} className="rounded-md border border-line bg-paper p-4">
                <p className="font-display text-sm text-pine tabular-nums">{item.n}</p>
                <h3 className="mt-2 font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="build" className="mt-12 scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium tracking-widest text-faint uppercase">
                {matched ? `For ${threatLabel(threat).toLowerCase()}` : "Chosen from the list"}
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink">{shelter.name}</h2>
            </div>
            <p className="text-right text-sm text-muted">
              <span className="block font-medium text-ink tabular-nums">{shelter.minutes}</span>
              {shelter.minutesNote}
            </p>
          </div>
          <p className="mt-3 max-w-2xl text-muted">{shelter.summary}</p>
          <p className="mt-2 text-sm text-faint">{shelter.bestFor}</p>

          {!matched ? (
            <button
              type="button"
              onClick={() => {
                setPicked(null);
                scrollToId("build");
              }}
              className="press mt-4 inline-flex min-h-11 items-center text-sm font-medium text-pine underline decoration-line underline-offset-4"
            >
              Use {shelterById(rec.id).name.toLowerCase()} for this weather instead
            </button>
          ) : null}

          <div className="mt-6 grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <ShelterDiagram id={shelter.id} />
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-muted tabular-nums">
                  {doneCount} of {shelter.steps.length} in place
                </p>
                <button
                  type="button"
                  onClick={clearSteps}
                  className="inline-flex min-h-11 items-center text-sm text-faint underline decoration-line underline-offset-4"
                >
                  Clear checks
                </button>
              </div>
              <div
                className="mt-2 h-1 overflow-hidden rounded-sm bg-paper-2"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={shelter.steps.length}
                aria-valuenow={doneCount}
                aria-label="Steps finished"
              >
                <div
                  className="h-full bg-pine"
                  style={{ width: `${(doneCount / shelter.steps.length) * 100}%` }}
                />
              </div>
              <ol className="mt-4 flex flex-col gap-2">
                {shelter.steps.map((step, index) => {
                  const on = Boolean(checks[step.id]);
                  return (
                    <li key={step.id}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={on}
                        onClick={() => toggleStep(step.id)}
                        className={cn(
                          "press flex w-full gap-3 rounded-md border p-3 text-left",
                          on ? "border-pine bg-paper" : "border-line bg-paper",
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "mt-1 flex size-5 shrink-0 items-center justify-center rounded-sm border",
                            on ? "border-pine bg-pine text-paper" : "border-line bg-paper",
                          )}
                        >
                          {on ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-baseline gap-2">
                            <span className="font-display text-sm text-pine tabular-nums">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="font-medium text-ink">{step.title}</span>
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted">{step.detail}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
              {allDone ? (
                <p className="mt-3 text-sm font-medium text-pine">
                  You are in it. Improve the bed before you improve the looks.
                </p>
              ) : null}
              <p className="mt-2 text-xs text-faint">Checks stay on this device.</p>
            </div>
          </div>

          {notes.length > 0 ? (
            <ul className="mt-6 flex flex-col gap-2">
              {notes.map((note) => (
                <li key={note} className="text-sm text-ink">
                  {note}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 border-t border-line pt-4">
            <p className="text-xs font-medium tracking-widest text-warn uppercase">Stop building if</p>
            <p className="mt-2 max-w-2xl text-sm text-ink">{watch}</p>
            {showFire ? <p className="mt-2 max-w-2xl text-sm text-muted">{FIRE_NOTE}</p> : null}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-medium">Gather</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {shelter.materials.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-pine" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium">It fails when</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {shelter.fails.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-warn" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-label="Other shelters">
          <h2 className="font-display text-2xl font-medium text-ink">The other shelters</h2>
          <p className="mt-2 max-w-xl text-muted">
            Open one if your situation does not match the recommendation. The steps above switch with it.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {SHELTERS.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setPicked(item.id);
                      scrollToId("build");
                    }}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "press flex w-full min-h-11 items-center justify-between gap-4 rounded-md border px-4 py-3 text-left",
                      active ? "border-pine bg-paper" : "border-line bg-paper hover:bg-paper-2",
                    )}
                  >
                    <span>
                      <span className="block font-medium text-ink">{item.name}</span>
                      <span className="mt-0.5 block text-sm text-muted">{item.bestFor}</span>
                    </span>
                    <span className="shrink-0 text-sm text-faint tabular-nums">{item.minutes}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="site" className="mt-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-medium text-ink">Where to put it</h2>
          <p className="mt-2 max-w-xl text-muted">
            Two minutes of walking away from the wrong ground is worth more than an hour of building on it.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-line p-5">
              <h3 className="font-display text-lg font-medium text-warn">Walk away from</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {SITE.avoid.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-line p-5">
              <h3 className="font-display text-lg font-medium text-pine">Settle on</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {SITE.settle.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">{SIGNAL}</p>
        </section>

        <section className="mt-12" aria-label="Permission and leave no trace">
          <h2 className="font-display text-2xl font-medium text-ink">Permission and leave no trace</h2>
          <ul className="mt-4 flex flex-col gap-3 rounded-lg border border-line p-5">
            {PERMISSION.map((item) => (
              <li key={item} className="text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-label="Children and tools">
          <h2 className="font-display text-2xl font-medium text-ink">Children and tools</h2>
          <ul className="mt-4 flex flex-col gap-3 rounded-lg border border-line p-5">
            {KIDS.map((item) => (
              <li key={item} className="text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="glossary" className="mt-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-medium text-ink">Glossary</h2>
          <dl className="mt-4">
            {GLOSSARY.map((entry) => (
              <div key={entry.term} className="border-t border-line py-3">
                <dt className="font-medium text-ink">{entry.term}</dt>
                <dd className="mt-1 text-sm text-muted">{entry.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="mt-12 border-t border-line pt-6 pb-4">
          <p className="max-w-2xl text-sm text-faint">{FOOTER}</p>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper md:hidden safe-bottom">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate font-display text-lg leading-tight text-ink">{shelter.name}</p>
            <p className="text-sm text-muted tabular-nums">{shelter.minutes}</p>
          </div>
          <button
            type="button"
            onClick={() => scrollToId("build")}
            className="press inline-flex min-h-11 shrink-0 items-center rounded-sm bg-pine px-4 text-sm font-medium text-paper"
          >
            Build steps
          </button>
        </div>
      </div>
    </div>
  );
}
