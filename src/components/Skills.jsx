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
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
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
