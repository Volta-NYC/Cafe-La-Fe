import Link from "next/link";
import { HOURS, NAV_ITEMS, ORDER_URL, SITE } from "@/lib/siteData";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-olive-100 bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#365846,#b58f54)] text-xs font-semibold uppercase tracking-[0.28em] text-white">
              LF
            </span>
            <div>
              <p className="font-display text-3xl leading-none">{SITE.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-cream/60">{SITE.tagline}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-cream/72">
            A warm East Village café for organic coffee, handcrafted empanadas, vibrant bubble teas, and neighborhood hospitality.
          </p>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-cream px-5 py-3 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5"
          >
            Order Online
          </a>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.22em] text-cream/60">Navigation</h2>
          <div className="flex flex-col gap-3 text-sm text-cream/82">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.22em] text-cream/60">Visit</h2>
          <div className="space-y-3 text-sm leading-7 text-cream/82">
            <p>
              {SITE.addressLine1}
              <br />
              {SITE.cityStateZip}
            </p>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex transition hover:text-white">
              Get Directions
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.22em] text-cream/60">Hours</h2>
          <div className="space-y-2 text-sm text-cream/82">
            {HOURS.map((entry) => (
              <div key={entry.label} className="flex items-center justify-between gap-5">
                <span>{entry.label}</span>
                <span>{entry.value}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-white/35 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.3 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
              </svg>
            </a>
            <a
              href={SITE.phoneHref}
              aria-label="Call Café La Fe"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-white/35 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20a1 1 0 0 1-1 1C10.9 21 3 13.1 3 3.8a1 1 0 0 1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-1.7 1.6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
