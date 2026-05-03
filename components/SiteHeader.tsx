"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_ITEMS, ORDER_URL, SITE } from "@/lib/siteData";

export default function SiteHeader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const solid = isScrolled || !isHome || isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <motion.div
        initial={prefersReducedMotion ? false : { y: -14, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6",
          solid
            ? "border-white/70 bg-cream/92 shadow-[0_20px_70px_rgba(42,24,16,0.14)] backdrop-blur-xl"
            : "border-white/20 bg-[rgba(23,18,16,0.56)] shadow-[0_14px_45px_rgba(0,0,0,0.18)] backdrop-blur-md",
        ].join(" ")}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f4034,#8f6d3a)] text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_10px_24px_rgba(31,64,52,0.35)]">
            LF
          </span>
          <div className="hidden sm:block">
            <p className={`font-display text-xl leading-none ${solid ? "text-ink" : "text-white"}`}>{SITE.name}</p>
            <p className={`text-[0.63rem] uppercase tracking-[0.32em] ${solid ? "text-olive-700" : "text-white/72"}`}>
              {SITE.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm tracking-[0.14em] transition duration-300",
                  solid ? "text-ink/78 hover:bg-olive-100 hover:text-ink" : "text-white/84 hover:bg-white/10 hover:text-white",
                  active
                    ? solid
                      ? "bg-olive-100 text-ink shadow-[inset_0_0_0_1px_rgba(74,107,88,0.12)]"
                      : "bg-white/14 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]"
                    : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.18em] shadow-[0_14px_30px_rgba(42,24,16,0.14)] transition duration-300 hover:-translate-y-0.5 ${
              solid ? "bg-ink text-cream hover:bg-olive-900" : "bg-cream text-ink hover:bg-white"
            }`}
          >
            Order Online
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className={[
            "inline-flex h-12 w-12 items-center justify-center rounded-full border md:hidden",
            solid ? "border-olive-200 bg-white text-ink" : "border-white/25 bg-white/10 text-white",
          ].join(" ")}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/70 bg-cream/95 p-4 shadow-[0_24px_80px_rgba(42,24,16,0.16)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {NAV_ITEMS.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={item.href}
                      className={[
                        "block rounded-2xl px-5 py-4 text-sm uppercase tracking-[0.18em] transition",
                        active ? "bg-olive-100 text-ink" : "text-ink/80 hover:bg-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-14 justify-center rounded-2xl bg-ink px-5 py-4 text-sm uppercase tracking-[0.18em] text-cream shadow-[0_18px_34px_rgba(42,24,16,0.16)]"
              >
                Order Online
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
