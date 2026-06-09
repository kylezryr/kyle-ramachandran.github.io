const interests = [
  {
    emoji: "🥋",
    label: "Taekwondo",
    detail: "3rd-degree black belt",
  },
  {
    emoji: "🧗",
    label: "Climbing",
    detail: "Bouldering at a V3+ level",
  },
  {
    emoji: "🥊",
    label: "Kickboxing & MMA",
    detail: "Combat sports enthusiast",
  },
  {
    emoji: "🏀",
    label: "Basketball",
    detail: "Intramural player & Raptors fan",
  },
  {
    emoji: "🎸",
    label: "Guitar",
    detail: "Trinity Grade 5 Classical Guitarist",
  },
  {
    emoji: "🎬",
    label: "Film",
    detail: "Cinephile & Letterboxd user",
  },
  {
    emoji: "🌏",
    label: "Languages",
    detail: "English, Malay, Mandarin",
  },
  {
    emoji: "✈️",
    label: "Travel",
    detail: "15 countries and counting",
  },
];

import FadeIn from "./FadeIn";

export default function Interests() {
  return (
    <section id="interests">
      <div className="sticky top-14 z-10 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            06. Beyond the code
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          A bit about me
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mb-10 leading-relaxed">
          When I&apos;m not building software, you&apos;ll find me on a
          climbing wall, a basketball court, or in the dojang. I grew up in Malaysia and
          studied the US, which shapes how I think about technology and the people who
          use it.
        </p>
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interests.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
              >
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <p className="font-semibold text-sm text-neutral-900 dark:text-white">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
