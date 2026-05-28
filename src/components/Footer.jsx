import { Building2, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-dg-dark text-gray-300 overflow-hidden mt-auto">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dg-dark via-dg-dark/95 to-dg-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-dg-gold" />
              <span className="font-serif text-2xl font-bold text-white tracking-wider">{t('navbar.brand')}</span>
            </div>
            <p className="text-sm leading-relaxed mt-4 text-gray-400">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dg-gold hover:border-dg-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 font-semibold">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dg-gold hover:border-dg-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 font-semibold">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dg-gold hover:border-dg-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 font-semibold">X</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-dg-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link to="/plots" className="text-gray-400 hover:text-dg-gold hover:translate-x-1 inline-block transition-all duration-300">{t('navbar.plots')}</Link></li>
              <li><Link to="/houses" className="text-gray-400 hover:text-dg-gold hover:translate-x-1 inline-block transition-all duration-300">{t('navbar.houses')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-dg-gold hover:translate-x-1 inline-block transition-all duration-300">{t('navbar.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-dg-gold hover:translate-x-1 inline-block transition-all duration-300">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-dg-gold">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-dg-gold shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-dg-gold shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@dgplots.com" className="text-gray-400 group-hover:text-white transition-colors duration-300">info@dgplots.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/15551234567" className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white px-4 py-2 rounded-lg border border-green-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 bg-dg-gold/10 hover:bg-dg-gold text-dg-gold hover:text-dg-dark px-4 py-2 rounded-lg border border-dg-gold/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Call Us</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-dg-gold">{t('footer.newsletter')}</h4>
            <p className="text-sm mb-4 text-gray-400">{t('footer.newsletterDesc')}</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg focus:outline-none focus:border-dg-gold transition-colors duration-300"
              />
              <button type="submit" className="bg-dg-gold hover:bg-dg-gold-light text-dg-dark font-semibold py-3 rounded-lg transition-colors duration-300">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-dg-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dg-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
