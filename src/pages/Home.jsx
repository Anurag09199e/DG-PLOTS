import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, BadgeIndianRupee, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';
import PropertyCard from '../components/PropertyCard';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const featuredProperties = [
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
      id: 2,
      title: t('propertiesData.p2_title'),
      price: 2100000,
      location: t('propertiesData.p2_loc'),
      type: t('propertiesData.p2_type'),
      size: 15000,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-dg-gold" />,
      title: "Verified Properties",
      description: "Every property goes through a rigorous multi-point inspection to ensure absolute authenticity and quality."
    },
    {
      icon: <MapPin className="w-8 h-8 text-dg-gold" />,
      title: "Prime Locations",
      description: "We exclusively list properties situated in the most desirable and high-appreciating neighborhoods."
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8 text-dg-gold" />,
      title: "Best Price Deals",
      description: "Our strong developer network guarantees you get the most competitive and transparent pricing."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-dg-gold" />,
      title: "Trusted Experts",
      description: "Work with elite real estate consultants who prioritize your specific needs and absolute discretion."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover scale-105 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dg-dark/80 via-dg-dark/50 to-dg-dark/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {t('home.heroTitle1')} <br />
            <span className="text-dg-gold italic font-serif">{t('home.heroTitle2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {t('home.heroDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/plots" className="btn-primary inline-flex items-center gap-2 text-lg">
              {t('home.exploreBtn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search Filter Overlay */}
      <section className="px-4">
        <SearchFilter />
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-dg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('home.featuredTitle')} <span className="text-dg-gold">{t('home.featuredHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t('home.featuredDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <>
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
                <PropertyCardSkeleton />
              </>
            ) : (
              featuredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/houses" className="btn-outline inline-block">
              {t('home.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Animated Section */}
      <section className="py-24 relative overflow-hidden bg-white text-dg-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687931-cecebd802404?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Architecture"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-dg-gold">DG PLOTS</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Experience the pinnacle of luxury real estate with our unparalleled service and exclusive property portfolio.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel relative overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-dg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-dg-gold/20 transition-colors duration-500"></div>
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dg-dark mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
