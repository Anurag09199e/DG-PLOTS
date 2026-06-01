import { MapPin, Maximize, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PlotCard = ({ id, title, price, location, size, image }) => {
  const { t } = useTranslation();

  const calculateEMI = (price) => {
    const principal = price * 0.8;
    const ratePerMonth = 6.5 / 12 / 100;
    const totalMonths = 360;
    return Math.round((principal * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) / (Math.pow(1 + ratePerMonth, totalMonths) - 1));
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-dg-dark text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
            {t('plotCard.plot')}
          </span>
          <span className="bg-dg-gold text-dg-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
            {t('plotCard.premium')}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-dg-gold font-serif text-2xl font-bold">₹{price.toLocaleString()}</p>
          <p className="text-gray-300 text-sm flex items-center gap-1 mt-1 font-medium">
            <Calculator className="w-4 h-4" /> {t('plotCard.estEmi')}: ₹{calculateEMI(price).toLocaleString()}/{t('plotCard.mo')}
          </p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-serif text-xl font-bold text-dg-dark mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-dg-gold" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="grid grid-cols-1 gap-4 pt-4 border-t border-gray-100 mt-auto">
          {size && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Maximize className="w-4 h-4 text-dg-gold" />
              <span className="font-medium">{size} Sq. Ft.</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-3 mt-6">
          <Link 
            to={`/plot/${id}`}
            className="flex-1 flex justify-center items-center bg-dg-gold text-dg-dark hover:bg-yellow-500 font-bold py-3 rounded transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            {t('plotCard.viewDetails')}
          </Link>
          <Link 
            to={`/plot/${id}`}
            onClick={(e) => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="flex-1 flex justify-center items-center gap-2 border-2 border-dg-gold text-dg-gold hover:bg-dg-gold hover:text-dg-dark font-bold py-3 rounded transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            <Calculator className="w-5 h-5" /> {t('plotCard.emi')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlotCard;
