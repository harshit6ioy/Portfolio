import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "CreditBridge – Direct Digital Lending Platform",
    description: "Built a secure MERN-based lending system featuring KYC verification, credit evaluation, and an optimized admin dashboard.",
    highlights: [
      "Optimized MongoDB queries for scale",
      "Admin dashboard in React + Tailwind",
      "Robust KYC processing flow"
    ],
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    github: "https://github.com/harshit6ioy/creditbridge", // mock link
    live: "#"
  },
  {
    title: "NoteCraft – Full Stack Notes Application",
    description: "Developed a comprehensive MERN-based notes application supporting authentication, rich CRUD operations, and responsive design.",
    highlights: [
      "Secure user authentication",
      "Responsive UI with Tailwind CSS",
      "Modular backend architecture"
    ],
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    github: "https://github.com/harshit6ioy/notecraft", // mock link
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-neutral-900 dark:bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <a href={project.github} className="flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} className="flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
