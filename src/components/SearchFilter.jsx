import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SearchFilter = () => {
  const { t } = useTranslation();

  return (
    <div className="glass-panel p-4 md:p-6 rounded-2xl w-full max-w-4xl mx-auto -mt-16 relative z-20">
      <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('search.propertyType')}</label>
          <select className="w-full bg-transparent border-b border-gray-300 py-2 text-slate-800 focus:outline-none focus:border-dg-gold transition-colors appearance-none">
            <option>{t('search.allTypes')}</option>
            <option>{t('search.luxuryHouse')}</option>
            <option>{t('search.premiumPlot')}</option>
            <option>{t('search.villa')}</option>
          </select>
        </div>
        
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('search.location')}</label>
          <select className="w-full bg-transparent border-b border-gray-300 py-2 text-slate-800 focus:outline-none focus:border-dg-gold transition-colors appearance-none">
            <option>{t('search.allLocations')}</option>
            <option>{t('search.beverlyHills')}</option>
            <option>{t('search.malibu')}</option>
            <option>{t('search.belAir')}</option>
          </select>
        </div>
        
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{t('search.priceRange')}</label>
          <select className="w-full bg-transparent border-b border-gray-300 py-2 text-slate-800 focus:outline-none focus:border-dg-gold transition-colors appearance-none">
            <option>{t('search.anyPrice')}</option>
            <option>₹500k - ₹1M</option>
            <option>₹1M - ₹5M</option>
            <option>₹5M+</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <button type="submit" className="w-full md:w-auto bg-dg-dark hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded flex items-center justify-center gap-2 transition-colors">
            <Search className="w-5 h-5" />
            <span>{t('search.searchBtn')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
