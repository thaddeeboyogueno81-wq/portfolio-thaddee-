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

// Language Toggle
let currentLanguage = 'fr';
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateLanguage();
}

function updateLanguage() {
    const langText = document.getElementById('langText');
    const mobileLangText = document.getElementById('mobileLangText');
    if (currentLanguage === 'fr') {
        langText.textContent = 'FR';
        mobileLangText.textContent = 'FR';
    } else {
        langText.textContent = 'EN';
        mobileLangText.textContent = 'EN';
    }
    localStorage.setItem('language', currentLanguage);
}

// Load saved language
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
    currentLanguage = savedLanguage;
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

function filterProjects() {
    const searchTerm = document.getElementById('projectSearch').value.toLowerCase();
    let visibleCount = 0;
    allProjects.forEach(project => {
        const title = project.querySelector('h3').textContent.toLowerCase();
        const description = project.querySelector('.project-description').textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            project.style.display = 'block';
            visibleCount++;
        } else {
            project.style.display = 'none';
        }
    });
    document.getElementById('projectsCount').textContent = visibleCount + ' ' + (visibleCount === 1 ? 'projet' : 'projets');
}

function setFilter(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    let visibleCount = 0;
    allProjects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            visibleCount++;
        } else {
            project.style.display = 'none';
        }
    });
    document.getElementById('projectsCount').textContent = visibleCount + ' ' + (visibleCount === 1 ? 'projet' : 'projets');
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
    submitText.textContent = 'Envoi...';
    submitIcon.className = 'fas fa-spinner fa-spin';
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        showSuccessMessage();
        contactForm.reset();
    } catch (error) {
        alert('Erreur. Veuillez reessayer.');
    } finally {
        submitBtn.disabled = false;
        submitText.textContent = 'Envoyer';
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

// Download CV
function downloadCV() {
    alert('CV à télécharger (à configurer)');
}

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.body.style.overflow = 'auto';
        initProjects();
    }, 500);
});

// Also hide loading if DOM is ready but images take time
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.getElementById('loading').classList.contains('hidden')) return;
        document.getElementById('loading').classList.add('hidden');
        document.body.style.overflow = 'auto';
        initProjects();
    }, 2000);
});

// Initialize
document.body.style.overflow = 'hidden';

// Fallback: Hide loading after 5 seconds max
setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.body.style.overflow = 'auto';
    initProjects();
}, 5000);
