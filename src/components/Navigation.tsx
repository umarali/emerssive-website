"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#case-studies", label: "Case Studies" },
    { href: "/#approach", label: "How we work" },
    { href: "/#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-secondary-dark bg-white">
      <a
        href="#main-content"
        className="sr-only rounded bg-primary-dark px-4 py-3 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            document.getElementById("navigation-toggle")?.focus();
          }
        }}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" aria-label="Emerssive home">
            <Image
              src="/assets/logo2.png"
              alt="Emerssive"
              width={160}
              height={80}
              priority
              className="h-16 w-32 object-contain sm:w-40"
            />
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text hover:text-primary-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="rounded-full bg-primary-dark px-5 py-3 text-sm font-semibold text-white hover:bg-primary"
            >
              Talk about your project
            </Link>
          </div>
          <button
            id="navigation-toggle"
            type="button"
            className="min-h-11 rounded-lg border border-secondary-dark px-4 text-sm font-semibold md:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close menu" : "Menu"}
          </button>
        </div>
        {open && (
          <div
            id="mobile-navigation"
            className="space-y-1 border-t border-secondary-dark py-4 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-primary-dark px-3 py-3 text-sm font-semibold text-white"
            >
              Talk about your project
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
