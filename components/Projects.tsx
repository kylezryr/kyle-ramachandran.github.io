const projects = [
  {
    title: "Grow Together",
    description:
      'Progressive web application that serves as a "digital twin"/management platform for gardens in food insecure communities in Tennessee and Mississippi. Helps individuals, schools, and small communities establish and maintain their own gardens. Built as Blueprint Project Lead, working with the Trap Garden non-profit, managing 4–5 developers and 1 designer end-to-end.',
    tags: ["React", "Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/calblueprint/trap-garden",
    live: "https://growtogetherhub.vercel.app/",
  },
  {
    title: "Girls Write Now",
    description:
      "Mobile app for reading, discovering, and interacting with stories by women supported by the Girls Write Now nonprofit. Features story search and filtering, personalized recommendations, bookmarking, and reactions. Built as Blueprint Project Developer, and built out front end flows and the recommendation algorithm.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    github: "https://github.com/calblueprint/girls-write-now",
    live: "https://apps.apple.com/us/app/girls-write-now/id6473566568",
  },
  {
    title: "Rakan Tani",
    description:
      "Built internal full-stack platform for testing and monitoring an AI-powered WhatsApp-based chatbot serving ~800 farmers in Malaysia. Includes admin tools, Neo4j graph visualization, and MQTT-based onboarding flows. Worked on the chatbot's multimodal chat feature (audio + image transcription via Gemini and OpenAI) as a Software Engineering Intern at Global AI Village, collaborating closely with the Malaysian government and agriculture experts.",
    tags: ["React", "Node.js", "Gemini API", "OpenAI", "Neo4j", "MQTT"],
    github: null,
    live: "https://www.malaymail.com/news/malaysia/2026/03/24/govt-rolls-out-rakan-tani-ai-farming-tool-to-boost-yields-cut-rice-import-gap-by-2030/213640",
  },
];

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects">
      <div className="sticky top-14 z-10 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            04. Projects
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">
          Things I&apos;ve built
        </h3>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors bg-white dark:bg-neutral-900/20">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-neutral-900 dark:text-white text-lg">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-neutral-500 dark:text-neutral-400">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 hover:scale-105 transition-all duration-150 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
