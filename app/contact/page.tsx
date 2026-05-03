import { SITE } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">CONTACT</p>
          <h1>Say Hello</h1>
          <p className="lede-sm">Questions, catering inquiries, or neighborhood collaborations.</p>
        </div>
      </section>

      <section className="section container split tea-split">
        <article className="copy-block contact-info-card">
          <p className="eyebrow dark">CONTACT INFO</p>
          <h2>Let&apos;s Connect</h2>
          <p>{SITE.address}</p>
          <p>{SITE.hours}</p>
          <p>{SITE.email}</p>
          <a className="button dark" href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </a>
          <div className="social-grid compact">
            <a className="social-card instagram" href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.3 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
                </svg>
              </span>
              <strong>Instagram</strong>
              <span>@pulsecoffee.nyc</span>
            </a>
          </div>
        </article>

        <article className="form-block">
          <h2>Send a Message</h2>
          <form className="contact-form" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="button dark full">
              Send Message
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
