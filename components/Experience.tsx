type Role = {
  title: string;
  period: string;
  bullets: string[];
};

type CompanyEntry = {
  company: string;
  href: string;
  location: string;
  roles: Role[];
};

const workExperiences: CompanyEntry[] = [
  {
    company: "Metafore",
    href: "https://metafore.ai",
    location: "San Francisco, CA",
    roles: [
      {
        title: "Artificial Intelligence Intern",
        period: "May 2026 – July 2026",
        bullets: [
          "Built a supply-chain disruption-recovery agent demo, specifying a 14-entity data model and implementing 4 integration workflows.",
          "Developed a React-based AI operations center for a 2,600-ATM banking fleet, designing 13 panels and 5 incident-response scenarios.",
          "Authored a voice-agent test suite and evaluated a 23-turn unscripted call, uncovering accuracy, grounding, and UX failures.",
          "Documented reproducible agent failure modes and platform defects, producing QA reports used to triage and prioritize fixes.",
        ],
      },
    ],
  },
  {
    company: "Global AI Village (GAIV)",
    href: "https://www.gaiv.my/",
    location: "Kuala Lumpur, Malaysia",
    roles: [
      {
        title: "Part-Time Software Engineer",
        period: "Jan 2026 – May 2026",
        bullets: [
          "Extended production AI-powered agricultural tools with modular frontend and backend components across development environments.",
          "Standardized component structure and build configuration across environments, reducing inconsistencies and simplifying maintenance.",
          "Designed integration patterns for LLM APIs, MQTT events, and user data across AI-assisted chatbot and admin workflows.",
        ],
      },
      {
        title: "Software Development Intern",
        period: "Jun 2025 – Aug 2025",
        bullets: [
          "Engineered full-stack web interfaces for an AI-powered chatbot assisting ~800 farmers in Malaysia's agriculture sector.",
          "Integrated audio and image transcription using Gemini and OpenAI APIs, enabling multimodal chat interaction.",
          "Increased user onboarding speed by 50% by building onboarding flows and integrating MQTT protocols.",
          "Built admin tools to review chat history, manage 50+ user profiles, and visualize data via interactive Neo4j graphs.",
        ],
      },
    ],
  },
  {
    company: "SUPA",
    href: "https://www.supa.so/",
    location: "Kuala Lumpur, Malaysia",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "May 2024 – Aug 2024",
        bullets: [
          "Shipped frontend features and backend enhancements for SaaS platforms using React and TypeScript.",
          "Researched and prototyped custom YOLOv8 computer vision models, evaluating accuracy and feasibility for production.",
          "Authored technical documentation and onboarding guides, reducing ramp-up time for incoming engineers.",
        ],
      },
    ],
  },
];

const leadershipExperiences: CompanyEntry[] = [
  {
    company: "Blueprint, Technology for Nonprofits",
    href: "https://calblueprint.org",
    location: "Berkeley, CA",
    roles: [
      {
        title: "President",
        period: "Dec 2025 – June 2026",
        bullets: [
          "Led strategy, budgeting, and operations for a 45+ member organization, including a recruitment process spanning ~200 applicants.",
          "Launched Blueprint's chapter expansion to McMaster University, growing the organization's presence across North America.",
          "Secured sponsorship partnerships and organized a fireside chat with engineers from Ramp, strengthening alumni and industry ties.",
        ],
      },
      {
        title: "VP of Technology",
        period: "May 2025 – Dec 2025",
        bullets: [
          "Rebuilt the club website with Next.js and Tailwind, replacing legacy HTML/CSS/Ruby code, simplifying future development.",
          "Advised project teams and mentored 8 new developers via implementation planning, technical coaching, and GitHub PR feedback.",
          "Sourced 5 nonprofit clients by conducting stakeholder interviews and designing rubrics for project scope, feasibility, and impact.",
        ],
      },
      {
        title: "Project Lead",
        period: "Jan 2025 – May 2025",
        bullets: [
          "Led 4-5 developers and 1 designer to deliver a full-stack web app through roadmaps, weekly sprints, demos, and client feedback.",
          "Served as the primary client liaison, conducting user interviews, demos, and code reviews to refine product needs and user flows.",
        ],
      },
    ],
  },
  {
    company: "Malaysian Students Association (MASA) at UC Berkeley",
    href: "https://www.instagram.com/masaberkeley/",
    location: "Berkeley, CA",
    roles: [
      {
        title: "President",
        period: "May 2025 – Dec 2025",
        bullets: [
          "Led a 40+ member cultural organization representing Malaysian students at UC Berkeley, overseeing operations, events, and executive board coordination.",
          "Organized a networking dinner bringing together MASA alumni, current members, and incoming freshmen to build community across class years.",
          "Planned and executed flagship cultural events including cultural nights and social mixers, growing attendance and member engagement.",
          "Progressed through club leadership from Internal Affairs Officer (Fall 2024) to Vice President (Spring 2025) before serving as President.",
        ],
      },
    ],
  },
];

function ExperienceList({ items }: { items: CompanyEntry[] }) {
  return (
    <div className="space-y-12">
      {items.map((entry) => (
        <div key={entry.company} className="grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-8 rounded-xl p-4 -mx-4 hover:bg-white dark:hover:bg-neutral-800/60 hover:shadow-sm transition-all duration-200">
          {/* Left: company info */}
          <div>
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4"
            >
              {entry.company}
            </a>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-0.5">{entry.location}</p>
          </div>

          {/* Right: roles */}
          <div className="space-y-6">
            {entry.roles.map((role) => (
              <div key={role.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-3">
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{role.title}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">{role.period}</p>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="mt-1 shrink-0 text-neutral-400">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-50 dark:bg-neutral-900/40">
      <div className="sticky top-14 z-10 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            Experience
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">
          Where I&apos;ve worked
        </h3>

        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            Work Experience
          </p>
          <FadeIn>
            <ExperienceList items={workExperiences} />
          </FadeIn>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            Leadership &amp; Campus Involvement
          </p>
          <FadeIn delay={150}>
            <ExperienceList items={leadershipExperiences} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
