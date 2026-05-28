import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PropertyCard = ({ id, title, price, location, type, size, beds, baths, image, status }) => {
  const { t } = useTranslation();

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-dg-dark text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            {type}
          </span>
          {status && (
            <span className="bg-dg-gold text-dg-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              {status}
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-dg-gold font-serif text-2xl font-bold">₹{price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-serif text-xl font-bold text-dg-dark mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-dg-gold" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 mt-auto">
          {size && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Maximize className="w-4 h-4 text-dg-gold" />
              <span>{size} {t('property.sqft')}</span>
            </div>
          )}
          {beds && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BedDouble className="w-4 h-4 text-dg-gold" />
              <span>{beds} {t('property.beds')}</span>
            </div>
          )}
          {baths && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Bath className="w-4 h-4 text-dg-gold" />
              <span>{baths} {t('property.baths')}</span>
            </div>
          )}
        </div>
        
        <Link 
          to={`/property/${id}`}
          className="mt-6 block w-full text-center border-2 border-dg-dark text-dg-dark hover:bg-dg-dark hover:text-white font-medium py-2 rounded transition-colors"
        >
          {t('home.exploreBtn')}
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
