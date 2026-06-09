"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

type ThemeOption = "system" | "light" | "dark";
const cycle: ThemeOption[] = ["system", "light", "dark"];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const icons: Record<ThemeOption, React.ReactNode> = {
  system: <SystemIcon />,
  light: <SunIcon />,
  dark: <MoonIcon />,
};

const labels: Record<ThemeOption, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const current = (theme as ThemeOption) ?? "system";
  const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${labels[next]} mode`}
      title={`${labels[current]} — click for ${labels[next]}`}
      className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
    >
      {icons[current]}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" aria-label="Back to top"
          className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            <polyline points="9 21 9 12 15 12 15 21" />
          </svg>
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:opacity-80 transition-opacity">
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle />
          <button className="p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className="w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200 mb-1" />
            <div className="w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200 mb-1" />
            <div className="w-5 h-0.5 bg-neutral-800 dark:bg-neutral-200" />
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="self-start px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
