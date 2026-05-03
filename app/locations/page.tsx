import { SITE } from "@/lib/siteData";

export default function LocationsPage() {
  return (
    <main>
      <section className="page-hero locations-hero">
        <div className="container">
          <p className="eyebrow">LOCATIONS</p>
          <h1>Visit Pulse Coffee</h1>
          <p className="lede-sm">A South Slope neighborhood cafe for matcha, coffee, and scratch-made bakery.</p>
        </div>
      </section>

      <section className="section container split tea-split">
        <article className="copy-block">
          <p className="eyebrow dark">SOUTH SLOPE, BROOKLYN</p>
          <h2>475 5th Ave</h2>
          <p>{SITE.address}</p>
          <p>Open daily from 7:00 AM to 6:00 PM.</p>
          <p>Outdoor seating is available for easy morning stops and slower afternoon breaks.</p>
          <a className="button dark" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </article>
        <div className="map-wrap">
          <iframe
            title="Pulse Coffee map"
            src="https://www.google.com/maps?q=475+5th+Ave,+Brooklyn,+NY+11215&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
