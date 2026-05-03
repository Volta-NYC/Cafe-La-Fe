"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import {
  FAVORITES,
  FEATURED_CATEGORIES,
  GALLERY_IMAGES,
  HERO_IMAGES,
  NEIGHBORHOOD_HIGHLIGHTS,
  ORDER_URL,
  SIGNATURE_DRINKS,
  SITE,
  TESTIMONIALS,
} from "@/lib/siteData";

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroOneY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "18%"]);
  const heroTwoY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "12%"]);
  const heroThreeY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "22%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 1.08]);

  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen px-4 pb-12 pt-28 md:px-6 md:pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,235,0.28),transparent_34%),linear-gradient(180deg,rgba(29,20,16,0.2),rgba(29,20,16,0.58))]" />
          <motion.div style={{ scale: heroScale }} className="absolute inset-0">
            <motion.div style={{ y: heroOneY }} className="absolute left-[3%] top-20 hidden h-[72vh] w-[22vw] min-w-[220px] overflow-hidden rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] lg:block">
              <Image src={HERO_IMAGES[0].src} alt={HERO_IMAGES[0].alt} fill className="object-cover" priority sizes="22vw" />
            </motion.div>
            <motion.div style={{ y: heroTwoY }} className="absolute left-1/2 top-0 h-[78vh] w-[58vw] -translate-x-1/2 overflow-hidden rounded-[2.8rem] shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:h-[84vh] lg:w-[32vw]">
              <Image src={HERO_IMAGES[1].src} alt={HERO_IMAGES[1].alt} fill className="object-cover" priority sizes="(min-width: 1024px) 32vw, 58vw" />
            </motion.div>
            <motion.div style={{ y: heroThreeY }} className="absolute right-[4%] top-28 hidden h-[68vh] w-[24vw] min-w-[220px] overflow-hidden rounded-[2.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.32)] lg:block">
              <Image src={HERO_IMAGES[2].src} alt={HERO_IMAGES[2].alt} fill className="object-cover" priority sizes="24vw" />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,18,14,0.68),rgba(27,18,14,0.16),rgba(27,18,14,0.5))]" />
        </div>

        <div className="section-shell relative z-10 flex min-h-[82vh] items-end">
          <div className="max-w-3xl pb-10 text-white md:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-sm uppercase tracking-[0.34em] text-white/75"
            >
              East Village, New York City
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="mt-5 font-display text-5xl leading-[0.93] md:text-7xl lg:text-[5.8rem]"
            >
              Café, Community, and Culture in the Heart of the East Village
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
            >
              Organic coffee, handcrafted empanadas, specialty matcha, bubble tea, and warm hospitality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/menu" className="rounded-full bg-cream px-7 py-4 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5">
                View Menu
              </Link>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                Order Online
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Featured Categories</p>
              <h2 className="section-title">A menu made to feel generous, joyful, and deeply shareable.</h2>
              <p className="section-copy">
                From espresso and empanadas to fruit-forward matcha and bubble tea, every category is designed to feel colorful, handcrafted, and worth coming back for.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {FEATURED_CATEGORIES.map((category, index) => (
                <div
                  key={category.title}
                  className={`glass-panel texture-panel overflow-hidden ${index === 0 ? "sm:col-span-2 xl:col-span-1" : ""}`}
                >
                  <div className="relative h-64">
                    <Image src={category.image} alt={category.title} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1280px) 18vw, (min-width: 640px) 40vw, 100vw" />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-olive-700">{category.title}</p>
                    <p className="text-base leading-7 text-ink/75">{category.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="glass-panel texture-panel p-8 md:p-10">
              <p className="section-kicker">About Café La Fe</p>
              <h2 className="section-title text-[2.75rem] md:text-5xl">Built with care, rooted in neighborhood warmth.</h2>
              <p className="section-copy max-w-xl">
                Café La Fe was created to serve more than coffee. It is a welcoming corner for fresh food, fair-trade drinks, and real hospitality shaped by Lower East Side roots and community care.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-cream transition hover:-translate-y-0.5">
                  Explore Our Story
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERY_IMAGES.slice(0, 4).map((image, index) => (
                <div key={image.src} className={`overflow-hidden rounded-[2rem] ${index === 0 ? "sm:row-span-2" : ""}`}>
                  <div className={`relative ${index === 0 ? "h-[31rem]" : "h-60"}`}>
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 640px) 30vw, 100vw" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Signature Drinks</p>
            <h2 className="section-title">Summer specialties with personality.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {SIGNATURE_DRINKS.map((drink, index) => (
              <Reveal key={drink.name} delay={index * 0.06}>
                <article className="glass-panel texture-panel overflow-hidden">
                  <div className="relative h-72">
                    <Image src={drink.image} alt={drink.name} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 18vw, 100vw" />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-3xl leading-none">{drink.name}</h3>
                    <p className="text-sm leading-7 text-ink/70">{drink.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Popular Favorites</p>
            <h2 className="section-title">The items people come back for.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {FAVORITES.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="glass-panel overflow-hidden">
                  <div className="relative h-72">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1280px) 18vw, (min-width: 768px) 42vw, 100vw" />
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl leading-tight">{item.name}</h3>
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
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.06}>
                <article className="glass-panel texture-panel h-full p-8">
                  <p className="text-lg leading-8 text-ink/78">&ldquo;{testimonial.quote}&rdquo;</p>
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
            <div className="glass-panel texture-panel overflow-hidden rounded-[2.6rem] p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="section-kicker">Visit or Order</p>
                  <h2 className="section-title text-[2.9rem] md:text-6xl">Bring Café La Fe into your next hour, meeting, or slow downtown afternoon.</h2>
                  <p className="section-copy max-w-2xl">
                    Stop by for coffee and empanadas, place an online order, or plan catering for your next event.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream transition hover:-translate-y-0.5 lg:w-auto"
                  >
                    Order Online
                  </a>
                  <Link href="/about" className="inline-flex w-full justify-center rounded-full border border-ink/10 bg-white/70 px-7 py-4 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 lg:w-auto">
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
