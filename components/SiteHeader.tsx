"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/siteData";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`topbar ${isScrolled ? "scrolled" : "unscrolled"}`.trim()}
    >
      <div className="container nav-shell">
        <nav className="main-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`.trim()}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="brand" aria-label="Pulse Coffee home">
          <span className="brand-mark">PC</span>
          <span className="brand-name">PULSE COFFEE</span>
        </Link>

        <Link className="order-btn" href="/menu">VIEW MENU</Link>
      </div>
    </header>
  );
}