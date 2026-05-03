"use client";

import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
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
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeSection, setActiveSection] = useState<string>(MENU_GROUPS[0].slug);

  const filters = useMemo(() => ["all", ...MENU_GROUPS.map((group) => group.slug)], []);

  const filteredGroups = useMemo(() => {
    const search = normalize(deferredQuery);

    return MENU_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const matchesSearch = !search || normalize(`${item.name} ${item.description} ${item.originalCategory}`).includes(search);
        const matchesFilter = activeFilter === "all" || group.slug === activeFilter;
        return matchesSearch && matchesFilter;
      }),
    })).filter((group) => group.items.length > 0);
  }, [activeFilter, deferredQuery]);

  useEffect(() => {
    if (filteredGroups.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id.replace(/^menu-/, ""));
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0.15, 0.3, 0.5],
      },
    );

    filteredGroups.forEach((group) => {
      const element = document.getElementById(groupId(group));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [filteredGroups]);

  return (
    <main>
      <PageHero
        eyebrow="Menu"
        title="Handcrafted Drinks, Fresh Bites, and Daily Favorites"
        subtitle="A full menu of coffee, matcha, bubble tea, empanadas, pastries, and neighborhood staples, organized to be easy to browse and even easier to order."
        image="/hero7.jpg"
        alt="Café La Fe menu hero"
      />

      <section className="section-padding">
        <div className="page-shell-wide grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="glass-panel sticky top-28 hidden self-start p-6 lg:block">
              <p className="section-kicker">Menu Explorer</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Browse by section.</h2>
              <p className="mt-4 text-sm leading-7 text-ink/68">
                Search the menu, filter the groups, or jump directly into a category from the left.
              </p>

              <div className="mt-6 space-y-4">
                <label className="relative block">
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

                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => {
                    const selected = activeFilter === filter;
                    const label = filter === "all" ? "All" : MENU_GROUPS.find((group) => group.slug === filter)?.title ?? filter;

                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] transition ${
                          selected ? "bg-ink text-cream" : "bg-white text-ink/72 ring-1 ring-olive-100 hover:bg-olive-50"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <p className="text-sm leading-7 text-ink/60">
                  {query || activeFilter !== "all"
                    ? `${filteredGroups.reduce((total, group) => total + group.items.length, 0)} results found.`
                    : "Use the buttons below to jump between sections."}
                </p>
              </div>

              <div className="mt-7 border-t border-olive-100 pt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-olive-700">Jump To</p>
                <nav className="mt-4 flex flex-col gap-2">
                  {filteredGroups.map((group) => (
                    <a
                      key={group.slug}
                      href={`#${groupId(group)}`}
                      className={`rounded-2xl px-4 py-3 text-sm leading-6 transition ${
                        activeSection === group.slug
                          ? "bg-olive-100 text-ink shadow-[inset_0_0_0_1px_rgba(74,107,88,0.14)]"
                          : "text-ink/74 hover:bg-olive-50 hover:text-ink"
                      }`}
                    >
                      <span className="block font-medium text-ink">{group.title}</span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-olive-700">{group.categories.join(" • ")}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

          <div className="lg:hidden">
            <Reveal>
              <div className="glass-panel p-4 md:p-5">
                <p className="section-kicker">Menu Explorer</p>
                <h2 className="section-title text-[2.6rem]">Search the full Café La Fe menu.</h2>
                <p className="section-copy max-w-3xl">
                  Browse by section, filter by menu group, and search by item name or flavor.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <label className="relative block">
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

                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => {
                      const selected = activeFilter === filter;
                      const label = filter === "all" ? "All" : MENU_GROUPS.find((group) => group.slug === filter)?.title ?? filter;

                      return (
                        <button
                          key={filter}
                          type="button"
                          onClick={() => setActiveFilter(filter)}
                          className={`rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] transition ${
                            selected ? "bg-ink text-cream" : "bg-white text-ink/72 ring-1 ring-olive-100 hover:bg-olive-50"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-sm leading-7 text-ink/60">
                    {query || activeFilter !== "all"
                      ? `${filteredGroups.reduce((total, group) => total + group.items.length, 0)} results found.`
                      : "Tap a section button below or expand a group to browse."}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="no-scrollbar mt-5 -mx-1 overflow-x-auto pb-1">
              <div className="flex min-w-max gap-3 px-1">
                {filteredGroups.map((group) => (
                  <a
                    key={group.slug}
                    href={`#${groupId(group)}`}
                    className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                      activeSection === group.slug ? "bg-ink text-cream" : "bg-white text-ink/75 ring-1 ring-olive-100"
                    }`}
                  >
                    {group.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-5">
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
                                  <div className="mb-4 flex h-24 items-end rounded-[1.2rem] border border-dashed border-olive-200 bg-[linear-gradient(135deg,rgba(218,230,219,0.55),rgba(255,255,255,0.95))] p-4">
                                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-olive-700">Menu Item</span>
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
          </div>

          <div className="space-y-12">
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
                    <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <p className="section-kicker">{group.categories.join(" • ")}</p>
                        <h2 className="section-title text-[3rem] md:text-[3.8rem]">{group.title}</h2>
                      </div>
                      <p className="max-w-xl text-base leading-8 text-ink/70">{group.description}</p>
                    </div>
                    <div className="grid gap-5 xl:grid-cols-2">
                      {group.items.map((item) => (
                        <article key={item.name} className="menu-card">
                          <div className="mb-5 flex h-24 items-end rounded-[1.5rem] border border-dashed border-olive-200 bg-[linear-gradient(135deg,rgba(218,230,219,0.45),rgba(255,255,255,0.96))] p-5">
                            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-olive-700">Menu Item</span>
                          </div>
                          <div className="flex flex-col justify-between">
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
