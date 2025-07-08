"use client";
import { useState } from "react";

export default function CropJourney() {
  const [flowering, setFlowering] = useState(false);
  return (
    <section className="relative z-10 py-12 px-4 sm:px-8 bg-white/80 rounded-xl mx-2 mt-8 flex flex-col items-center">
      <h2 className="font-display text-2xl font-semibold mb-8 text-primary">Your Crop&apos;s Journey</h2>
      <div className="w-full max-w-4xl flex flex-col items-center pt-16" style={{ overflow: 'visible' }}>
        {/* Timeline SVG */}
        <div className="w-full flex flex-row items-end justify-between gap-2 sm:gap-6 mb-8 overflow-visible relative">
          {/* Seed Stage */}
          <div className="flex flex-col items-center">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <ellipse cx="30" cy="70" rx="24" ry="8" fill="#A1887F"/>
              <ellipse cx="30" cy="60" rx="6" ry="10" fill="#F9A825"/>
              <ellipse cx="30" cy="60" rx="3" ry="5" fill="#795548"/>
            </svg>
            <span className="mt-2 text-xs font-semibold text-yellow-800">Seed</span>
          </div>
          {/* Sprout Stage */}
          <div className="flex flex-col items-center">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <ellipse cx="30" cy="70" rx="24" ry="8" fill="#A1887F"/>
              <rect x="27" y="50" width="6" height="20" rx="3" fill="#219653"/>
              <ellipse cx="30" cy="50" rx="8" ry="4" fill="#34D058"/>
            </svg>
            <span className="mt-2 text-xs font-semibold text-green-800">Sprout</span>
          </div>
          {/* Growing Stage (Interactive) */}
          <div className="flex flex-col items-center relative">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <ellipse cx="30" cy="70" rx="24" ry="8" fill="#A1887F"/>
              <rect x="27" y="30" width="6" height="40" rx="3" fill="#219653"/>
              <ellipse cx="30" cy="30" rx="12" ry="6" fill="#34D058"/>
              <ellipse cx="20" cy="40" rx="4" ry="2" fill="#34D058"/>
              <ellipse cx="40" cy="40" rx="4" ry="2" fill="#34D058"/>
            </svg>
            <span className="mt-2 text-xs font-semibold text-green-900">Growing</span>
            {/* Interactive Watering Can */}
            {!flowering && (
              <>
                <button
                  className="absolute -top-16 left-1/2 -translate-x-1/2 bg-blue-600 p-3 rounded-full shadow-xl border-4 border-yellow-400 animate-pulse focus:outline-none focus:ring-4 focus:ring-blue-300 z-20"
                  aria-label="Water the plant"
                  onClick={() => setFlowering(true)}
                  style={{ boxShadow: '0 4px 24px 0 #2196F3, 0 0 0 4px #F9A825' }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <ellipse cx="24" cy="36" rx="10" ry="6" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
                    <rect x="30" y="22" width="8" height="12" rx="4" fill="#90CAF9" stroke="#1976D2" strokeWidth="2"/>
                    <ellipse cx="38" cy="32" rx="3" ry="2" fill="#F9A825" stroke="#F9A825" strokeWidth="1"/>
                    <rect x="18" y="18" width="12" height="10" rx="5" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
                  </svg>
                </button>
                <span className="absolute -top-24 left-1/2 -translate-x-1/2 text-xs text-blue-900 font-bold flex items-center gap-1 animate-bounce z-20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14V2M8 14l-3-3M8 14l3-3" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Tap to water
                </span>
              </>
            )}
          </div>
          {/* Flowering Stage (hidden until watered) */}
          <div className={`flex flex-col items-center transition-opacity duration-700 ${flowering ? 'opacity-100' : 'opacity-0'}`} id="flowering-stage">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <ellipse cx="30" cy="70" rx="24" ry="8" fill="#A1887F"/>
              <rect x="27" y="20" width="6" height="50" rx="3" fill="#219653"/>
              <ellipse cx="30" cy="20" rx="14" ry="7" fill="#F9A825"/>
              <ellipse cx="20" cy="40" rx="4" ry="2" fill="#34D058"/>
              <ellipse cx="40" cy="40" rx="4" ry="2" fill="#34D058"/>
              <ellipse cx="30" cy="10" rx="6" ry="3" fill="#F9A825"/>
            </svg>
            <span className="mt-2 text-xs font-semibold text-yellow-800">Flowering</span>
            <span className="mt-1 text-green-700 font-bold">✓ Task Complete!</span>
          </div>
          {/* Harvest Stage */}
          <div className="flex flex-col items-center">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <ellipse cx="30" cy="70" rx="24" ry="8" fill="#A1887F"/>
              <rect x="27" y="10" width="6" height="60" rx="3" fill="#219653"/>
              <ellipse cx="30" cy="10" rx="16" ry="8" fill="#F9A825"/>
              <ellipse cx="20" cy="40" rx="4" ry="2" fill="#34D058"/>
              <ellipse cx="40" cy="40" rx="4" ry="2" fill="#34D058"/>
              <ellipse cx="30" cy="5" rx="8" ry="4" fill="#F9A825"/>
            </svg>
            <span className="mt-2 text-xs font-semibold text-yellow-900">Harvest</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-700 max-w-xl mx-auto mt-2">
          See how Smart Crop Guide helps you at every stage—from planting to harvest. Try watering your crop above!
        </p>
        <span className="font-bold text-primary">Let&apos;s get started!</span>
      </div>
    </section>
  );
} 