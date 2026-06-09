const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C", "Rust", "Golang", "HTML/CSS", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "React Native", "Expo", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Infra & Tools",
    skills: ["Supabase", "Firebase", "AWS", "Google Cloud", "Docker", "Vercel", "Nginx", "Git/GitHub", "Neo4j", "MQTT"],
  },
  {
    label: "AI / ML",
    skills: ["OpenAI API", "Gemini API", "numpy", "YOLOv8", "Agentic Workflows"],
  },
];

import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-50 dark:bg-neutral-900/40">
      <div className="sticky top-14 z-10 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-sm px-6">
        <div className="max-w-5xl mx-auto py-3">
          <h2 className="text-sm font-mono text-blue-500 dark:text-blue-400 uppercase tracking-widest">
            05. Skills
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">
          What I work with
        </h3>
        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-blue-500 hover:scale-105 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
