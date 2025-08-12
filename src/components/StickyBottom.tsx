'use client'

import Image from 'next/image'

export function StickyBottom() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-full px-8 py-4 flex items-center space-x-6 shadow-xl min-w-[500px]">
          {/* Profile Picture */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
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
              <span className="text-gray-300">Hey, I&apos;m </span>
              <span className="font-semibold">Umar from Emerssive</span>
            </p>
            <p className="text-gray-400 text-xs">
              Let&apos;s find the right solution to make your team work smarter
            </p>
          </div>

          {/* Button */}
          <a
            href="https://calendar.app.google/U3z2GqSza9Fhch8e9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
