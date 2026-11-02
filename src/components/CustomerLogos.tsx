"use client";

import Image from "next/image";
import { useState } from "react";

const customerLogos = [
  {
    name: "Wazer",
    logo: "/assets/customers/wazer-removebg-preview.png",
    alt: "Wazer Logo",
  },
  {
    name: "PuffBar",
    logo: "/assets/customers/puffbar-removebg-preview.png",
    alt: "PuffBar Logo",
  },
  {
    name: "Frontline Education",
    logo: "/assets/customers/frontline-education-removebg-preview.png",
    alt: "Frontline Education Logo",
  },
  {
    name: "Lendica",
    logo: "/assets/customers/lendica-removebg-preview.png",
    alt: "Lendica Logo",
  },
  {
    name: "Fluxx",
    logo: "/assets/customers/fluxx-removebg-preview.png",
    alt: "Fluxx Logo",
  },
  {
    name: "QodexAI",
    logo: "/assets/customers/qodexai-removebg-preview.png",
    alt: "QodexAI Logo",
  },
  {
    name: "InRule",
    logo: "/assets/customers/inrule-removebg-preview.png",
    alt: "InRule Logo",
  },
  {
    name: "AppSeed",
    logo: "/assets/customers/appseed-removebg-preview.png",
    alt: "AppSeed Logo",
  },
];

export function CustomerLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl text-text mb-4">
            Selected project experience
          </h2>
          <p className="text-base text-text-light max-w-2xl mx-auto">
            Software work across education, finance, developer tools and
            commerce.
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          {customerLogos.map((customer) => (
            <div
              key={customer.name}
              className="group relative flex items-center justify-center p-4 bg-secondary rounded-lg border border-secondary-dark/10 hover:border-transparent transition-all duration-300 hover:shadow-md"
              onMouseEnter={() => setHoveredLogo(customer.name)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={customer.logo}
                  alt={customer.alt}
                  width={160}
                  height={64}
                  className={`object-contain transition-all duration-300 ${
                    hoveredLogo === customer.name
                      ? "filter brightness-0" // Makes logo black on hover
                      : "filter grayscale opacity-60" // Makes logo grey by default
                  }`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
