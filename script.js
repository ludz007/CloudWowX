// DOM Content Loaded - Mobile Optimized
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application - No Animations
function initializeApp() {
    optimizeForMobile();
    setupNavigation();
    setupMobileMenu();
    setupFormHandlers();
    setupROICalculator();
    setupPerformanceOptimizations();
}

// Mobile-friendly optimizations
function optimizeForMobile() {
    const style = document.createElement('style');
    style.innerHTML = `
        *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            transform: none !important;
        }
        .scroll-hidden { opacity: 1 !important; }
        .scroll-reveal { opacity: 1 !important; }
    `;
    document.head.appendChild(style);
}

// Navigation Setup - Static
function setupNavigation() {
    const navbar = document.querySelector('.navbar');

    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                });
            }
        });
    });
}

// Scroll to booking section
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        const offsetTop = bookingSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
        });
    }
}

// Scroll to services section
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        const offsetTop = servicesSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
        });
    }
}

// Scroll Effects Setup - Disabled for Mobile  
function setupScrollEffects() {
    // All scroll effects disabled for mobile optimization
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
        });
    }
}

// Form Handlers Setup  
function setupFormHandlers() {
    // Simple form handling
    console.log('Form handlers initialized');
}

// ROI Calculator Setup
function setupROICalculator() {
    const employeesInput = document.getElementById('employees');
    const inquiriesInput = document.getElementById('inquiries');
    const hourlyWageInput = document.getElementById('hourly-wage');
    const savingsDisplay = document.getElementById('monthly-savings');

    if (employeesInput && inquiriesInput && hourlyWageInput && savingsDisplay) {
        function calculateSavings() {
            const employees = parseInt(employeesInput.value) || 0;
            const inquiries = parseInt(inquiriesInput.value) || 0;
            const hourlyWage = parseFloat(hourlyWageInput.value) || 0;
            
            const monthlySavings = employees * inquiries * hourlyWage * 4.33;
            savingsDisplay.textContent = '$' + Math.round(monthlySavings).toLocaleString();
            
            console.log('Track Event:', 'savings_calculation', {
                employees: employees,
                inquiries: inquiries,
                hourly_wage: hourlyWage,
                monthly_savings: Math.round(monthlySavings)
            });
        }

        employeesInput.addEventListener('input', calculateSavings);
        inquiriesInput.addEventListener('input', calculateSavings);
        hourlyWageInput.addEventListener('input', calculateSavings);
        
        calculateSavings();
    }
}

// Performance Optimizations
function setupPerformanceOptimizations() {
    // Lazy loading and performance optimizations
    console.log('Performance optimizations initialized');
}
