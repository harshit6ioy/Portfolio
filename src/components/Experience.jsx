import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const training = [
  {
    role: "MERN Full Stack Trainee",
    company: "CipherSchools",
    duration: "Jun 2025 – Jul 2025",
    bullets: [
      "Built full-stack applications with optimal configurations",
      "Worked extensively on REST APIs, authentication flows, and state management",
      "Improved problem-solving and cross-functional team collaboration skills"
    ]
  }
];

const education = [
  {
    degree: "B.Tech CSE",
    institution: "Lovely Professional University",
    score: "CGPA: 8.50",
    timeline: "Since Aug 2023"
  },
  {
    degree: "Intermediate",
    institution: "Police D.A.V Public School",
    score: "87.2%",
    timeline: ""
  },
  {
    degree: "Matriculation",
    institution: "St. Joseph’s Convent School",
    score: "94.4%",
    timeline: ""
  }
];

const certifications = [
  { name: "Cloud Computing – NPTEL", url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730145004228456.pdf" },
  { name: "Bits and Bytes of Computer Networking – Google (Coursera)", url: "https://www.coursera.org/account/accomplishments/certificate/Y84PL53IDIUA" },
  { name: "Data Structures and Algorithms – IamNeo", url: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2ByZBF5NGYjam7NKOmyiuUjwg8wVEag%2FLQ%3D" },
  { name: "Full Stack Web Development – G.T.B Institute", url: "https://drive.google.com/file/d/1BJ3Zzsp2WiGOABf4eATGVODoTWuQCYnR/view" },
  { name: "C++ Programming – G.T.B Institute", url: "https://drive.google.com/file/d/1ZF_h41AUYR22tLY7d70D4fhpnV6-l3mN/view?usp=sharing" }
];

const achievements = [
  "1st Position – Prompt Builders 2025 (AWS Powered)",
  "2nd Rank – Web-e-Stan 2.0 (LPU)"
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Background & Experience
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Training */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Training</h3>
            </div>
            <div className="space-y-8">
              {training.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-3 mt-1">
                    {item.company} | {item.duration}
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-blue-500">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                    {item.institution}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">
                    {item.score} {item.timeline && ` | ${item.timeline}`}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"
          >
            {/* Achievements */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 font-medium">
                    <span className="text-yellow-500 mr-3">❖</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Certifications */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              </div>
              <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                {certifications.map((item, i) => (
                  <li key={i} className="flex items-start font-medium">
                    <span className="text-purple-500 mr-3">❖</span>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors">
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
