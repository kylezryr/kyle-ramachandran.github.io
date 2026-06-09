"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const courseGroups = [
  {
    label: "Computer Science & Engineering",
    courses: [
      "CS 161 — Computer Security",
      "CS 162 — Operating Systems & System Programming",
      "CS 186 - Introduction to Database Systems",
      "CS 189 - Introduction to Machine Learning",
      "CS 61A — Structure & Interpretation of Computer Programs",
      "CS 61B — Data Structures",
      "CS 61C — Computer Architecture & Machine Structures",
      "EECS 16A - Designing Information Devices and Systems I",
      "EECS 16B - Designing Information Devices and Systems II",
      "PHYSICS 7A - Physics for Scientists and Engineers I",
      "PHYSICS 7B - Physics for Scientists and Engineers II",
    ],
  },
  {
    label: "Data Science",
    courses: [
      "DATA C8 - Foundations of Data Science",
      "DATA C100 - Principles & Techniques of Data Science",
    ],
  },
  {
    label: "Math & Theory",
    courses: [
      "CS 70 — Discrete Math & Probability",
      "CS 170 — Efficient Algorithms & Intractable Problems",
      "EECS 127 — Optimization Models in Engineering",
      "MATH 52 - Calculus II",
      "MATH 53 - Multivariable Calculus",
    ],
  },
  {
    label: "Other/Interdisciplinary",
    courses: [
      "DATA C104 - Human Contexts and Ethics of Data",
      "ENGLISH R1B - Reading and Composition: Automation and the Art of Writing",
      "HISTORY 7A - Introduction to the History of the United States: The United States from Settlement to Civil War",
      "MELC C26 - Introduction to Central Asia",
      "PBHLTH 116 - Seminar on Social, Political, and Ethical Issues in Health and Medicine",
      "SEASIAN R5A - Self, Representation, and Nation",
    ],
  },
];

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section id="education" className="bg-neutral-50 dark:bg-neutral-900/40">
      <div className="sticky top-14 z-10 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-blue-500 dark:text-blue-400 uppercase tracking-widest">
            02. Education
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10">
          Where I&apos;ve studied
        </h3>
        <FadeIn>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-200">
            {/* Main row */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div className="shrink-0">
                <p className="font-bold text-2xl text-neutral-900 dark:text-white">University of California, Berkeley</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  B.S. Electrical Engineering &amp; Computer Science
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Minor in Data Science
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">
                  Aug 2023 – May 2027
                </p>
              </div>

              <div className="h-px sm:h-16 w-full sm:w-px bg-neutral-200 dark:bg-neutral-700 shrink-0" />

              <div className="flex flex-wrap gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">GPA</p>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg">3.96</p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">Honors</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Dean&apos;s List</p>
                      <p className="text-neutral-500 dark:text-neutral-500 text-xs">Sp&apos;24, Fa&apos;24</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Honors to Date</p>
                      <p className="text-neutral-500 dark:text-neutral-500 text-xs">Sp&apos;24, Fa&apos;24, Fa&apos;25, Sp&apos;26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework dropdown */}
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 sm:px-8 py-4 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors"
              >
                <span>Relevant Coursework</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {open && (
                <div className="px-6 sm:px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {courseGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">
                        {group.label}
                      </p>
                      <ul className="space-y-1.5">
                        {group.courses.map((course) => (
                          <li key={course} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-500">▸</span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
