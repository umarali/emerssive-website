"use client";

import Image from "next/image";

export function StickyBottom() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="sm:hidden bg-gray-900 rounded-2xl px-4 py-3 shadow-xl">
          <div className="flex items-center space-x-3">
            {/* Profile Picture */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/assets/Umar.png"
                alt="Umar from Emerssive"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Content - Shortened for mobile */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs">
                <span className="font-semibold">Hey, I&apos;m Umar.</span>{" "}
                <span className="text-gray-300">
                  Let&apos;s build something great.
                </span>
              </p>
            </div>

            {/* Button */}
            <a
              href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block bg-gray-900 rounded-full px-8 py-4 shadow-xl">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/assets/Umar.png"
                alt="Umar from Emerssive"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1">
              <p className="text-white text-sm">
                <span className="font-semibold">
                  Hey, I&apos;m Umar from Emerssive Solutions.&nbsp;
                </span>
                <span className="text-gray-300">
                  Let&apos;s find the right solution to make your team work
                  smarter.
                </span>
              </p>
            </div>

            {/* Button */}
            <a
              href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
