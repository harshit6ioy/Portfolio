import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Harshit Aggarwal
            </h2>
            <p className="mt-2 text-[var(--text-secondary)]">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/harshit6ioy/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/harshitaggarwal7/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aggarwalharshit865@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm font-medium text-[var(--text-secondary)] opacity-80">
          <p>© {currentYear} Harshit Aggarwal.</p>
        </div>
      </div>
    </footer>
  );
}
