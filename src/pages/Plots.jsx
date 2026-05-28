import { useState, useEffect } from 'react';
import SearchFilter from '../components/SearchFilter';
import PropertyCard from '../components/PropertyCard';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';
import { useTranslation } from 'react-i18next';

const Plots = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const plots = [
    {
      id: 2,
      title: t('propertiesData.p2_title'),
      price: 2100000,
      location: t('propertiesData.p2_loc'),
      type: t('propertiesData.p2_type'),
      size: 15000,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Featured"
    },
    {
      id: 4,
      title: t('propertiesData.p4_title'),
      price: 1500000,
      location: t('propertiesData.p4_loc'),
      type: t('propertiesData.p4_type'),
      size: 22000,
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: t('propertiesData.p5_title'),
      price: 3200000,
      location: t('propertiesData.p5_loc'),
      type: t('propertiesData.p5_type'),
      size: 45000,
      image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "New"
    },
    {
      id: 8,
      title: t('propertiesData.p8_title'),
      price: 4500000,
      location: t('propertiesData.p8_loc'),
      type: t('propertiesData.p8_type'),
      size: 35000,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Featured"
    },
    {
      id: 10,
      title: t('propertiesData.p10_title'),
      price: 2800000,
      location: t('propertiesData.p10_loc'),
      type: t('propertiesData.p10_type'),
      size: 18000,
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dg-light">
      <div className="bg-dg-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('plotsPage.title1')} <span className="text-dg-gold">{t('plotsPage.title2')}</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('plotsPage.desc')}</p>
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
            plots.map((plot) => (
              <PropertyCard key={plot.id} {...plot} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Plots;
