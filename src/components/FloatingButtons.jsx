import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <motion.a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-colors relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-20"></span>
      </motion.a>
      
      <motion.a 
        href="tel:+15551234567"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="bg-dg-gold hover:bg-dg-gold-light text-dg-dark p-4 rounded-full shadow-xl flex items-center justify-center transition-colors relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full border-2 border-dg-gold animate-ping opacity-20"></span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
