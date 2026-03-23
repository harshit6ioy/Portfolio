import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]">
      <nav className="fixed w-full z-50 top-0 bg-[var(--bg-primary)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Harshit Aggarwal
            </span>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-6">
                <a href="#skills" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Skills</a>
                <a href="#projects" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Projects</a>
                <a href="#experience" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Experience</a>
                <a href="#contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Contact</a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors ring-1 ring-[var(--border-color)]"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;
