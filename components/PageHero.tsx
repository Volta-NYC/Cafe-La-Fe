"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  eyebrow?: string;
  ambientFloat?: boolean;
};

export function PageHero({ title, subtitle, image, alt, eyebrow, ambientFloat = false }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.08]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "12%"]);

  return (
    <section ref={ref} className="relative min-h-[58vh] overflow-hidden px-4 pt-24 md:min-h-[68vh] md:px-6 md:pt-28 lg:min-h-[82vh] lg:pt-32">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        animate={
          ambientFloat && !prefersReducedMotion
            ? { translateY: [0, -10, 0, 10, 0] }
            : undefined
        }
        transition={
          ambientFloat && !prefersReducedMotion
            ? { duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
            : undefined
        }
      >
        <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,8,0.2),rgba(15,10,8,0.62)),radial-gradient(circle_at_top,rgba(255,242,224,0.16),transparent_36%)]" />
      <div className="section-shell relative z-10 flex min-h-[52vh] items-end pb-10 md:min-h-[60vh] md:pb-14 lg:min-h-[72vh] lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-white"
        >
          {eyebrow ? <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/72 md:text-sm md:tracking-[0.34em]">{eyebrow}</p> : null}
          <h1 className="mt-3 font-display text-[2.7rem] leading-[0.96] md:mt-4 md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:mt-5 md:text-lg md:leading-8 lg:mt-6 lg:text-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
