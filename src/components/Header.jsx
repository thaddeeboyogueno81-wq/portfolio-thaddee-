import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sun, Moon, Globe, Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const navItems = [
  { path: '/', icon: Home, label: 'home' },
  { path: '/about', icon: User, label: 'about' },
  { path: '/projects', icon: Briefcase, label: 'projects' },
  { path: '/contact', icon: Mail, label: 'contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLang = () => {
    changeLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white font-bold text-lg">TB</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg gradient-text">Thaddée Isaac</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Boyoguéno</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link flex items-center space-x-1 ${
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400 after:w-full'
                      : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t(item.label)}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              onClick={toggleLang}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={t('changeLanguage')}
            >
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-xs ml-1 font-medium">
                {language === 'fr' ? 'FR' : 'EN'}
              </span>
            </motion.button>
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={t('toggleTheme')}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{t(item.label)}</span>
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <button
                  onClick={() => {
                    toggleLang();
                    toggleMobileMenu();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span>{t('changeLanguage')}</span>
                  <span className="font-medium">{language === 'fr' ? 'FR' : 'EN'}</span>
                </button>
                
                <button
                  onClick={() => {
                    toggleTheme();
                    toggleMobileMenu();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span>{t('toggleTheme')}</span>
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
