// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const mobileThemeIcon = document.getElementById('mobileThemeIcon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
        mobileThemeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        mobileThemeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeIcon').className = 'fas fa-sun';
    document.getElementById('mobileThemeIcon').className = 'fas fa-sun';
}

// ===== Language Toggle (real FR/EN translation) =====
let currentLanguage = localStorage.getItem('language') || 'fr';

const I18N = {
    nav_home: { fr: 'Accueil', en: 'Home' },
    nav_about: { fr: 'À propos', en: 'About' },
    nav_projects: { fr: 'Projets', en: 'Projects' },
    nav_contact: { fr: 'Contact', en: 'Contact' },
    hero_badge: { fr: 'Développeur Web Fullstack', en: 'Fullstack Web Developer' },
    hero_subtitle: { fr: 'Création de sites web modernes et performants', en: 'Building modern and high-performing websites' },
    hero_description: { fr: 'Je conçois des expériences digitales uniques qui transforment vos idées en réalité.', en: 'I design unique digital experiences that turn your ideas into reality.' },
    scroll_about: { fr: 'À propos', en: 'About' },
    hero_projects_btn: { fr: 'Voir mes projets', en: 'View my projects' },
    hero_contact_btn: { fr: 'Me contacter', en: 'Contact me' },
    sb_about: { fr: 'À propos', en: 'About' },
    st_about: { fr: 'Qui suis-je ?', en: 'Who am I?' },
    ss_about: { fr: 'Développeur Web Fullstack de 21 ans', en: '21-year-old Fullstack Web Developer' },
    profile_role: { fr: 'Développeur Web Fullstack', en: 'Fullstack Web Developer' },
    location: { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' },
    profile_bio: { fr: 'Passionné par la technologie et le design, je crée des applications web performantes et esthétiques.', en: 'Passionate about technology and design, I build high-performing and elegant web applications.' },
    cv_btn: { fr: 'CV', en: 'Resume' },
    about_p1: { fr: 'Avec une expertise en HTML, CSS, JavaScript, je suis capable de gérer des projets de A à Z, du concept à la mise en production.', en: 'With expertise in HTML, CSS and JavaScript, I can manage projects from A to Z, from concept to production.' },
    about_p2: { fr: "J'aime résoudre des problèmes complexes avec des solutions élégantes.", en: 'I love solving complex problems with elegant solutions.' },
    sb_skills: { fr: 'Compétences', en: 'Skills' },
    st_skills: { fr: 'Mes Compétences', en: 'My Skills' },
    sk_frontend: { fr: 'Frontend', en: 'Frontend' },
    sk_backend: { fr: 'Backend', en: 'Backend' },
    sk_tools: { fr: 'Outils', en: 'Tools' },
    sb_projects: { fr: 'Projets', en: 'Projects' },
    st_projects: { fr: 'Mes Réalisations', en: 'My Work' },
    search_ph: { fr: 'Rechercher...', en: 'Search...' },
    f_all: { fr: 'Tous', en: 'All' },
    f_vitrine: { fr: 'Site Vitrine', en: 'Showcase Site' },
    f_web: { fr: 'App Web', en: 'Web App' },
    f_ia: { fr: 'App IA', en: 'AI App' },
    pc1: { fr: 'Site Vitrine', en: 'Showcase Site' },
    pc2: { fr: 'Application Web', en: 'Web Application' },
    pc3: { fr: 'Application IA', en: 'AI Application' },
    pd1: { fr: 'Site vitrine moderne pour présenter services et produits.', en: 'Modern showcase website to present services and products.' },
    pd2: { fr: 'Application de gestion de recettes et restaurants.', en: 'Recipe and restaurant management application.' },
    pd3: { fr: 'Plateforme IA pour analyse des tendances virales.', en: 'AI platform for analysing viral trends.' },
    visit: { fr: 'Visiter', en: 'Visit' },
    sb_contact: { fr: 'Contact', en: 'Contact' },
    st_contact: { fr: 'Contactez-moi', en: 'Contact me' },
    send_email: { fr: 'Envoyer email', en: 'Send email' },
    call: { fr: 'Appeler', en: 'Call' },
    contact_form_title: { fr: 'Envoyez-moi un message', en: 'Send me a message' },
    lb_name: { fr: 'Nom', en: 'Name' },
    lb_subject: { fr: 'Sujet', en: 'Subject' },
    ph_name: { fr: 'Votre nom', en: 'Your name' },
    ph_email: { fr: 'votre@email.com', en: 'your@email.com' },
    ph_subject: { fr: 'Sujet', en: 'Subject' },
    ph_message: { fr: 'Votre message...', en: 'Your message...' },
    submit: { fr: 'Envoyer', en: 'Send' },
    sm_title: { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
    sm_text: { fr: 'Je vous répondrai dans les plus brefs délais.', en: 'I will reply as soon as possible.' },
    sm_close: { fr: 'Fermer', en: 'Close' },
    ft_links: { fr: 'Liens', en: 'Links' },
    ft_contact: { fr: 'Contact', en: 'Contact' },
    ft_phone: { fr: 'Téléphone', en: 'Phone' },
    fb_text: { fr: '© 2024 Thaddée Isaac Boyoguéno - Tous droits réservés', en: '© 2024 Thaddée Isaac Boyoguéno - All rights reserved' }
};

const PAGE_TITLES = {
    fr: 'Thaddée Isaac Boyoguéno — Développeur Web Fullstack',
    en: 'Thaddée Isaac Boyoguéno — Fullstack Web Developer'
};

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const t = I18N[el.getAttribute('data-i18n')];
        if (t) el.textContent = t[currentLanguage];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const t = I18N[el.getAttribute('data-i18n-placeholder')];
        if (t) el.setAttribute('placeholder', t[currentLanguage]);
    });
    document.title = PAGE_TITLES[currentLanguage];
    document.documentElement.setAttribute('lang', currentLanguage);
}

function updateLanguage() {
    const langText = document.getElementById('langText');
    const mobileLangText = document.getElementById('mobileLangText');
    if (langText) langText.textContent = currentLanguage.toUpperCase();
    if (mobileLangText) mobileLangText.textContent = currentLanguage.toUpperCase();
    localStorage.setItem('language', currentLanguage);
    applyTranslations();
    updateProjectsCount();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        mobileMenuIcon.className = 'fas fa-times';
    } else {
        mobileMenuIcon.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    mobileMenu.classList.remove('active');
    mobileMenuIcon.className = 'fas fa-bars';
}

// Scroll Effects
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            updateActiveNavLink(targetId);
        }
    });
});

function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === sectionId) link.classList.add('active');
    });
}

// Update active nav on scroll
const sections = document.querySelectorAll('section[id]');
const headerHeight = document.getElementById('header').offsetHeight;
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    if (currentSection) updateActiveNavLink('#' + currentSection);
});

// Projects Filter
let allProjects = [];
function initProjects() {
    allProjects = Array.from(document.querySelectorAll('.project-card'));
}

function updateProjectsCount() {
    const el = document.getElementById('projectsCount');
    if (!el) return;
    const n = allProjects.filter(p => p.style.display !== 'none').length;
    if (currentLanguage === 'fr') {
        el.textContent = n + (n === 1 ? ' projet' : ' projets');
    } else {
        el.textContent = n + (n === 1 ? ' project' : ' projects');
    }
}

function filterProjects() {
    const searchTerm = document.getElementById('projectSearch').value.toLowerCase();
    allProjects.forEach(project => {
        const title = project.querySelector('h3').textContent.toLowerCase();
        const description = project.querySelector('.project-description').textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    updateProjectsCount();
}

function setFilter(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    allProjects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    updateProjectsCount();
}

// Contact Form
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('button[type="submit"]');
const submitText = submitBtn.querySelector('span');
const submitIcon = submitBtn.querySelector('i');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    submitBtn.disabled = true;
    submitText.textContent = currentLanguage === 'fr' ? 'Envoi...' : 'Sending...';
    submitIcon.className = 'fas fa-spinner fa-spin';
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        showSuccessMessage();
        contactForm.reset();
    } catch (error) {
        alert(currentLanguage === 'fr' ? 'Erreur. Veuillez reessayer.' : 'Error. Please try again.');
    } finally {
        submitBtn.disabled = false;
        applyTranslations();
        submitIcon.className = 'fas fa-paper-plane';
    }
});

function showSuccessMessage() {
    document.getElementById('successMessage').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSuccessMessage() {
    document.getElementById('successMessage').classList.remove('visible');
    document.body.style.overflow = '';
}

// CV
function downloadCV() {
    window.location.href = 'cv.html';
}

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.body.style.overflow = 'auto';
        initProjects();
    }, 500);
});

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.getElementById('loading').classList.contains('hidden')) return;
        document.getElementById('loading').classList.add('hidden');
        document.body.style.overflow = 'auto';
        initProjects();
    }, 2000);
});

document.body.style.overflow = 'hidden';

setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.body.style.overflow = 'auto';
    initProjects();
}, 5000);

// Initialize language on load
updateLanguage();
