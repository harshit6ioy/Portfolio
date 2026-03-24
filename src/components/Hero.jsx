import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Details */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text-primary)]"
            >
              Harshit Aggarwal
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] mb-6"
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className=" mt-4 text-lg md:text-xl text-[var(--text-primary)] opacity-80 font-light leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Building scalable and efficient full-stack web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:aggarwalharshit865@gmail.com" 
                className="flex items-center px-6 py-3 text-sm font-medium rounded-full bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf" 
                download 
                className="flex items-center px-6 py-3 border border-[var(--border-color)] text-sm font-medium rounded-full text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex justify-center md:justify-start space-x-6"
            >
              <a href="https://github.com/harshit6ioy/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/harshitaggarwal7/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="tel:+917347698382" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <span className="sr-only">Phone</span>
                <Phone className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image in a BIG DIV */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative rounded-3xl overflow-hidden border-4 border-[var(--border-color)] shadow-2xl bg-[var(--bg-secondary)]"
            >
              <img
                src={profileImg}
                alt="Harshit Aggarwal"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
