import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Phone,
  MapPin 
} from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/thaddeeboyogueno81-wq', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/thaddée-isaac-boyoguéno', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/thaddee_isaac', label: 'Twitter' },
];

const quickLinks = [
  { path: '/', label: 'home' },
  { path: '/about', label: 'about' },
  { path: '/projects', label: 'projects' },
  { path: '/contact', label: 'contact' },
];

const contactInfo = [
  { icon: Mail, text: 'thaddeeboyogueno81@gmail.com', href: 'mailto:thaddeeboyogueno81@gmail.com' },
  { icon: Phone, text: '+225 69 05 73 15 6', href: 'tel:+225690573156' },
  { icon: MapPin, text: 'Abidjan, Côte d\'Ivoire', href: '#' },
];

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg gradient-text">Thaddée Isaac</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Boyoguéno</p>
              </div>
            </motion.div>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('footerDescription')}
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
              {t('home')}
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
              {t('contact')}
            </h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
              Stats
            </h4>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold gradient-text">8+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('projectsCount')}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold gradient-text">2+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('yearsExperience')}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold gradient-text">10+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('happyClients')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {year} {t('footerRights')} - Thaddée Isaac Boyoguéno</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
