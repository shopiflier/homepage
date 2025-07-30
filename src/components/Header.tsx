import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Logo size="md" />
            <span className="text-2xl font-bold gradient-text">Shopifly</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav.solutions')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav.pricing')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === i18n.language)?.name || 'EN'}
                </span>
              </button>
              
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        i18n.language === lang.code ? 'text-primary-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              {t('nav.getStarted')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200/50 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {t('nav.solutions')}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {t('nav.pricing')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                {t('nav.contact')}
              </a>
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-1 rounded-md text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-primary-100 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-medium mt-4">
                {t('nav.getStarted')}
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;