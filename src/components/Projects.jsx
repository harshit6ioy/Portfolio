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
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a href={project.github} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
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
