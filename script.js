// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    setupAnimations();
    setupMobileMenu();
    setupFormHandlers();
    setupROICalculator();
    setupLiveActivity();
    setupCountdownTimer();
    setupPerformanceOptimizations();
}

// Navigation Setup - Static
function setupNavigation() {
    // Static navigation - no scroll effects
}

// Static scroll functions - no smooth scrolling
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView();
    }
}

function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView();
    }
}

// Static - no scroll effects
function setupScrollEffects() {
    // Disabled scroll animations
}

// Static - no animations
function setupAnimations() {
    // Static - no animations
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Form Handlers
function setupFormHandlers() {
    console.log('Form handlers initialized');
}

// ROI Calculator
function setupROICalculator() {
    const inquiriesInput = document.getElementById('customerInquiries');
    const employeesInput = document.getElementById('employees');
    const wageInput = document.getElementById('avgHourlyWage');
    
    if (!inquiriesInput || !employeesInput || !wageInput) return;
    
    function calculateSavings() {
        const inquiries = parseInt(inquiriesInput.value) || 50;
        const employees = parseInt(employeesInput.value) || 3;
        const hourlyWage = parseFloat(wageInput.value) || 25;
        
        // Calculate monthly savings
        const hoursPerDay = inquiries * 0.1; // Assume 6 minutes per inquiry
        const monthlyHours = hoursPerDay * 30;
        const monthlyCost = monthlyHours * hourlyWage;
        const cloudwowxCost = 143; // Monthly CloudwowX cost
        const monthlySavings = Math.max(0, monthlyCost - cloudwowxCost);
        
        // Update display
        const savingsElement = document.getElementById('monthlySavings');
        const annualElement = document.getElementById('annualSavings');
        const hoursElement = document.getElementById('hoursSaved');
        const ctaElements = document.querySelectorAll('.monthly-savings-cta');
        
        if (savingsElement) savingsElement.textContent = `$${monthlySavings.toLocaleString()}`;
        if (annualElement) annualElement.textContent = `$${(monthlySavings * 12).toLocaleString()}`;
        if (hoursElement) hoursElement.textContent = `${Math.round(monthlyHours)} hours`;
        
        ctaElements.forEach(el => {
            el.textContent = monthlySavings.toLocaleString();
        });
        
        // Track calculation
        if (typeof gtag !== 'undefined') {
            gtag('event', 'savings_calculation', {
                employees: employees,
                inquiries: inquiries,
                hourly_wage: hourlyWage,
                monthly_savings: monthlySavings
            });
        }
        
        console.log('Track Event:', 'savings_calculation', {
            employees: employees,
            inquiries: inquiries,
            hourly_wage: hourlyWage,
            monthly_savings: monthlySavings
        });
    }
    
    // Add event listeners
    [inquiriesInput, employeesInput, wageInput].forEach(input => {
        input.addEventListener('input', calculateSavings);
    });
    
    // Initial calculation
    calculateSavings();
}

// Live Activity Simulator
function setupLiveActivity() {
    // Static display - no live updates
}

// Countdown Timer
function setupCountdownTimer() {
    // Static display - no countdown
}

// Performance Optimizations
function setupPerformanceOptimizations() {
    const startTime = performance.now();
    
    window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        console.log(`Performance: page-load-time took ${Math.round(loadTime)}ms`);
    });
    
    console.log('Performance optimizations initialized');
}

// Export functions to global scope
window.scrollToBooking = scrollToBooking;
window.scrollToServices = scrollToServices;
