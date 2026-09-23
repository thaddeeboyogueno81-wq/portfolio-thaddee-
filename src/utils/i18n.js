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
      heroTitle: 'Développeur Web Freelance',
      heroSubtitle: 'Création de sites web modernes et performants',
      heroDescription: 'Je conçois des expériences digitales uniques qui transforment vos idées en réalité. Spécialisé dans le développement frontend avec React, Next.js et Tailwind CSS.',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'Me contacter',
      
      // About Section
      aboutTitle: 'À propos de moi',
      aboutSubtitle: 'Qui suis-je ?',
      aboutName: 'Thaddée Isaac Boyoguéno',
      aboutAge: '21 ans',
      aboutRole: 'Développeur Web Fullstack',
      aboutDescription1: 'Passionné par la technologie et le design, je crée des applications web performantes et esthétiques. Mon approche combine créativité, technique et attention aux détails pour livrer des produits qui dépassent les attentes.',
      aboutDescription2: 'Avec une expertise en JavaScript, TypeScript, React, Node.js et les bases de données modernes, je suis capable de gérer des projets de A à Z, du concept à la mise en production.',
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
      projectsDescription: 'Découvrez une sélection de mes projets les plus marquants. Chaque projet représente une solution unique adaptée aux besoins spécifiques du client.',
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
      contactEmailPlaceholder: 'votre@email.com',
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
      footerDescription: 'Développeur web freelance spécialisé dans la création de sites modernes et performants.',
      footerRights: 'Tous droits réservés',
      
      // Stats
      projectsCount: 'Projets réalisés',
      yearsExperience: 'Années d\'expérience',
      happyClients: 'Clients satisfaits',
      
      // Services
      servicesTitle: 'Mes Services',
      servicesSubtitle: 'Ce que je propose',
      serviceWebDev: 'Développement Web',
      serviceWebDevDesc: 'Création de sites web sur mesure avec les dernières technologies.',
      serviceMobile: 'Applications Mobile',
      serviceMobileDesc: 'Développement d\'applications mobiles réactives et performantes.',
      serviceUIUX: 'Design UI/UX',
      serviceUIUXDesc: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
      serviceSEO: 'Optimisation SEO',
      serviceSEODesc: 'Amélioration de la visibilité de votre site sur les moteurs de recherche.',
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
      heroTitle: 'Freelance Web Developer',
      heroSubtitle: 'Building modern and performant websites',
      heroDescription: 'I create unique digital experiences that turn your ideas into reality. Specialized in frontend development with React, Next.js, and Tailwind CSS.',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'Contact me',
      
      // About Section
      aboutTitle: 'About Me',
      aboutSubtitle: 'Who am I?',
      aboutName: 'Thaddée Isaac Boyoguéno',
      aboutAge: '21 years old',
      aboutRole: 'Fullstack Web Developer',
      aboutDescription1: 'Passionate about technology and design, I create performant and aesthetic web applications. My approach combines creativity, technical skills, and attention to detail to deliver products that exceed expectations.',
      aboutDescription2: 'With expertise in JavaScript, TypeScript, React, Node.js, and modern databases, I can handle projects from A to Z, from concept to production deployment.',
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
      projectsDescription: 'Discover a selection of my most notable projects. Each project represents a unique solution tailored to the client\'s specific needs.',
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
      contactEmailPlaceholder: 'your@email.com',
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
      footerDescription: 'Freelance web developer specialized in creating modern and performant websites.',
      footerRights: 'All rights reserved',
      
      // Stats
      projectsCount: 'Projects completed',
      yearsExperience: 'Years of experience',
      happyClients: 'Happy clients',
      
      // Services
      servicesTitle: 'My Services',
      servicesSubtitle: 'What I offer',
      serviceWebDev: 'Web Development',
      serviceWebDevDesc: 'Custom website development with the latest technologies.',
      serviceMobile: 'Mobile Applications',
      serviceMobileDesc: 'Development of responsive and performant mobile applications.',
      serviceUIUX: 'UI/UX Design',
      serviceUIUXDesc: 'Design of intuitive and aesthetic user interfaces.',
      serviceSEO: 'SEO Optimization',
      serviceSEODesc: 'Improving your website\'s visibility on search engines.',
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
