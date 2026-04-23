import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 px-8 py-10 text-[11px] text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© {currentYear} DENTIST Clinic & Aesthetics. All Rights Reserved.</p>
        <div className="flex gap-8 uppercase tracking-[0.2em] font-bold text-[10px]">
          <a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sky-600 transition-colors">Patient Forms</a>
          <a href="#" className="hover:text-sky-600 transition-colors">ADA Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
