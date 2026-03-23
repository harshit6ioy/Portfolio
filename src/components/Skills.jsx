import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "PHP", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "TailwindCSS"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "MongoDB"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Problem-Solving", "Communication", "Adaptability"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-neutral-900 dark:bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 shadow-sm hover:shadow-md border border-neutral-200 dark:border-neutral-800 transition-all"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm font-medium transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
