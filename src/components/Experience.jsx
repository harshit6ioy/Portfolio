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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6"
          >
            Background & Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[var(--accent)] mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Education & Achievements */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm hover:border-opacity-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-[var(--bg-primary)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-[var(--border-color)] group-hover:border-[var(--text-secondary)] transition-colors">
                    <div className="absolute w-4 h-4 bg-[var(--accent)] rounded-full -left-[9px] top-1 shadow-[0_0_10px_var(--accent)]" />
                    <h4 className="text-xl font-bold text-[var(--text-primary)]">{item.degree}</h4>
                    <div className="text-[15px] font-medium text-[var(--accent)] mt-1 tracking-wide">
                      {item.institution}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mt-2 font-medium bg-[var(--bg-primary)] inline-block px-3 py-1 rounded-full border border-[var(--border-color)]">
                      {item.score} {item.timeline && <span className="mx-1">•</span>} {item.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-[var(--bg-primary)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Achievements</h3>
              </div>
              <ul className="space-y-5">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-[var(--text-primary)] font-medium leading-relaxed opacity-90 p-4 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors">
                    <span className="text-[var(--accent)] mr-4 text-xl leading-none">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Training & Certifications */}
          <div className="space-y-8 md:space-y-12 mt-8 lg:mt-16">
            
            {/* Training Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-[var(--bg-primary)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Training</h3>
              </div>
              <div className="space-y-8">
                {training.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-[var(--border-color)] group-hover:border-[var(--text-secondary)] transition-colors">
                    <div className="absolute w-4 h-4 bg-[var(--accent)] rounded-full -left-[9px] top-1 shadow-[0_0_10px_var(--accent)]" />
                    <h4 className="text-xl font-bold text-[var(--text-primary)]">{item.role}</h4>
                    <div className="text-[15px] text-[var(--accent)] font-medium mt-1 tracking-wide">
                      {item.company}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mt-2 mb-4 font-medium bg-[var(--bg-primary)] inline-block px-3 py-1 rounded-full border border-[var(--border-color)]">
                      {item.duration}
                    </div>
                    <ul className="space-y-3 text-[var(--text-primary)] opacity-90 mt-2 bg-[var(--bg-primary)] p-4 rounded-2xl border border-[var(--border-color)]">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex leading-relaxed text-sm lg:text-base">
                          <span className="mr-3 text-[var(--accent)] font-bold">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-[var(--bg-primary)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Certifications</h3>
              </div>
              <ul className="space-y-4 text-[var(--text-primary)] opacity-90">
                {certifications.map((item, i) => (
                  <li key={i} className="flex items-center p-4 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-300 hover:translate-x-1">
                    <span className="text-[var(--accent)] mr-4 text-xl leading-none">•</span>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[var(--accent)] transition-colors w-full flex justify-between items-center">
                        {item.name}
                        <span className="text-[var(--text-secondary)] text-xs ml-2 border border-[var(--border-color)] px-2 py-1 rounded-md">View</span>
                      </a>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
