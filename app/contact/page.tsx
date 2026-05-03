"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GALLERY_IMAGES, HOURS, SITE } from "@/lib/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) nextErrors.name = "Please add your name.";
    if (!email.trim()) nextErrors.email = "Please add your email.";
    if (!message.trim()) nextErrors.message = "Please include a note.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Visit Us in the Heart of the East Village"
        subtitle="Stop in for coffee and empanadas, ask about catering, or send us a note about your next visit."
        image="/hero8.jpg"
        alt="Café La Fe contact hero"
      />

      <section className="section-padding pb-14">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Plan a visit, ask a question, or say hello.</h2>
            <p className="section-copy">
              Reach out for catering, collaborations, neighborhood events, or a simple question about the menu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="glass-panel p-8 md:p-10">
                <p className="section-kicker">Contact Info</p>
                <div className="mt-6 space-y-5 text-base leading-8 text-ink/75">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Address</p>
                    <p className="mt-2">
                      {SITE.addressLine1}
                      <br />
                      {SITE.cityStateZip}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Phone</p>
                    <a href={SITE.phoneHref} className="mt-2 block">
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Email</p>
                    <a href={`mailto:${SITE.email}`} className="mt-2 block">
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-olive-700">Instagram</p>
                    <a href={SITE.instagram} target="_blank" rel="noreferrer" className="mt-2 block">
                      @cafelafenyc
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 md:p-10">
                <p className="section-kicker">Hours</p>
                <div className="mt-6 grid gap-3">
                  {HOURS.map((entry) => (
                    <div key={entry.label} className="flex items-center justify-between rounded-[1.3rem] bg-olive-50 px-5 py-4">
                      <span className="text-xs uppercase tracking-[0.18em] text-olive-700">{entry.label}</span>
                      <span className="text-sm text-ink/75">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={GALLERY_IMAGES[15].src} alt={GALLERY_IMAGES[15].alt} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 1024px) 28vw, 100vw" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5">
              <div className="glass-panel overflow-hidden">
                <div className="p-8 md:p-10">
                  <p className="section-kicker">Message Us</p>
                  <h2 className="mt-3 font-display text-5xl">We’d love to hear from you.</h2>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4 px-8 pb-8 md:px-10 md:pb-10">
                  <ContactField label="Name" value={name} error={errors.name} onChange={setName} />
                  <ContactField label="Email" type="email" value={email} error={errors.email} onChange={setEmail} />
                  <label className="block text-sm uppercase tracking-[0.18em] text-ink/68">
                    Message
                    <textarea
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className={`mt-3 w-full rounded-[1.6rem] border bg-white px-5 py-4 text-base text-ink outline-none transition ${
                        errors.message ? "border-rose-300" : "border-olive-100 focus:border-olive-300"
                      }`}
                    />
                    {errors.message ? <span className="mt-2 block text-xs normal-case tracking-normal text-rose-700">{errors.message}</span> : null}
                  </label>
                  <button type="submit" className="rounded-full bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream shadow-[0_18px_34px_rgba(42,24,16,0.16)] transition hover:-translate-y-0.5">
                    Send Message
                  </button>
                  {submitted ? (
                    <div className="rounded-[1.6rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-7 text-emerald-800">
                      Thanks. Your message form is designed and ready for production wiring.
                    </div>
                  ) : null}
                </form>
              </div>

              <div className="glass-panel overflow-hidden shadow-[0_22px_80px_rgba(42,24,16,0.1)]">
                <iframe
                  title="Café La Fe map"
                  src="https://www.google.com/maps?q=70+E+1st+St,+New+York,+NY+10003&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[28rem] w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ContactField({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block text-sm uppercase tracking-[0.18em] text-ink/68">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-3 h-14 w-full rounded-full border bg-white px-5 text-base text-ink outline-none transition ${
          error ? "border-rose-300" : "border-olive-100 focus:border-olive-300"
        }`}
      />
      {error ? <span className="mt-2 block text-xs normal-case tracking-normal text-rose-700">{error}</span> : null}
    </label>
  );
}
