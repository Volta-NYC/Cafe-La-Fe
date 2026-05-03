import { SITE } from "@/lib/siteData";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <p className="footer-copy">{SITE.name} · {SITE.address}</p>
        <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-cta">
          Follow on Instagram
        </a>
      </div>
    </footer>
  );
}
