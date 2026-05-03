"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CATERING_FEATURES, EVENT_TYPES, GALLERY_IMAGES, SITE } from "@/lib/siteData";

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  guestCount: "",
  details: "",
};

export default function CateringPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please add an email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please use a valid email address.";
    }

    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <main className="pt-28 md:pt-32">
      <section className="section-padding pb-14">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Catering</p>
              <h1 className="section-title">Bring Café La Fe warmth to the table.</h1>
              <p className="section-copy">
                Let Café La Fe bring warmth, flavor, and unforgettable hospitality to your next event.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/72">
                From handcrafted empanadas and arepas to fresh juices, plant-based offerings, fair-trade coffee, and specialty bubble teas, we tailor every catering experience to your needs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-[24rem] overflow-hidden rounded-[2.2rem] sm:row-span-2 sm:h-[34rem]">
                <Image src={GALLERY_IMAGES[8].src} alt={GALLERY_IMAGES[8].alt} fill className="object-cover" sizes="(min-width: 640px) 34vw, 100vw" />
              </div>
              <div className="relative h-56 overflow-hidden rounded-[1.8rem]">
                <Image src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} fill className="object-cover" sizes="(min-width: 640px) 22vw, 100vw" />
              </div>
              <div className="relative h-56 overflow-hidden rounded-[1.8rem]">
                <Image src={GALLERY_IMAGES[5].src} alt={GALLERY_IMAGES[5].alt} fill className="object-cover" sizes="(min-width: 640px) 22vw, 100vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="glass-panel texture-panel p-8 md:p-10">
                <p className="section-kicker">Why It Works</p>
                <div className="mt-6 space-y-4">
                  {CATERING_FEATURES.map((feature) => (
                    <div key={feature} className="rounded-[1.4rem] bg-white/65 p-5 text-base leading-8 text-ink/74">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel p-8 md:p-10">
                <p className="section-kicker">Perfect For</p>
                <div className="mt-6 grid gap-3">
                  {EVENT_TYPES.map((type) => (
                    <div key={type} className="rounded-[1.3rem] bg-olive-50 px-5 py-4 text-sm uppercase tracking-[0.18em] text-ink/78">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel p-8 md:p-10">
              <p className="section-kicker">Inquiry Form</p>
              <h2 className="mt-3 font-display text-5xl">Plan your event</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink/70">
                Share the basics and we will shape the right mix of drinks, savory favorites, and sweet touches.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
                <Field
                  label="Name *"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                />
                <Field
                  label="Email *"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                />
                <Field
                  label="Phone"
                  value={form.phone}
                  onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
                />
                <Field
                  label="Event Date"
                  type="date"
                  value={form.eventDate}
                  onChange={(value) => setForm((current) => ({ ...current, eventDate: value }))}
                />
                <Field
                  label="Estimated Guests"
                  value={form.guestCount}
                  onChange={(value) => setForm((current) => ({ ...current, guestCount: value }))}
                />
                <div className="md:col-span-2">
                  <label className="block text-sm uppercase tracking-[0.18em] text-ink/68">
                    Additional Details
                    <textarea
                      value={form.details}
                      onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
                      rows={5}
                      className="mt-3 w-full rounded-[1.5rem] border border-olive-100 bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-olive-300"
                    />
                  </label>
                </div>
                <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="rounded-full bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream transition hover:-translate-y-0.5">
                    Submit Inquiry
                  </button>
                  <p className="text-sm leading-7 text-ink/58">For immediate questions, call {SITE.phone}.</p>
                </div>
              </form>

              {submitted ? (
                <div className="mt-6 rounded-[1.6rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-7 text-emerald-800">
                  Thanks. Your inquiry is ready for follow-up and the form is prepared for production wiring.
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({
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
