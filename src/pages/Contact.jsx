import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-dg-light pb-16">
      <div className="bg-dg-dark text-white py-16 px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contactPage.title1')} <span className="text-dg-gold">{t('contactPage.title2')}</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('contactPage.desc')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-dg-dark mb-8">{t('contactPage.getInTouch')}</h2>
            <p className="text-gray-600 mb-12 text-lg">
              {t('contactPage.getInTouchDesc')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-dg-gold/20 p-4 rounded-full text-dg-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dg-dark mb-1">{t('contactPage.officeTitle')}</h4>
                  <p className="text-gray-600">123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dg-gold/20 p-4 rounded-full text-dg-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dg-dark mb-1">{t('contactPage.phoneTitle')}</h4>
                  <p className="text-gray-600">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dg-gold/20 p-4 rounded-full text-dg-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dg-dark mb-1">{t('contactPage.emailTitle')}</h4>
                  <p className="text-gray-600">info@dgplots.com<br/>sales@dgplots.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dg-gold/20 p-4 rounded-full text-dg-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dg-dark mb-1">{t('contactPage.hoursTitle')}</h4>
                  <p className="text-gray-600">{t('contactPage.hoursL1')}<br/>{t('contactPage.hoursL2')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-dg-dark mb-6">{t('contactPage.sendMsgTitle')}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.firstName')}</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.lastName')}</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.emailAddr')}</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.subject')}</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.message')}</label>
                <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-dg-gold transition-colors"></textarea>
              </div>
              <button className="w-full btn-primary py-4 text-lg">{t('contactPage.sendBtn')}</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
