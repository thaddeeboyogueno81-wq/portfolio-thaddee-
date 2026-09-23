import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Header
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      contact: 'Contact',
      
      // Theme & Language
      toggleTheme: 'Changer de thème',
      changeLanguage: 'Changer de langue',
      
      // Hero Section
      heroTitle: 'Développeur Web Fullstack',
      heroSubtitle: 'Création de sites web modernes et performants',
      heroDescription: 'Je conçois des expériences digitales uniques qui transforment vos idées en réalité. Passionné par le développement avec React, Next.js, Node.js et les bases de données modernes.',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'Me contacter',
      
      // About Section
      aboutTitle: 'À propos de moi',
      aboutSubtitle: 'Qui suis-je ?',
      aboutName: 'Thaddée Isaac Boyoguéno',
      aboutAge: '21 ans',
      aboutRole: 'Développeur Web Fullstack',
      aboutDescription1: 'Passionné par la technologie et le design, je crée des applications web performantes et esthétiques. Mon approche combine créativité, technique et attention aux détails pour livrer des produits qui dépassent les attentes.',
      aboutDescription2: 'Avec une expertise en JavaScript, TypeScript, React, Node.js, Express et les bases de données, je suis capable de gérer des projets de A à Z, du concept à la mise en production. J\'aime résoudre des problèmes complexes avec des solutions élégantes.',
      aboutSkills: 'Mes compétences',
      aboutExperience: 'Expérience',
      aboutEducation: 'Formation',
      
      // Skills
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils',
      
      // Projects Section
      projectsTitle: 'Mes Projets',
      projectsSubtitle: 'Réalisations récentes',
      projectsDescription: 'Découvrez mes projets réalisés. Chaque projet représente une solution unique adaptée aux besoins spécifiques.',
      viewProject: 'Voir le projet',
      visitSite: 'Visiter le site',
      
      // Contact Section
      contactTitle: 'Contactez-moi',
      contactSubtitle: 'Prêt à collaborer ?',
      contactDescription: 'Vous avez un projet en tête ou souhaitez discuter d\'une collaboration ? N\'hésitez pas à me contacter.',
      contactFormTitle: 'Envoyez-moi un message',
      contactName: 'Nom',
      contactNamePlaceholder: 'Votre nom complet',
      contactEmail: 'Email',
      contactEmailPlaceholder: 'thaddeeboyogueno81@gmail.com',
      contactSubject: 'Sujet',
      contactSubjectPlaceholder: 'Objet de votre message',
      contactMessage: 'Message',
      contactMessagePlaceholder: 'Décrivez votre projet ou posez votre question...',
      contactSubmit: 'Envoyer le message',
      contactSuccess: 'Message envoyé avec succès !',
      contactError: 'Une erreur est survenue. Veuillez réessayer.',
      
      // Social Links
      socialTitle: 'Mes réseaux',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      whatsapp: 'WhatsApp',
      
      // Footer
      footerDescription: 'Développeur web fullstack de 21 ans, spécialisé dans la création de sites modernes et performants avec React, Node.js et plus.',
      footerRights: 'Tous droits réservés',
      
      // Stats
      projectsCount: 'Projets réalisés',
      yearsExperience: 'Années d\'expérience',
      happyClients: 'Clients satisfaits',
      
      // Services
      servicesTitle: 'Mes Services',
      servicesSubtitle: 'Ce que je propose',
      serviceWebDev: 'Développement Web',
      serviceWebDevDesc: 'Création de sites web sur mesure avec les dernières technologies (React, Next.js, Tailwind CSS).',
      serviceMobile: 'Applications Responsive',
      serviceMobileDesc: 'Développement d\'applications qui s\'adaptent parfaitement à tous les écrans.',
      serviceUIUX: 'Design UI/UX',
      serviceUIUXDesc: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
      serviceSEO: 'Optimisation',
      serviceSEODesc: 'Amélioration des performances et de la visibilité de votre site.',
    }
  },
  en: {
    translation: {
      // Header
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      
      // Theme & Language
      toggleTheme: 'Toggle theme',
      changeLanguage: 'Change language',
      
      // Hero Section
      heroTitle: 'Fullstack Web Developer',
      heroSubtitle: 'Building modern and performant websites',
      heroDescription: 'I create unique digital experiences that turn your ideas into reality. Specialized in fullstack development with React, Next.js, Node.js, and modern databases.',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'Contact me',
      
      // About Section
      aboutTitle: 'About Me',
      aboutSubtitle: 'Who am I?',
      aboutName: 'Thaddée Isaac Boyoguéno',
      aboutAge: '21 years old',
      aboutRole: 'Fullstack Web Developer',
      aboutDescription1: 'Passionate about technology and design, I create performant and aesthetic web applications. My approach combines creativity, technical skills, and attention to detail to deliver products that exceed expectations.',
      aboutDescription2: 'With expertise in JavaScript, TypeScript, React, Node.js, Express, and databases, I can handle projects from A to Z, from concept to production deployment. I love solving complex problems with elegant solutions.',
      aboutSkills: 'My Skills',
      aboutExperience: 'Experience',
      aboutEducation: 'Education',
      
      // Skills
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
      
      // Projects Section
      projectsTitle: 'My Projects',
      projectsSubtitle: 'Recent Works',
      projectsDescription: 'Discover my completed projects. Each project represents a unique solution tailored to specific needs.',
      viewProject: 'View Project',
      visitSite: 'Visit Site',
      
      // Contact Section
      contactTitle: 'Get In Touch',
      contactSubtitle: 'Ready to collaborate?',
      contactDescription: 'Do you have a project in mind or would you like to discuss a collaboration? Feel free to contact me.',
      contactFormTitle: 'Send me a message',
      contactName: 'Name',
      contactNamePlaceholder: 'Your full name',
      contactEmail: 'Email',
      contactEmailPlaceholder: 'thaddeeboyogueno81@gmail.com',
      contactSubject: 'Subject',
      contactSubjectPlaceholder: 'Subject of your message',
      contactMessage: 'Message',
      contactMessagePlaceholder: 'Describe your project or ask your question...',
      contactSubmit: 'Send Message',
      contactSuccess: 'Message sent successfully!',
      contactError: 'An error occurred. Please try again.',
      
      // Social Links
      socialTitle: 'My Networks',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      whatsapp: 'WhatsApp',
      
      // Footer
      footerDescription: '21-year-old fullstack web developer, specialized in creating modern and performant websites with React, Node.js and more.',
      footerRights: 'All rights reserved',
      
      // Stats
      projectsCount: 'Projects completed',
      yearsExperience: 'Years of experience',
      happyClients: 'Happy clients',
      
      // Services
      servicesTitle: 'My Services',
      servicesSubtitle: 'What I offer',
      serviceWebDev: 'Web Development',
      serviceWebDevDesc: 'Custom website development with the latest technologies (React, Next.js, Tailwind CSS).',
      serviceMobile: 'Responsive Applications',
      serviceMobileDesc: 'Development of applications that adapt perfectly to all screens.',
      serviceUIUX: 'UI/UX Design',
      serviceUIUXDesc: 'Design of intuitive and aesthetic user interfaces.',
      serviceSEO: 'Optimization',
      serviceSEODesc: 'Improving your website\'s performance and visibility.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
