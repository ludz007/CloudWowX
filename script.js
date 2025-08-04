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

// Simplified Time Saved Calculator
function setupROICalculator() {
    const inquiriesInput = document.getElementById('customerInquiries');
    const taskTimeInput = document.getElementById('avgTaskTime');
    
    if (!inquiriesInput || !taskTimeInput) return;
    
    function calculateTimeSaved() {
        const inquiries = parseInt(inquiriesInput.value) || 50;
        const taskTime = parseFloat(taskTimeInput.value) || 5; // minutes per task
        
        // Calculate time saved (assume 80% automation rate)
        const minutesPerDay = inquiries * taskTime * 0.8; // 80% of tasks automated
        const hoursPerDay = minutesPerDay / 60;
        const monthlyHours = Math.round(hoursPerDay * 22); // Working days per month
        
        // Update display
        const monthlyElement = document.getElementById('monthlyTimeSaved');
        const dailyElement = document.getElementById('dailyTimeSaved');
        
        if (monthlyElement) monthlyElement.textContent = `${monthlyHours} hours`;
        if (dailyElement) dailyElement.textContent = `${Math.round(hoursPerDay)} hours`;
        
        // Track calculation
        if (typeof gtag !== 'undefined') {
            gtag('event', 'time_calculation', {
                inquiries: inquiries,
                task_time: taskTime,
                monthly_hours_saved: monthlyHours
            });
        }
        
        console.log('Track Event:', 'time_calculation', {
            inquiries: inquiries,
            task_time: taskTime,
            monthly_hours_saved: monthlyHours
        });
    }
    
    // Add event listeners
    [inquiriesInput, taskTimeInput].forEach(input => {
        input.addEventListener('input', calculateTimeSaved);
    });
    
    // Initial calculation
    calculateTimeSaved();
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
