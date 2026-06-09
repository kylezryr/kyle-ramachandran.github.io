"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import FadeIn from "./FadeIn";

const photos = [
  { src: "/photo1.jpg", alt: "Photo 1" },
  { src: "/photo2.jpg", alt: "Photo 2" },
  { src: "/photo3.jpg", alt: "Photo 3" },
  { src: "/photo4.jpg", alt: "Photo 4" },
  { src: "/photo5.JPG", alt: "Photo 5" },
];

function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="hidden sm:flex flex-col items-center gap-3 shrink-0 w-2/5">
      <div
        className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-700 select-none cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={index}
          src={photos[index].src}
          alt={photos[index].alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(min-width: 640px) 40vw, 0px"
          priority={index === 0}
        />
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index
                ? "bg-neutral-900 dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="sticky top-14 z-10 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            01. About
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10">
          A little about me
        </h3>
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
              <p>
                I was born and raised in Kuala Lumpur, Malaysia, and I&apos;m a rising fourth-year EECS student at UC Berkeley,
                building impactful software that ships to real users. My work sits at the
                intersection of full-stack engineering and AI, and I&apos;m always looking to learn more.
              </p>
              <p>
                On campus, I have also been heavily involved with{" "}
                <a
                  href="https://calblueprint.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Blueprint
                </a>
                , a student-led organization at UC Berkeley that builds pro bono software for nonprofits.
                Through this work, I&apos;ve developed a passion for using technology to drive social impact
                and have had the privilege of working with incredible mission-driven organizations.
              </p>
              <p>
                I&apos;m also a 3rd-degree Taekwondo black belt, having trained for 15+ years,
                a budding climber, and an enjoyer of basketball and MMA.
              </p>
            </div>
            <PhotoCarousel />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
