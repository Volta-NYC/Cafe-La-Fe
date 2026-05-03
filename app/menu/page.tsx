"use client";

import Image from "next/image";
import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { MENU_GROUPS, MENU_SEARCH_HINTS, type MenuGroup } from "@/lib/siteData";

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function groupId(group: MenuGroup) {
  return `menu-${group.slug}`;
}

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [openMobileSection, setOpenMobileSection] = useState<string>(MENU_GROUPS[0].slug);

  const filteredGroups = useMemo(() => {
    const search = normalize(deferredQuery);
    if (!search) {
      return MENU_GROUPS;
    }

    return MENU_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        normalize(`${item.name} ${item.description} ${item.originalCategory}`).includes(search),
      ),
    })).filter((group) => group.items.length > 0);
  }, [deferredQuery]);

  return (
    <main className="pt-28 md:pt-32">
      <section className="section-padding pb-14">
        <div className="section-shell">
          <Reveal>
            <p className="section-kicker">Menu</p>
            <h1 className="section-title">Search the full Café La Fe menu.</h1>
            <p className="section-copy max-w-3xl">
              The original menu categories are grouped into broader sections so the experience feels easier to browse, while still surfacing the café’s signature drinks, empanadas, pastries, and refreshers.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel mt-10 p-4 md:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <label className="relative block lg:w-[28rem]">
                  <span className="sr-only">Search menu</span>
                  <input
                    value={query}
                    onChange={(event) => {
                      const next = event.target.value;
                      startTransition(() => setQuery(next));
                    }}
                    placeholder={`Search for ${MENU_SEARCH_HINTS[0]}, ${MENU_SEARCH_HINTS[1]}, ${MENU_SEARCH_HINTS[4]}...`}
                    className="h-14 w-full rounded-full border border-olive-100 bg-white px-6 text-sm text-ink outline-none ring-0 placeholder:text-ink/40 focus:border-olive-300"
                  />
                </label>
                <p className="text-sm leading-7 text-ink/60">
                  {query ? `${filteredGroups.reduce((total, group) => total + group.items.length, 0)} results found.` : "Browse by section or jump with the sidebar."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="section-shell grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Reveal className="hidden lg:block">
            <aside className="glass-panel sticky top-28 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-olive-700">Sections</p>
              <nav className="mt-5 flex flex-col gap-2">
                {filteredGroups.map((group) => (
                  <a
                    key={group.slug}
                    href={`#${groupId(group)}`}
                    className="rounded-2xl px-4 py-3 text-sm leading-6 text-ink/74 transition hover:bg-olive-50 hover:text-ink"
                  >
                    <span className="block font-medium text-ink">{group.title}</span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-olive-700">{group.categories.join(" • ")}</span>
                  </a>
                ))}
              </nav>
            </aside>
          </Reveal>

          <div className="space-y-5 lg:hidden">
            {filteredGroups.map((group) => {
              const open = openMobileSection === group.slug;
              return (
                <Reveal key={group.slug}>
                  <div className="glass-panel overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenMobileSection((current) => (current === group.slug ? "" : group.slug))}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <div>
                        <p className="font-display text-3xl">{group.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-olive-700">{group.categories.join(" • ")}</p>
                      </div>
                      <span className="text-2xl text-ink/60">{open ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-4 px-5 pb-5">
                            {group.items.map((item) => (
                              <article key={item.name} className="rounded-[1.6rem] border border-olive-100 bg-white p-4">
                                <div className="relative mb-4 h-48 overflow-hidden rounded-[1.2rem]">
                                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="100vw" />
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h2 className="text-2xl leading-none">{item.name}</h2>
                                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-olive-700">{item.originalCategory}</p>
                                  </div>
                                  <span className="rounded-full bg-olive-100 px-3 py-1 text-xs uppercase tracking-[0.16em] text-olive-800">{item.price}</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-ink/68">{item.description}</p>
                              </article>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="hidden space-y-10 lg:block">
            {filteredGroups.length === 0 ? (
              <Reveal>
                <div className="glass-panel p-10">
                  <h2 className="text-4xl">No matching items</h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-ink/70">Try searching by drink flavor, pastry, tea style, or a category like empanada or matcha.</p>
                </div>
              </Reveal>
            ) : (
              filteredGroups.map((group, index) => (
                <Reveal key={group.slug} delay={index * 0.03}>
                  <section id={groupId(group)} className="scroll-mt-32">
                    <div className="mb-6">
                      <p className="section-kicker">{group.categories.join(" • ")}</p>
                      <h2 className="section-title text-[3rem] md:text-[3.8rem]">{group.title}</h2>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-ink/70">{group.description}</p>
                    </div>
                    <div className="grid gap-5 xl:grid-cols-2">
                      {group.items.map((item) => (
                        <article key={item.name} className="glass-panel overflow-hidden">
                          <div className="grid md:grid-cols-[240px_minmax(0,1fr)]">
                            <div className="relative h-64 md:h-full">
                              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(min-width: 1280px) 18vw, 100vw" />
                            </div>
                            <div className="flex flex-col justify-between p-6">
                              <div>
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h3 className="text-3xl leading-tight">{item.name}</h3>
                                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-olive-700">{item.originalCategory}</p>
                                  </div>
                                  <span className="rounded-full bg-olive-100 px-3 py-1 text-xs uppercase tracking-[0.16em] text-olive-800">{item.price}</span>
                                </div>
                                <p className="mt-4 text-base leading-8 text-ink/68">{item.description}</p>
                              </div>
                              {item.featured ? (
                                <span className="mt-6 inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-amber-700">
                                  Signature Favorite
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
