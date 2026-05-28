import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-dg-light pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About DG PLOTS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{t('aboutPage.title1')} <span className="text-dg-gold">{t('aboutPage.title2')}</span></h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('aboutPage.desc')}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dg-dark mb-6">{t('aboutPage.missionTitle')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('aboutPage.missionDesc')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dg-dark mb-6 mt-12">{t('aboutPage.storyTitle')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('aboutPage.storyP1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('aboutPage.storyP2')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team 1" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team 2" className="w-full h-48 object-cover rounded-xl shadow-lg" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team 3" className="w-full h-48 object-cover rounded-xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team 4" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-dg-dark text-white rounded-2xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-serif font-bold text-dg-gold mb-2">15+</p>
            <p className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-serif font-bold text-dg-gold mb-2">₹2B+</p>
            <p className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Property Sold</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-serif font-bold text-dg-gold mb-2">500+</p>
            <p className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-serif font-bold text-dg-gold mb-2">50+</p>
            <p className="text-gray-400 font-semibold tracking-wider uppercase text-sm">Awards Won</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
