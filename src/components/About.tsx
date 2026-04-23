import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white shadow-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                alt="Modern Dental Consultation Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sky-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Our Commitment</span>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of Care in <br/>the <span className="text-sky-700">Heart of the City.</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Serving the community for over two decades, DENTIST Clinic & Aesthetics combines state-of-the-art technology with a personalized approach that makes every visit comfortable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Digital X-Ray Systems',
                'Advanced Oral Surgery',
                'Cosmetic Aesthetics',
                'Emergency Treatment'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 italic text-lg leading-relaxed">
                "Our practice is built on the same values as our community: strength, integrity, and trust."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
