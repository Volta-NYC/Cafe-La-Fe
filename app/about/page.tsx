import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ABOUT_STORY, GALLERY_IMAGES, HERO_IMAGES, HOURS, LOCATION_HIGHLIGHTS, ORDER_URL, SITE } from "@/lib/siteData";

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
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-[24rem] overflow-hidden rounded-[2.2rem] sm:row-span-2 sm:h-[34rem]">
                <Image src={HERO_IMAGES[2].src} alt={HERO_IMAGES[2].alt} fill className="object-cover" sizes="(min-width: 640px) 32vw, 100vw" />
              </div>
              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image src={GALLERY_IMAGES[14].src} alt={GALLERY_IMAGES[14].alt} fill className="object-cover" sizes="(min-width: 640px) 22vw, 100vw" />
              </div>
              <div className="relative h-56 overflow-hidden rounded-[2rem]">
                <Image src={GALLERY_IMAGES[15].src} alt={GALLERY_IMAGES[15].alt} fill className="object-cover" sizes="(min-width: 640px) 22vw, 100vw" />
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
            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.slice(4, 10).map((image, index) => (
                <div key={image.src} className={`relative overflow-hidden rounded-[1.8rem] ${index === 1 ? "sm:row-span-2 sm:h-[31rem]" : "h-60"}`}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 640px) 25vw, 100vw" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
