export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">ABOUT US</p>
          <h1>Neighborhood Energy, Elevated</h1>
          <p className="lede-sm">Minimalist neighborhood cafe with quality coffee, matcha, and fresh pastries made from scratch daily.</p>
        </div>
      </section>

      <section className="section container split tea-split">
        <div className="placeholder-media">ABOUT IMAGE PLACEHOLDER</div>
        <article className="copy-block">
          <p className="eyebrow dark">OUR STORY</p>
          <h2>Rooted in South Slope</h2>
          <p>
            Pulse Coffee is a calm, clean neighborhood cafe serving quality coffee, standout matcha, and fresh bakery
            made from scratch daily, including samsa, crepes, and khachapuri.
          </p>
          <p>
            Our focus is simple: thoughtful drinks, house-made pastries, outdoor seating, and a space that feels easy
            to return to any day of the week.
          </p>
        </article>
      </section>
    </main>
  );
}
