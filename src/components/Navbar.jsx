import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.plots'), path: '/plots' },
    { name: t('navbar.houses'), path: '/houses' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${!isTransparent ? 'bg-dg-dark shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className={`w-8 h-8 text-dg-gold`} />
            <span className={`font-serif text-2xl font-bold tracking-wider ${!isTransparent ? 'text-white' : 'text-dg-dark lg:text-white'}`}>{t('navbar.brand')}</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-dg-gold' 
                    : !isTransparent ? 'text-gray-300 hover:text-dg-gold' : 'text-gray-800 lg:text-gray-200 hover:text-dg-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-base font-bold tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${!isTransparent ? 'border-dg-gold text-dg-gold hover:bg-dg-gold hover:text-dg-dark' : 'border-dg-dark text-dg-dark hover:bg-dg-dark hover:text-white lg:border-white lg:text-white lg:hover:bg-white lg:hover:text-dg-dark'}`}
            >
              <Globe className="w-5 h-5" />
              {i18n.language === 'en' ? 'हिंदी (HI)' : 'ENGLISH (EN)'}
            </button>

            <button className="btn-primary py-2 px-6 text-sm">
              {t('navbar.inquire')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${!isTransparent ? 'text-white' : 'text-dg-dark'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dg-dark absolute w-full shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path ? 'text-dg-gold bg-slate-800' : 'text-gray-300 hover:text-dg-gold hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <button 
                onClick={() => { toggleLanguage(); setIsOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-dg-gold hover:bg-slate-800"
              >
                <Globe className="w-5 h-5" />
                {i18n.language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              </button>

              <div className="pt-4">
                <button className="w-full btn-primary py-3">{t('navbar.inquire')}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
