import { useState, useEffect } from 'react';
import SearchFilter from '../components/SearchFilter';
import PropertyCard from '../components/PropertyCard';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';
import { useTranslation } from 'react-i18next';

const Houses = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const houses = [
    {
      id: 1,
      title: t('propertiesData.p1_title'),
      price: 5500000,
      location: t('propertiesData.p1_loc'),
      type: t('propertiesData.p1_type'),
      size: 8500,
      beds: 6,
      baths: 7.5,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Featured"
    },
    {
      id: 3,
      title: t('propertiesData.p3_title'),
      price: 8900000,
      location: t('propertiesData.p3_loc'),
      type: t('propertiesData.p3_type'),
      size: 12000,
      beds: 8,
      baths: 9,
      image: "https://images.unsplash.com/photo-1600607687931-cecebd802404?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "New"
    },
    {
      id: 6,
      title: t('propertiesData.p6_title'),
      price: 4200000,
      location: t('propertiesData.p6_loc'),
      type: t('propertiesData.p6_type'),
      size: 6500,
      beds: 5,
      baths: 6,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: t('propertiesData.p7_title'),
      price: 12500000,
      location: t('propertiesData.p7_loc'),
      type: t('propertiesData.p7_type'),
      size: 15000,
      beds: 9,
      baths: 10,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Featured"
    },
    {
      id: 9,
      title: t('propertiesData.p9_title'),
      price: 7800000,
      location: t('propertiesData.p9_loc'),
      type: t('propertiesData.p9_type'),
      size: 9500,
      beds: 7,
      baths: 8,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dg-light">
      <div className="bg-dg-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('housesPage.title1')} <span className="text-dg-gold">{t('housesPage.title2')}</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('housesPage.desc')}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <SearchFilter />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <>
              <PropertyCardSkeleton />
              <PropertyCardSkeleton />
              <PropertyCardSkeleton />
            </>
          ) : (
            houses.map((house) => (
              <PropertyCard key={house.id} {...house} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Houses;
