import { useParams } from 'react-router-dom';
import { MapPin, Maximize, Check, Phone, MessageCircle, Calendar } from 'lucide-react';
import EMICalculator from '../components/EMICalculator';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PlotDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Mock plot data based on ID (or just generic data for demo)
  const plot = {
    id: id,
    title: t('plotDetails.mockTitle'),
    price: 3500000,
    location: t('plotDetails.mockLoc'),
    type: t('plotCard.plot'),
    size: 2400,
    description: t('plotDetails.mockDesc'),
    features: [
      t('featuresData.f7'), 
      t('featuresData.f8'), 
      t('featuresData.f9'), 
      t('featuresData.f10'), 
      t('featuresData.f11'), 
      t('featuresData.f12'), 
      t('featuresData.f13'), 
      t('featuresData.f14'), 
      t('featuresData.f15')
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-dg-light pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Special Investment Offer Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-dg-gold to-yellow-600 rounded-xl p-1 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <div className="bg-dg-dark rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div>
              <div className="inline-block bg-dg-gold/20 text-dg-gold px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-dg-gold/30">
                {t('plotDetails.exclusiveOffer')}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('plotDetails.buybackTitle')}</h2>
              <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                {t('plotDetails.buybackDesc')} <strong className="text-dg-gold">{t('plotDetails.buybackHighlight')}</strong>.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="text-5xl" role="img" aria-label="trophy">🏆</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-dg-dark text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md">{plot.type}</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">{t('plotDetails.forSale')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-dg-dark mb-2">{plot.title}</h1>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-5 h-5 mr-1 text-dg-gold" />
              <span className="font-medium">{plot.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">{t('plotDetails.startingPrice')}</p>
            <p className="text-dg-gold font-serif text-4xl font-bold">₹{plot.price.toLocaleString()}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lg relative group">
            <img src={plot.images[0]} alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="grid grid-rows-2 gap-4 h-[400px] md:h-[600px]">
            <div className="rounded-xl overflow-hidden shadow-lg relative group">
              <img src={plot.images[1]} alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="rounded-xl overflow-hidden relative group shadow-lg cursor-pointer">
              <img src={plot.images[2]} alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-dg-dark transition-colors duration-300">{t('plotDetails.viewGallery')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Specs */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-center items-center">
              <div className="flex flex-col items-center p-4">
                <Maximize className="w-10 h-10 text-dg-gold mb-3" />
                <span className="font-bold text-dg-dark text-2xl">{plot.size}</span>
                <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mt-1">{t('property.squareFeet')}</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-dg-dark mb-4 border-b border-gray-100 pb-4">{t('plotDetails.aboutPlot')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {plot.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-dg-dark mb-6 border-b border-gray-100 pb-4">{t('plotDetails.keyFeatures')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {plot.features.map((feature, idx) => (
                  <motion.div 
                    whileHover={{ x: 5 }}
                    key={idx} 
                    className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-dg-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-green-100 p-2 rounded-full shadow-sm">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-800 font-semibold">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EMI Calculator */}
            <EMICalculator propertyPrice={plot.price} />

          </div>

          {/* Sidebar / Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 sticky top-28 transform transition-transform hover:-translate-y-1 duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-dg-dark mb-2">{t('plotDetails.interestedTitle')}</h3>
                <p className="text-gray-500 text-sm">{t('plotDetails.interestedDesc')}</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-dg-dark text-white py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg group">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  {t('plotDetails.bookVisit')}
                </button>
                
                <button className="w-full bg-dg-gold text-dg-dark py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-yellow-500 transition-colors shadow-lg group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  {t('plotDetails.callNow')}
                </button>
                
                <button className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors shadow-lg group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  {t('plotDetails.whatsapp')}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden border-2 border-dg-gold shadow-md">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-dg-dark text-lg">James Harrison</p>
                    <p className="text-sm text-dg-gold font-bold">{t('plotDetails.advisorTitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlotDetails;
