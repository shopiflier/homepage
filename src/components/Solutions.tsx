import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Palette, Users, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    {
      icon: Palette,
      title: t('solutions.themes.title'),
      description: t('solutions.themes.description'),
      color: 'from-primary-500 to-primary-600', // Red theme matching logo
      bgColor: 'bg-primary-50',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Customizable']
    },
    {
      icon: Users,
      title: t('solutions.crm.title'),
      description: t('solutions.crm.description'),
      color: 'from-accent-500 to-accent-600', // Green theme matching logo
      bgColor: 'bg-accent-50',
      features: ['Customer Analytics', 'Automated Workflows', 'Lead Scoring', 'Integration Ready']
    },
    {
      icon: Globe,
      title: t('solutions.omnichannel.title'),
      description: t('solutions.omnichannel.description'),
      color: 'from-secondary-500 to-secondary-600', // Purple theme matching logo
      bgColor: 'bg-secondary-50',
      features: ['Multi-platform', 'Unified Inventory', 'Real-time Sync', 'Analytics Dashboard']
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">{t('solutions.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mx-4"
              >
                {(() => {
                  const solution = solutions[activeIndex];
                  const IconComponent = solution.icon;
                  return (
                    <>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                      
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;