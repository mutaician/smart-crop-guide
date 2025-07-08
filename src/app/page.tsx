import Image from "next/image";
import CropJourney from "../components/CropJourney";
import TestimonialCarousel from "../components/TestimonialCarousel";

const LandscapeBG = () => (
  <svg className="fixed inset-0 w-full h-full z-0" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <linearGradient id="bg-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFDE4"/>
        <stop offset="60%" stopColor="#F9A825"/>
        <stop offset="100%" stopColor="#219653"/>
      </linearGradient>
      <pattern id="kitenge" patternUnits="userSpaceOnUse" width="80" height="80">
        <circle cx="40" cy="40" r="32" fill="#F5F9F5" fillOpacity="0.12" />
        <rect x="20" y="20" width="40" height="40" fill="#F9A825" fillOpacity="0.04" rx="8" />
      </pattern>
    </defs>
    <rect width="1440" height="1024" fill="url(#bg-gradient)"/>
    <rect width="1440" height="1024" fill="url(#kitenge)"/>
    <ellipse cx="720" cy="900" rx="700" ry="180" fill="#219653" fillOpacity="0.7"/>
    <ellipse cx="720" cy="1000" rx="900" ry="120" fill="#14532d" fillOpacity="0.7"/>
    <ellipse cx="300" cy="950" rx="200" ry="60" fill="#F9A825" fillOpacity="0.15"/>
    <ellipse cx="1200" cy="950" rx="180" ry="50" fill="#F9A825" fillOpacity="0.12"/>
    {/* Acacia tree silhouette */}
    <path d="M900 900 Q920 860 980 880 Q1040 900 1100 860 Q1160 820 1200 900" stroke="#14532d" strokeWidth="8" fill="none"/>
    <ellipse cx="1100" cy="860" rx="60" ry="18" fill="#14532d" fillOpacity="0.7"/>
  </svg>
);

const HeroSunrise = () => (
  <svg className="absolute left-1/2 top-0 -translate-x-1/2 z-0" width="600" height="220" viewBox="0 0 600 220" fill="none" style={{filter: 'blur(2px)'}}>
    <defs>
      <radialGradient id="hero-sun" cx="50%" cy="60%" r="60%">
        <stop offset="0%" stopColor="#FFFDE4" stopOpacity="0.9"/>
        <stop offset="70%" stopColor="#F9A825" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#F9A825" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="hero-arc" x1="0" y1="180" x2="600" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#219653" stopOpacity="0.7"/>
        <stop offset="1" stopColor="#F9A825" stopOpacity="0.5"/>
      </linearGradient>
    </defs>
    {/* Soft sunrise */}
    <ellipse cx="300" cy="120" rx="180" ry="80" fill="url(#hero-sun)"/>
    {/* Gentle arc */}
    <path d="M0 180 Q300 80 600 180" stroke="url(#hero-arc)" strokeWidth="16" fill="none"/>
  </svg>
);

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col z-10">
      {/* Immersive SVG Background */}
      <LandscapeBG />
      <main className="relative z-10 flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-8 bg-white/80 backdrop-blur-md overflow-hidden z-10 rounded-b-3xl shadow-lg mx-2 mt-2 min-h-[420px]">
          {/* Soft Sunrise and Arc */}
          <HeroSunrise />
          {/* Language Toggle */}
          <div className="absolute top-6 right-6 z-10 flex gap-2 items-center bg-white/80 rounded-full px-3 py-1 shadow font-semibold text-sm">
            <span className="text-green-700">EN</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 hover:text-green-700 cursor-pointer">SW</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-primary drop-shadow-lg tracking-tight" style={{textShadow: '0 2px 8px #FFFDE4, 0 1px 2px #21965344'}}>
              From Soil to Success:
              <br className="hidden sm:block" />
              <span className="text-green-700 mb-2 font-display">Your Smart Crop Guide</span>
            </h1>
            <p className="max-w-xl text-lg mb-4 font-medium text-gray-700 bg-white/70 rounded-lg px-4 py-2 shadow-sm font-sans">
              Empowering Kenyan farmers with real-time, personalized crop guidance.
            </p>
            <p className="max-w-xl text-lg mb-6 font-bold text-green-800 font-sans">
              Grow more. Waste less. Thrive together.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-green-600 via-yellow-500 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 relative overflow-hidden group font-sans"
            >
              <span className="relative z-10">Get My Free Guide</span>
              <span className="absolute inset-0 rounded-full group-active:animate-ripple bg-white/30 opacity-0 group-active:opacity-100 pointer-events-none" />
            </a>
            <span className="text-sm text-gray-500 mt-2 font-sans">No cost. No catch. Just better harvests.</span>
          </div>
          {/* Organic Pattern Divider */}
          <svg className="absolute bottom-0 left-0 w-full h-16 z-0" viewBox="0 0 400 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32 Q100 0 200 32 T400 32 V64 H0 V32 Z" fill="#F5F9F5"/>
            <path d="M0 48 Q100 24 200 48 T400 48" stroke="#E0E7E0" strokeWidth="2" fill="none"/>
          </svg>
        </section>
        {/* Features Section */}
        <section className="relative z-10 py-12 px-4 sm:px-8 bg-white/80 rounded-xl mx-2 mt-8">
          <h2 className="font-display text-2xl font-semibold mb-6 text-primary text-center">Key Benefits</h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl w-full mx-auto">
            <div className="bg-white/70 border border-green-200 rounded-3xl p-6 flex flex-col items-center shadow-none backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer">
              <Image src="/icons/plant.svg" alt="Yield" width={40} height={40} />
              <h3 className="font-bold mt-4 mb-2 text-green-800 font-display">Increase Yields</h3>
              <p className="text-gray-700 text-center font-sans">Personalized, data-driven recommendations to boost your harvest by up to 20%.</p>
            </div>
            <div className="bg-white/70 border border-green-200 rounded-3xl p-6 flex flex-col items-center shadow-none backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer">
              <Image src="/icons/water.svg" alt="Save Resources" width={40} height={40} />
              <h3 className="font-bold mt-4 mb-2 text-green-800 font-display">Save Water & Fertilizer</h3>
              <p className="text-gray-700 text-center font-sans">Precise schedules help you use less water and fertilizer, saving money and the environment.</p>
            </div>
            <div className="bg-white/70 border border-yellow-100 rounded-3xl p-6 flex flex-col items-center shadow-none backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer">
              <Image src="/icons/weather.svg" alt="Weather" width={40} height={40} />
              <h3 className="font-bold mt-4 mb-2 text-yellow-700 font-display">Weather-Smart</h3>
              <p className="text-gray-700 text-center font-sans">Get tips and alerts based on live weather and local conditions.</p>
            </div>
            <div className="bg-white/70 border border-green-100 rounded-3xl p-6 flex flex-col items-center shadow-none backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer">
              <Image src="/icons/offline.svg" alt="Offline" width={40} height={40} />
              <h3 className="font-bold mt-4 mb-2 text-green-700 font-display">Works Offline</h3>
              <p className="text-gray-700 text-center font-sans">Access your crop calendar and tasks even without internet—perfect for rural areas.</p>
            </div>
          </div>
        </section>
        {/* Animated Crop Journey Timeline & Interactive Demo */}
        <CropJourney />
        {/* Testimonials/Impact Section (Placeholder) */}
        <TestimonialCarousel />
      </main>
      {/* Footer */}
      <footer className="relative z-10 bg-white/80 border-t border-border py-6 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 rounded-t-xl shadow mx-2">
        <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Smart Crop Guide. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Sponsors</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
