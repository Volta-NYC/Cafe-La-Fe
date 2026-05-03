export default function CalendarPage() {
  const placeholders = [
    { date: "Coming Soon", title: "Weekend Live Music", desc: "Placeholder event card." },
    { date: "Coming Soon", title: "Latte Art Workshop", desc: "Placeholder event card." },
    { date: "Coming Soon", title: "Community Open Mic", desc: "Placeholder event card." },
  ];

  return (
    <main>
      <section className="page-hero calendar-hero">
        <div className="container">
          <p className="eyebrow">CALENDAR</p>
          <h1>Events Calendar</h1>
          <p className="lede-sm">Upcoming events will be published here soon.</p>
        </div>
      </section>

      <section className="section container calendar-grid">
        {placeholders.map((item) => (
          <article className="calendar-card" key={item.title}>
            <p className="calendar-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
