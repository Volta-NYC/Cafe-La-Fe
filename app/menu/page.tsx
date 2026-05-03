import { MENU_SECTIONS } from "@/lib/siteData";

function placeholderUrl(label: string) {
  return `https://placehold.co/960x640/E7D6C4/5D3C28?text=${encodeURIComponent(label)}`;
}

const GRUBHUB_ITEM_IMAGES: Record<string, string> = {};

function menuImageFor(itemName: string) {
  return GRUBHUB_ITEM_IMAGES[itemName] ?? placeholderUrl(itemName);
}

function sectionId(title: string) {
  return `menu-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export default function MenuPage() {
  return (
    <main>
      <section className="page-hero menu-hero">
        <div className="container">
          <p className="eyebrow">MENU</p>
          <h1>Our Menu</h1>
          <p className="lede-sm">Matcha, coffee, fresh bakery, and all-day bites made for South Slope routines.</p>
        </div>
      </section>

      <section className="section container stack-lg">
        <nav className="menu-tabs" aria-label="Jump to menu section">
          {MENU_SECTIONS.map((section) => (
            <a key={section.title} className="menu-tab-chip" href={`#${sectionId(section.title)}`}>
              {section.title}
            </a>
          ))}
        </nav>

        {MENU_SECTIONS.map((section) => (
          <section key={section.title} className="menu-section" id={sectionId(section.title)}>
            <h2>{section.title}</h2>
            <div className="menu-grid">
              {section.items.map((item) => (
                <article key={item.name} className="menu-card">
                  <img src={menuImageFor(item.name)} alt={item.name} loading="lazy" />
                  <div className="menu-card-body">
                    <div className="menu-row">
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
