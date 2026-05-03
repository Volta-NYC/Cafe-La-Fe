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
    <section ref={ref} className="relative min-h-[74vh] overflow-hidden px-4 pt-28 md:min-h-[82vh] md:px-6 md:pt-32">
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
      <div className="section-shell relative z-10 flex min-h-[66vh] items-end pb-14 md:min-h-[72vh] md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-white"
        >
          {eyebrow ? <p className="text-sm uppercase tracking-[0.34em] text-white/72">{eyebrow}</p> : null}
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
