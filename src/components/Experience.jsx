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
    <section id="experience" className="py-16 md:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
            Background & Experience
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] mx-auto" />
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
              <Briefcase className="w-8 h-8 text-[var(--accent)]" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Training</h3>
            </div>
            <div className="space-y-8">
              {training.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-[var(--border-color)]">
                  <div className="absolute w-4 h-4 bg-[var(--accent)] rounded-full -left-[9px] top-1.5" />
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">{item.role}</h4>
                  <div className="text-sm text-[var(--text-secondary)] font-medium mb-3 mt-1">
                    {item.company} | {item.duration}
                  </div>
                  <ul className="space-y-2 text-[var(--text-primary)] opacity-90">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex leading-relaxed">
                        <span className="mr-3 text-[var(--accent)]">—</span>
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
              <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
              <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-[var(--border-color)]">
                  <div className="absolute w-4 h-4 bg-[var(--accent)] rounded-full -left-[9px] top-1.5" />
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">{item.degree}</h4>
                  <div className="text-sm font-medium text-[var(--text-secondary)] mt-1">
                    {item.institution}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mb-2 font-medium opacity-80">
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
            <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-6 h-6 text-[var(--accent)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-[var(--text-primary)] font-medium leading-relaxed opacity-90">
                    <span className="text-[var(--accent)] mr-3">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Certifications */}
            <div className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-6 h-6 text-[var(--accent)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">Certifications</h3>
              </div>
              <ul className="space-y-4 text-[var(--text-primary)] opacity-90">
                {certifications.map((item, i) => (
                  <li key={i} className="flex items-start font-medium leading-relaxed">
                    <span className="text-[var(--accent)] mr-3">—</span>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] underline decoration-[var(--border-color)] underline-offset-4 transition-colors">
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
