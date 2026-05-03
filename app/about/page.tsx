import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ABOUT_STORY, HOURS, LOCATION_HIGHLIGHTS, ORDER_URL, SITE } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-32">
      <section className="section-padding pb-14">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">About & Location</p>
              <h1 className="section-title">A vibrant café rooted in East Village hospitality.</h1>
              <p className="section-copy">
                Warm coffeehouse energy, Latin flavor, and neighborhood care come together at one small-but-memorable corner on East 1st Street.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel texture-panel flex min-h-[24rem] flex-col justify-between rounded-[2.2rem] p-8 md:min-h-[30rem] md:p-10">
              <div>
                <p className="section-kicker">Neighborhood Feel</p>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Lower East Side roots, East Village energy, and a café that feels open to everyone.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-dashed border-olive-200 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Warm Hospitality</p>
                  <p className="mt-3 text-base leading-8 text-ink/72">Thoughtful service and a comfortable pace for quick stops or longer afternoons.</p>
                </div>
                <div className="rounded-[1.6rem] border border-dashed border-olive-200 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Fresh Daily Menu</p>
                  <p className="mt-3 text-base leading-8 text-ink/72">Empanadas, drinks, pastries, and café staples made to feel familiar and special.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <div className="glass-panel texture-panel p-8 md:p-10">
              <p className="section-kicker">Our Story</p>
              <div className="mt-6 space-y-5 text-lg leading-9 text-ink/76">
                {ABOUT_STORY.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel p-8 md:p-10">
              <p className="section-kicker">East Village Highlights</p>
              <div className="mt-6 space-y-4">
                {LOCATION_HIGHLIGHTS.map((highlight) => (
                  <div key={highlight} className="rounded-[1.4rem] bg-olive-50 p-5 text-base leading-8 text-ink/74">
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-cream"
                >
                  Order Online
                </a>
                <Link href="/contact" className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white/55">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <Reveal>
            <div className="glass-panel overflow-hidden">
              <div className="p-8 md:p-10">
                <p className="section-kicker">Visit Café La Fe</p>
                <h2 className="section-title text-[2.8rem] md:text-5xl">70 E 1st St</h2>
                <p className="mt-2 text-lg text-ink/72">{SITE.cityStateZip}</p>
                <div className="mt-8 grid gap-3">
                  {HOURS.map((entry, index) => (
                    <Reveal key={entry.label} delay={index * 0.05}>
                      <div className="flex items-center justify-between rounded-[1.3rem] bg-olive-50 px-5 py-4">
                        <span className="text-sm uppercase tracking-[0.18em] text-olive-700">{entry.label}</span>
                        <span className="text-sm text-ink/75">{entry.value}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-cream"
                  >
                    Get Directions
                  </a>
                  <a href={SITE.phoneHref} className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink">
                    Call the Café
                  </a>
                </div>
              </div>
              <div className="h-[24rem]">
                <iframe
                  title="Map to Café La Fe"
                  src="https://www.google.com/maps?q=70+E+1st+St,+New+York,+NY+10003&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel p-8 md:p-10">
              <p className="section-kicker">What You’ll Find</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.5rem] border border-dashed border-olive-200 bg-[linear-gradient(135deg,rgba(218,230,219,0.55),rgba(255,255,255,0.9))] p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-olive-700">Organic Coffee & Matcha</p>
                  <p className="mt-3 text-base leading-8 text-ink/72">Balanced espresso drinks, premium matcha, and tea-based creations with a modern café feel.</p>
                </div>
                <div className="rounded-[1.5rem] border border-dashed border-olive-200 bg-[linear-gradient(135deg,rgba(218,230,219,0.55),rgba(255,255,255,0.9))] p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-olive-700">Savory & Sweet Favorites</p>
                  <p className="mt-3 text-base leading-8 text-ink/72">Handcrafted empanadas, pastries, juices, and treats designed to feel generous and comforting.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
