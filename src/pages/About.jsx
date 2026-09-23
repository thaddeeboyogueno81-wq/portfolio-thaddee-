import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  User, 
  Calendar, 
  Code,
  Database,
  Wrench,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
  Download 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ScrollAnimation from '../components/ScrollAnimation';

// Profile image
const profileImage = '/profile.svg';

const skills = {
  frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'REST API', level: 85 },
    { name: 'GraphQL', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'Vercel', level: 80 },
    { name: 'Netlify', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'Postman', level: 75 },
  ],
};

const experiences = [
  {
    role: 'Développeur Web Fullstack',
    company: 'Freelance',
    period: '2022 - Présent',
    description: 'Création de sites web et applications pour divers clients. Développement de solutions sur mesure avec React, Node.js et MongoDB.',
  },
  {
    role: 'Développeur Frontend',
    company: 'Startup Tech',
    period: '2021 - 2022',
    description: 'Développement d\'interfaces utilisateur réactives avec React et Redux. Collaboration avec les designers pour créer des expériences utilisateur exceptionnelles.',
  },
];

const education = [
  {
    degree: 'Licence en Informatique',
    institution: 'Université de Cocody',
    period: '2020 - 2023',
    description: 'Formation complète en développement logiciel, bases de données et systèmes d\'information.',
  },
  {
    degree: 'Baccalauréat Scientifique',
    institution: 'Lycée Moderne',
    period: '2017 - 2020',
    description: 'Spécialisation en mathématiques et sciences physiques.',
  },
];

function About() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero About Section */}
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
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              {t('about')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">{t('aboutTitle')}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('aboutSubtitle')}
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Profile Image */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={profileImage}
                      alt="Thaddée Isaac Boyoguéno"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x400/4a90e2/ffffff?text=TB';
                      }}
                    />
                  </div>
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white font-bold text-xl">21</span>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <span className="text-gray-900 dark:text-white font-bold text-xl">TB</span>
                  </motion.div>
                </motion.div>

                {/* Profile Info */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className="gradient-text">{t('aboutName')}</span>
                    </h2>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                      {t('aboutRole')}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-300">{t('aboutAge')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-300">Abidjan, Côte d'Ivoire</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {t('aboutDescription1')}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                      <span>{t('contact')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a 
                      href="/cv-thaddee.pdf" 
                      download
                      className="btn-secondary flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Télécharger CV</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>{t('aboutDescription2')}</p>
              <p>
                Mon objectif est de créer des solutions numériques qui ne se contentent pas de répondre aux besoins,
                mais qui les anticipent et les dépassent. Je crois en l'innovation continue et en l'amélioration
                constante des compétences pour rester à la pointe de la technologie.
              </p>
              <p>
                En dehors du développement, je suis passionné par l'open source et j'aime contribuer à des projets
                communautaires. J'aime aussi partager mes connaissances à travers des articles techniques et du
                mentorat.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                Compétences
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('aboutSkills')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Voici les technologies et outils que je maîtrise.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {Object.entries(skills).map(([category, items], index) => (
              <ScrollAnimation key={index} speed={0.05 * index}>
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-8 flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {category === 'frontend' && <Code className="w-7 h-7 gradient-text" />}
                    {category === 'backend' && <Database className="w-7 h-7 gradient-text" />}
                    {category === 'tools' && <Wrench className="w-7 h-7 gradient-text" />}
                    <span className="gradient-text">{t(category)}</span>
                  </motion.h3>

                  <div className="space-y-6">
                    {items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
                Parcours
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('aboutExperience')} & {t('aboutEducation')}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="w-7 h-7 gradient-text" />
                <h3 className="text-2xl font-bold gradient-text">{t('aboutExperience')}</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="w-7 h-7 gradient-text" />
                <h3 className="text-2xl font-bold gradient-text">{t('aboutEducation')}</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                Fun Facts
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Quelques infos sur moi
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Passionné par le code', description: 'J\'aime résoudre des problèmes complexes avec des solutions élégantes.' },
              { icon: Star, title: 'Open Source', description: 'Je contribue régulièrement à des projets open source sur GitHub.' },
              { icon: User, title: 'Mentorat', description: 'J\'aide les débutants à apprendre le développement web.' },
            ].map((fact, index) => {
              const Icon = fact.icon;
              return (
                <ScrollAnimation key={index} speed={0.05 * index}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center card-hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {fact.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {fact.description}
                    </p>
                  </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
