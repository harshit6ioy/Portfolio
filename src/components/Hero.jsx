import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl"
          >
            <img
              src={profileImg}
              alt="Harshit Aggarwal"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-emerald-400">
              Harshit Aggarwal
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400"
          >
            "Building scalable and efficient full-stack web applications"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="mailto:aggarwalharshit856@gmail.com" className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <Mail className="mr-2 -ml-1 h-5 w-5" />
              Email Me
            </a>
            <a href="/resume.pdf" download className="flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              <Download className="mr-2 -ml-1 h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a href="https://github.com/harshit6ioy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/harshitaggarwal7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="tel:+917347698382" className="text-slate-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
              <span className="sr-only">Phone</span>
              <Phone className="h-8 w-8" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 dark:from-blue-900/20 to-transparent -z-10" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:bg-blue-600 animate-blob" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:bg-emerald-600 animate-blob animation-delay-2000" />
    </section>
  );
}
