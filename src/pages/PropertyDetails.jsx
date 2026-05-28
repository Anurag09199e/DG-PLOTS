import { useParams } from 'react-router-dom';
import { MapPin, Maximize, BedDouble, Bath, Check, Phone, Mail } from 'lucide-react';
import EMICalculator from '../components/EMICalculator';
import { useTranslation } from 'react-i18next';

const PropertyDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // Mock property data
  const property = {
    id: id,
    title: t('propertiesData.p1_title'),
    price: 5500000,
    location: t('propertiesData.p1_loc'),
    type: t('propertiesData.p1_type'),
    size: 8500,
    beds: 6,
    baths: 7.5,
    description: t('propertiesData.p1_desc'),
    features: [t('featuresData.f1'), t('featuresData.f2'), t('featuresData.f3'), t('featuresData.f4'), t('featuresData.f5'), t('featuresData.f6')],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd802404?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-dg-light pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-dg-dark text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">{property.type}</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">{t('property.forSale')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-dg-dark mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-5 h-5 mr-1 text-dg-gold" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <p className="text-dg-gold font-serif text-4xl font-bold">₹{property.price.toLocaleString()}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 h-[400px] md:h-[600px] rounded-xl overflow-hidden">
            <img src={property.images[0]} alt="Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-[400px] md:h-[600px]">
            <div className="rounded-xl overflow-hidden">
              <img src={property.images[1]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-xl overflow-hidden relative group">
              <img src={property.images[2]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <span className="text-white font-semibold text-lg">{t('property.viewAllPhotos')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Specs */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center flex-wrap gap-4">
              {property.size && (
                <div className="flex flex-col items-center p-4">
                  <Maximize className="w-8 h-8 text-dg-gold mb-2" />
                  <span className="font-bold text-dg-dark text-xl">{property.size}</span>
                  <span className="text-gray-500 text-sm">{t('property.squareFeet')}</span>
                </div>
              )}
              {property.beds && (
                <div className="flex flex-col items-center p-4 border-l border-gray-100 pl-8">
                  <BedDouble className="w-8 h-8 text-dg-gold mb-2" />
                  <span className="font-bold text-dg-dark text-xl">{property.beds}</span>
                  <span className="text-gray-500 text-sm">{t('property.bedrooms')}</span>
                </div>
              )}
              {property.baths && (
                <div className="flex flex-col items-center p-4 border-l border-gray-100 pl-8">
                  <Bath className="w-8 h-8 text-dg-gold mb-2" />
                  <span className="font-bold text-dg-dark text-xl">{property.baths}</span>
                  <span className="text-gray-500 text-sm">{t('property.bathrooms')}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-dg-dark mb-4">{t('property.aboutProperty')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-dg-dark mb-4">{t('property.features')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-dg-gold/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-dg-gold" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EMI Calculator */}
            <EMICalculator propertyPrice={property.price} />

          </div>

          {/* Sidebar / Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 sticky top-28">
              <h3 className="text-xl font-serif font-bold text-dg-dark mb-6">{t('property.inquireAbout')}</h3>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-dg-dark">James Harrison</p>
                  <p className="text-sm text-gray-500">{t('property.agentTitle')}</p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder={t('property.namePlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
                </div>
                <div>
                  <input type="tel" placeholder={t('property.phonePlaceholder')} className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
                </div>
                <div>
                  <textarea placeholder={t('property.messagePlaceholder')} rows="4" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors"></textarea>
                </div>
                <button className="w-full btn-primary py-3">{t('property.sendMsg')}</button>
              </form>

              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+15551234567" className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2 rounded hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4" /> {t('property.callAgent')}
                </a>
                <a href="mailto:james@dgplots.com" className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2 rounded hover:bg-gray-50 transition-colors">
                  <Mail className="w-4 h-4" /> {t('property.emailAgent')}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;
