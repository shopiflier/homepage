import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap, Shield, Headphones } from 'lucide-react';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Zap,
      text: 'Setup in under 5 minutes'
    },
    {
      icon: Shield,
      text: '30-day money-back guarantee'
    },
    {
      icon: Headphones,
      text: '24/7 expert support'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-white rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t('cta.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            {t('cta.subtitle')}
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center space-x-3 text-blue-100">
                  <IconComponent size={20} className="text-blue-200" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-xl flex items-center space-x-3 shadow-2xl hover:shadow-3xl transition-all duration-300 mx-auto"
            >
              <span>{t('cta.button')}</span>
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-200 text-sm"
          >
            <p className="mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Mock company logos */}
              <div className="bg-white/20 rounded-lg px-4 py-2 text-white font-semibold">TechCorp</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 text-white font-semibold">InnovateCo</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 text-white font-semibold">FutureShop</div>
              <div className="bg-white/20 rounded-lg px-4 py-2 text-white font-semibold">NextGen</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-16 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
      ></motion.div>
    </section>
  );
};

export default CTA;