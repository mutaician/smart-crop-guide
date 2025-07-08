"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Wambui",
    location: "Nakuru County",
    avatar: "/icons/plant.svg",
    text: "Since using Smart Crop Guide, my maize yield has improved and I save water every week!",
    color: "bg-green-100",
  },
  {
    name: "Peter Otieno",
    location: "Kisumu",
    avatar: "/icons/water.svg",
    text: "I love the daily tips and the app works even when I have no internet.",
    color: "bg-yellow-100",
  },
  {
    name: "Amina Hassan",
    location: "Garissa",
    avatar: "/icons/weather.svg",
    text: "Nimeongeza mavuno yangu na kupunguza matumizi ya maji. Asante sana!",
    color: "bg-blue-100",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="relative z-10 py-12 px-4 sm:px-8 bg-white/80 rounded-xl mx-2 mt-8 flex flex-col items-center">
      <h2 className="font-display text-2xl font-semibold mb-6 text-primary">What Farmers Say</h2>
      <div className="relative w-full max-w-xl flex flex-col items-center">
        <div className={`transition-all duration-500 ease-in-out w-full flex flex-col items-center ${t.color} rounded-3xl shadow-lg p-8 pb-6 mb-4 min-h-[200px]`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-white">
              <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg text-green-900">{t.name}</span>
              <span className="text-xs text-gray-500">{t.location}</span>
            </div>
          </div>
          <blockquote className="italic text-lg text-gray-800 text-center mb-2">“{t.text}”</blockquote>
        </div>
        <div className="flex gap-4 items-center justify-center mt-2">
          <button onClick={prev} aria-label="Previous testimonial" className="rounded-full bg-white border border-green-200 p-2 shadow hover:bg-green-100 transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="#219653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <span className="text-xs text-gray-500">{index + 1} / {testimonials.length}</span>
          <button onClick={next} aria-label="Next testimonial" className="rounded-full bg-white border border-green-200 p-2 shadow hover:bg-green-100 transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="#219653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
} 