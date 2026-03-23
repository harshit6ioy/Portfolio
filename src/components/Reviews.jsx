import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Reviews() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aggarwalharshit865@gmail.com&su=New+Contact+from+${encodeURIComponent(name)}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-[var(--accent)] mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto bg-[var(--bg-secondary)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)] shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[var(--text-secondary)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[var(--text-secondary)]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 tracking-wide">Message</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all resize-none placeholder:text-[var(--text-secondary)]"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 mt-4 bg-[var(--accent)] text-[var(--bg-primary)] font-bold tracking-wide rounded-xl flex items-center justify-center space-x-2 transition-opacity hover:opacity-90"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 ml-2" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
