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
    <section id="contact" className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-neutral-900 dark:bg-white mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white outline-none transition-all placeholder:text-neutral-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white outline-none transition-all placeholder:text-neutral-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 tracking-wide">Message</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white outline-none transition-all resize-none placeholder:text-neutral-400"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 mt-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold tracking-wide rounded-xl flex items-center justify-center space-x-2 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
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
