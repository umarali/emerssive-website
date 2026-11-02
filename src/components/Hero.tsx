"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 sm:pb-20 bg-secondary">
      <div
        className="w-full px-4 sm:px-6 lg:px-0"
        style={{
          paddingLeft: "max(1rem, calc(50vw - 610px))",
          paddingRight: "max(1rem, calc(50vw - 610px))",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Copy - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Pre-heading */}
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-6">
                Welcome to Emerssive
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl text-text mb-6 leading-tight transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              We build the AI and software
              <span className="text-accent"> your business actually needs.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-text-light max-w-2xl mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              We help growing teams turn messy workflows, unused data, and
              outdated platforms into working systems that ship in weeks —
              not months.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <a
                href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-secondary-light px-6 py-3 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Book a 30-minute strategy call →
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-text text-sm hover:bg-gray-50 transition-colors"
              >
                See case studies ↓
              </a>
            </div>

            {/* Trust Indicator */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <p className="text-primary font-medium text-sm">
                Trusted by 100+ clients including companies serving and
                acquired by Fortune 500 firms
              </p>
            </div>
          </div>

          {/* Right: Proof metrics */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-light mb-5">
                You&apos;re in the right place if:
              </p>
              <div className="divide-y divide-gray-100">
                <div className="flex items-start gap-3 pb-4">
                  <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-text leading-relaxed">Your team does work that should not be manual</span>
                </div>
                <div className="flex items-start gap-3 py-4">
                  <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-text leading-relaxed">You have a product idea but no engineering team</span>
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-text leading-relaxed">Your platform can&apos;t keep up with your growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>
    </section>
  );
}
