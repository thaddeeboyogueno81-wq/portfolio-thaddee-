import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ScrollAnimation from '../components/ScrollAnimation';

const socialLinks = [
  { icon: Github, href: 'https://github.com/thaddeeboyogueno81-wq', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: MessageSquare, href: 'https://wa.me', label: 'WhatsApp' },
];

const contactInfo = [
  { icon: Mail, text: 'thaddee.isaac@example.com', href: 'mailto:thaddee.isaac@example.com' },
  { icon: Phone, text: '+225 XX XX XX XX XX', href: 'tel:+225XXXXXXXXXX' },
  { icon: MapPin, text: 'Abidjan, Côte d\'Ivoire' },
  { icon: Clock, text: 'Lun - Ven: 9h - 18h' },
];

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Contact Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              {t('contact')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">{t('contactTitle')}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contactDescription')}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {info.text}
                  </p>
                  {info.href && (
                    <a
                      href={info.href}
                      className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
                    >
                      {info.href.includes('mailto:') ? 'Envoyer un email' : 
                       info.href.includes('tel:') ? 'Appeler' : ''}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                {t('contactFormTitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Envoyez-moi un message
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {t('contactSuccess')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                </p>
                <motion.button
                  onClick={() => setSubmitStatus(null)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer un autre message
                </motion.button>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                  {t('contactError')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
                <motion.button
                  onClick={() => setSubmitStatus(null)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réessayer
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactName')}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contactNamePlaceholder')}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactEmail')}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contactEmailPlaceholder')}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactSubject')}
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contactSubjectPlaceholder')}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contactMessage')}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactMessagePlaceholder')}
                      rows={5}
                      required
                      className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('contactSubmit')}</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
                Réseaux Sociaux
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connectons-nous
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Vous pouvez aussi me trouver sur ces plateformes
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 card-hover flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {link.href.replace(/^https?:\/\//, '')}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-3xl p-12 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <MapPin className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Basé à Abidjan, Côte d'Ivoire
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Disponible pour des projets locaux et internationaux. Travail à distance ou en présentiel.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 md:p-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Prêt à commencer ?
            </motion.h2>
            <motion.p
              className="text-white/80 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-secondary">
                {t('contact')}
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-white/20 hover:bg-white/30 transition-all duration-300">
                <span>Voir mes projets</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
