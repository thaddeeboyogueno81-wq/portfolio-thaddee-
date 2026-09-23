import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  ArrowRight,
  Sparkles,
  Rocket,
  ChevronDown 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ScrollAnimation from '../components/ScrollAnimation';

const services = [
  {
    icon: Code,
    title: 'serviceWebDev',
    description: 'serviceWebDevDesc',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Smartphone,
    title: 'serviceMobile',
    description: 'serviceMobileDesc',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Palette,
    title: 'serviceUIUX',
    description: 'serviceUIUXDesc',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Globe,
    title: 'serviceSEO',
    description: 'serviceSEODesc',
    color: 'from-green-500 to-green-600',
  },
];

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
  'Git', 'Vercel', 'Framer Motion', 'Redux', 'Zustand'
];

function Home() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.4, 0.7, 0.4] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200/20 dark:border-gray-700/20 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium border border-primary-200 dark:border-primary-800">
              {t('heroSubtitle')}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="gradient-text">{t('heroTitle')}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('heroDescription')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/projects" className="btn-primary flex items-center justify-center space-x-2">
              <span>{t('ctaPrimary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center space-x-2">
              <span>{t('ctaSecondary')}</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t('about')}
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('servicesTitle')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('servicesSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollAnimation key={index} speed={0.1 * index}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 card-hover"
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 gradient-bg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {t(service.title)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t(service.description)}
                    </p>
                  </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
                Technologies
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Mon Stack Technique
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Les technologies que je maîtrise pour créer des applications modernes et performantes.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="gradient-bg rounded-3xl p-12 md:p-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Rocket className="w-16 h-16 text-white mx-auto" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Prêt à démarrer votre projet ?
            </motion.h2>
            <motion.p
              className="text-white/80 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
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

export default Home;
