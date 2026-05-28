import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EMICalculator = ({ propertyPrice = 1000000 }) => {
  const { t } = useTranslation();
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2); // Default 20%
  const [interestRate, setInterestRate] = useState(6.5); // Default 6.5%
  const [tenureYears, setTenureYears] = useState(30); // Default 30 years
  const principal = propertyPrice - downPayment;
  const ratePerMonth = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let emi = 0;
  if (principal > 0 && ratePerMonth > 0 && totalMonths > 0) {
    emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, totalMonths)) / 
          (Math.pow(1 + ratePerMonth, totalMonths) - 1);
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-dg-gold/20 p-3 rounded-full text-dg-gold">
          <Calculator className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-dg-dark">{t('emi.title')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">{t('emi.downPayment')}</label>
              <span className="font-semibold text-dg-dark">₹{downPayment.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max={propertyPrice} 
              step="10000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-dg-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹0</span>
              <span>₹{propertyPrice.toLocaleString()}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">{t('emi.interestRate')}</label>
              <span className="font-semibold text-dg-dark">{interestRate}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="15" 
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-dg-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">{t('emi.tenure')}</label>
              <span className="font-semibold text-dg-dark">{tenureYears} {t('emi.years')}</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="30" 
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-dg-gold"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5 {t('emi.years')}</span>
              <span>30 {t('emi.years')}</span>
            </div>
          </div>
        </div>

        <div className="bg-dg-dark text-white p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-dg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-dg-gold/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
          
          <p className="text-gray-400 mb-2 font-medium uppercase tracking-wider text-sm">{t('emi.monthlyPayment')}</p>
          <p className="text-5xl font-serif font-bold text-dg-gold mb-6">₹{Math.round(emi).toLocaleString()}</p>
          
          <div className="w-full space-y-3 text-sm text-gray-300 border-t border-slate-700 pt-6">
            <div className="flex justify-between">
              <span>{t('emi.principal')}</span>
              <span className="font-semibold text-white">₹{(propertyPrice - downPayment).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('emi.totalInterest')}</span>
              <span className="font-semibold text-white">₹{Math.round((emi * tenureYears * 12) - (propertyPrice - downPayment)).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
