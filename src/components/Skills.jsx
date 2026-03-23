import { motion } from 'framer-motion';

const techStack = [
  { name: "Java", icon: "java" },
  { name: "JavaScript", icon: "js" },
  { name: "PHP", icon: "php" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "ReactJS", icon: "react" },
  { name: "NodeJS", icon: "nodejs" },
  { name: "ExpressJS", icon: "express" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
  { name: "VS Code", icon: "vscode" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--accent)] mb-6">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex border border-[var(--border-color)] items-center gap-4 bg-[var(--bg-secondary)] rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <img 
                src={`https://skillicons.dev/icons?i=${tech.icon}`} 
                alt={`${tech.name} icon`} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-base md:text-lg font-medium text-[var(--text-primary)] tracking-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
