"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FAVORITES, GALLERY_IMAGES, HERO_IMAGES, NEIGHBORHOOD_HIGHLIGHTS, ORDER_URL, SITE, TESTIMONIALS } from "@/lib/siteData";

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroOneY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "18%"]);
  const heroTwoY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "12%"]);
  const heroThreeY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "22%"]);
  const heroFourY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "15%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 1.08]);

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[88vh] px-4 pb-10 pt-24 md:px-6 md:pt-28 lg:min-h-screen lg:pb-12 lg:pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,235,0.28),transparent_34%),linear-gradient(180deg,rgba(29,20,16,0.2),rgba(29,20,16,0.58))]" />
          <motion.div style={{ scale: heroScale }} className="absolute inset-0">
            <motion.div style={{ y: heroOneY }} className="absolute left-[3%] top-20 hidden h-[72vh] w-[20vw] min-w-[200px] overflow-hidden rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] lg:block">
              <Image src={HERO_IMAGES[0].src} alt={HERO_IMAGES[0].alt} fill className="object-cover" priority sizes="20vw" />
            </motion.div>
            <motion.div style={{ y: heroTwoY }} className="absolute left-1/2 top-4 h-[68vh] w-[84vw] -translate-x-1/2 overflow-hidden rounded-[2.2rem] shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:top-2 md:h-[72vh] md:w-[68vw] md:rounded-[2.5rem] lg:top-0 lg:h-[84vh] lg:w-[28vw] lg:rounded-[2.8rem]">
              <Image src={HERO_IMAGES[1].src} alt={HERO_IMAGES[1].alt} fill className="object-cover" priority sizes="(min-width: 1024px) 28vw, 58vw" />
            </motion.div>
            <motion.div style={{ y: heroThreeY }} className="absolute right-[24%] top-28 hidden h-[66vh] w-[18vw] min-w-[190px] overflow-hidden rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.32)] xl:block">
              <Image src={HERO_IMAGES[2].src} alt={HERO_IMAGES[2].alt} fill className="object-cover" priority sizes="18vw" />
            </motion.div>
            <motion.div style={{ y: heroFourY }} className="absolute right-[4%] top-16 hidden h-[72vh] w-[22vw] min-w-[220px] overflow-hidden rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.32)] lg:block">
              <Image src={HERO_IMAGES[3].src} alt={HERO_IMAGES[3].alt} fill className="object-cover" priority sizes="22vw" />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,18,14,0.68),rgba(27,18,14,0.16),rgba(27,18,14,0.5))]" />
        </div>

        <div className="section-shell relative z-10 flex min-h-[74vh] items-end md:min-h-[76vh] lg:min-h-[82vh]">
          <div className="max-w-3xl pb-8 text-white md:pb-16 lg:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[0.7rem] uppercase tracking-[0.28em] text-white/75 md:text-sm md:tracking-[0.34em]"
            >
              East Village, New York City
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="mt-4 max-w-[14ch] font-display text-[2.9rem] leading-[0.95] md:mt-5 md:max-w-[12ch] md:text-6xl lg:text-[5.8rem]"
            >
              Café, Community, and Culture in the Heart of the East Village
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-xl text-base leading-7 text-white/82 md:mt-5 md:max-w-2xl md:text-lg md:leading-8 lg:mt-6 lg:text-xl"
            >
              Organic coffee, handcrafted empanadas, specialty matcha, bubble tea, and warm hospitality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-10"
            >
              <Link href="/menu" className="inline-flex min-h-14 items-center justify-center rounded-full bg-cream px-7 py-4 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 sm:w-auto">
                View Menu
              </Link>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/16 sm:w-auto"
              >
                Order Online
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl">
              <p className="section-kicker">About Café La Fe</p>
              <h2 className="section-title">A bright corner built for coffee, conversation, and staying a little longer.</h2>
              <p className="section-copy">
                Café La Fe was created to feel warm, modern, and rooted in real neighborhood hospitality. Organic drinks, handmade food, and a welcoming spirit lead the experience.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 glass-panel p-4 md:p-6 lg:mt-10">
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                {GALLERY_IMAGES.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-[1.2rem]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem] bg-olive-50">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition duration-500"
                        sizes="50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden gap-3 sm:block sm:columns-2 md:columns-3 xl:columns-4">
                {GALLERY_IMAGES.map((image, index) => (
                  <div key={image.src} className={`mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] sm:mb-4 sm:rounded-[1.7rem] ${index % 5 === 0 ? "md:mt-8" : ""}`}>
                    <div className="relative min-h-[13rem] overflow-hidden rounded-[1.5rem] bg-olive-50 sm:min-h-[14rem] sm:rounded-[1.7rem]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1200}
                        className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Popular Favorites</p>
            <h2 className="section-title">The items people come back for.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5 lg:mt-10 lg:gap-5">
            {FAVORITES.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="glass-panel texture-panel p-5 lg:p-6">
                  <div className="mb-5 flex h-28 items-end rounded-[1.4rem] border border-dashed border-olive-200 bg-[linear-gradient(135deg,rgba(218,230,219,0.55),rgba(255,255,255,0.85))] p-4 lg:mb-6 lg:h-32 lg:rounded-[1.6rem] lg:p-5">
                    <span className="text-xs uppercase tracking-[0.28em] text-olive-700">Menu Highlight</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl leading-tight sm:text-2xl">{item.name}</h3>
                      <span className="rounded-full bg-olive-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-olive-800">{item.price}</span>
                    </div>
                    <p className="text-sm leading-7 text-ink/70">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,rgba(54,88,70,0.05),rgba(54,88,70,0.12))]">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div>
              <p className="section-kicker">Community</p>
              <h2 className="section-title">A café shaped by neighbors, artists, students, and regulars.</h2>
              <p className="section-copy">
                Café La Fe is designed as a gathering place: quick morning fuel, a long conversation over matcha, a quiet seat for reflection, or a familiar hello on the block.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {NEIGHBORHOOD_HIGHLIGHTS.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 0.06}>
                <div className="glass-panel p-6 md:p-7">
                  <p className="text-lg leading-8 text-ink/75">{highlight}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Testimonials</p>
            <h2 className="section-title">Made memorable by the feeling as much as the menu.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.06}>
                <article className="glass-panel texture-panel h-full p-6 lg:p-8">
                  <p className="text-base leading-7 text-ink/78 lg:text-lg lg:leading-8">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-olive-700">{testimonial.author}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell">
          <Reveal>
            <div className="glass-panel texture-panel overflow-hidden rounded-[2rem] p-6 md:p-10 lg:rounded-[2.6rem] lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="section-kicker">Visit or Order</p>
                  <h2 className="section-title text-[2.35rem] md:text-5xl lg:text-6xl">Bring Café La Fe into your next hour, meeting, or slow downtown afternoon.</h2>
                  <p className="section-copy max-w-2xl">
                    Stop by for coffee and empanadas, place an online order, or plan catering for your next event.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream transition hover:-translate-y-0.5 lg:w-auto"
                  >
                    Order Online
                  </a>
                  <Link href="/about" className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-ink/10 bg-white/70 px-7 py-4 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 lg:w-auto">
                    Visit Us
                  </Link>
                  <p className="text-sm leading-7 text-ink/65">
                    {SITE.addressLine1}, {SITE.cityStateZip}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
