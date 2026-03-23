import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Harshit Aggarwal
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/harshit6ioy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/harshitaggarwal7/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:harshitaggarwal865@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Harshit Aggarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
