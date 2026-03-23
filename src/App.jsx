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
    <div className="min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-neutral-900 dark:selection:text-neutral-100">
      <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Harshit Aggarwal
            </span>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-6">
                <a href="#skills" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
                <a href="#experience" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Experience</a>
                <a href="#contact" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors ring-1 ring-neutral-200 dark:ring-neutral-800"
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
