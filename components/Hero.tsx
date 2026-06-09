"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const phrases = [
  "Builder of impactful software.",
  "Full-stack engineer.",
  "AI applications builder.",
  "React aficionado.",
  "Open source contributor.",
  "Tech for nonprofits advocate.",
  "Proud Malaysian.",
  "3rd-degree Taekwondo black belt.",
  "Aspiring climber.",
  "Toronto Raptors fan.",
  "Charles Oliveria supporter.",
  "Cinephile."
];

type PhraseColor = string | { light: string; dark: string };

const phraseColors: PhraseColor[] = [
  "text-blue-500 dark:text-blue-400",
  "text-indigo-500 dark:text-indigo-400",
  "text-violet-500 dark:text-violet-400",
  "text-teal-500 dark:text-teal-400",
  "text-sky-500 dark:text-sky-400",
  "text-emerald-500 dark:text-emerald-400",
  { light: "#CC0001", dark: "#FF2020" },
  "text-rose-500 dark:text-rose-400",
  "text-amber-500 dark:text-amber-400",
  { light: "#CE1141", dark: "#CE1141" },        
  { light: "#009C3B", dark: "#00C44B" },        
  "text-cyan-500 dark:text-cyan-400",
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 30;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(t);
    }
  }, [charIndex, deleting, phraseIndex, phrases]);

  useEffect(() => {
    setDisplayed(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex, phrases]);

  return { displayed, phraseIndex };
}

export default function Hero() {
  const { displayed, phraseIndex } = useTypewriter(phrases);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const color = phraseColors[phraseIndex % phraseColors.length];
  const colorClass = typeof color === "string" ? color : "";
  const colorStyle: React.CSSProperties =
    typeof color === "object" && mounted
      ? { color: resolvedTheme === "dark" ? color.dark : color.light }
      : {};

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Kyle Ramachandran.
        </h1>
        <h2
          className={`text-3xl sm:text-5xl font-bold tracking-tight min-h-[1.2em] mb-6 transition-colors duration-500 ${colorClass}`}
          style={colorStyle}
        >
          {displayed}
          <span className="inline-block w-[3px] h-[0.85em] ml-1 mb-[-0.05em] bg-current animate-pulse" />
        </h2>
        <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
          I&apos;m a UC Berkeley EECS student (graduating 2027) specializing in
          full-stack engineering and AI applications. Currently interning at{" "}
          <a
            href="https://metafore.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Metafore
          </a>
          , previously at{" "}
          <a
            href="https://www.gaiv.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Global AI Village
          </a>{" "}
          and{" "}
          <a
            href="https://www.supa.so/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            SUPA
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:opacity-80 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
