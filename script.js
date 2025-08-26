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
    setupHeroVideoHandler();
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

// Time Saved Calculator
function setupROICalculator() {
    const inquiriesInput = document.getElementById('customerInquiries');
    const employeesInput = document.getElementById('employees');
    const taskTimeInput = document.getElementById('avgTaskTime');
    
    if (!inquiriesInput || !employeesInput || !taskTimeInput) return;
    
    function calculateTimeSaved() {
        const inquiries = parseInt(inquiriesInput.value) || 50;
        const employees = parseInt(employeesInput.value) || 3;
        const taskTime = parseFloat(taskTimeInput.value) || 6; // minutes per task
        
        // Calculate time saved
        const minutesPerDay = inquiries * taskTime;
        const hoursPerDay = minutesPerDay / 60;
        const monthlyHours = hoursPerDay * 30;
        const annualHours = monthlyHours * 12;
        const productivityBoost = Math.round((hoursPerDay / (employees * 8)) * 100); // % of workday saved
        
        // Update display
        const monthlyElement = document.getElementById('monthlyTimeSaved');
        const annualElement = document.getElementById('annualTimeSaved');
        const dailyElement = document.getElementById('dailyTimeSaved');
        const productivityElement = document.getElementById('productivityBoost');
        
        if (monthlyElement) monthlyElement.textContent = `${Math.round(monthlyHours)} hours`;
        if (annualElement) annualElement.textContent = `${Math.round(annualHours).toLocaleString()} hours`;
        if (dailyElement) dailyElement.textContent = `${Math.round(hoursPerDay)} hours`;
        if (productivityElement) productivityElement.textContent = `${Math.min(productivityBoost, 85)}%`;
        
        // Track calculation
        if (typeof gtag !== 'undefined') {
            gtag('event', 'time_calculation', {
                employees: employees,
                inquiries: inquiries,
                task_time: taskTime,
                monthly_hours_saved: monthlyHours
            });
        }
        
        console.log('Track Event:', 'time_calculation', {
            employees: employees,
            inquiries: inquiries,
            task_time: taskTime,
            monthly_hours_saved: monthlyHours
        });
    }
    
    // Add event listeners
    [inquiriesInput, employeesInput, taskTimeInput].forEach(input => {
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

// Hero Video Handler
function setupHeroVideoHandler() {
    const heroVideo = document.querySelector('.hero-demo-video');
    
    if (heroVideo) {
        console.log('Hero video element found, setting up handlers');
        
        // Video load event
        heroVideo.addEventListener('loadedmetadata', function() {
            console.log('Hero video metadata loaded successfully');
            console.log('Video duration:', heroVideo.duration, 'seconds');
        });
        
        // Video error event
        heroVideo.addEventListener('error', function(e) {
            console.error('Hero video error:', e);
            console.error('Video error details:', {
                error: heroVideo.error,
                networkState: heroVideo.networkState,
                readyState: heroVideo.readyState,
                src: heroVideo.currentSrc
            });
            
            // Show fallback message
            const container = heroVideo.parentElement;
            if (container) {
                container.innerHTML = `
                    <div class="video-fallback" style="padding: var(--spacing-xl); text-align: center; background: rgba(6, 182, 212, 0.1); border-radius: var(--radius-lg); border: 2px solid rgba(6, 182, 212, 0.3);">
                        <i class="fas fa-video" style="font-size: 3rem; color: var(--accent-primary); margin-bottom: var(--spacing-md);"></i>
                        <h3 style="color: var(--text-primary); margin-bottom: var(--spacing-md);">CloudwowX Demo Video</h3>
                        <p style="color: var(--text-secondary); margin-bottom: var(--spacing-lg);">Experience how our AI automation transforms businesses</p>
                        <a href="https://landing.cloudwowx.com/wp-content/uploads/2025/07/CloudwowX-Intro.mp4" target="_blank" class="primary-button">
                            <i class="fas fa-external-link-alt"></i>
                            Watch Demo Video
                        </a>
                    </div>
                `;
            }
        });
        
        // Video can play event
        heroVideo.addEventListener('canplay', function() {
            console.log('Hero video can play');
        });
        
        // Check if video is visible and accessible
        const container = heroVideo.parentElement;
        if (container) {
            const rect = container.getBoundingClientRect();
            console.log('Video container position:', {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                visible: rect.width > 0 && rect.height > 0
            });
        }
        
        // Test video loading after a short delay
        setTimeout(() => {
            if (heroVideo.readyState === 0) {
                console.warn('Video not loading after 3 seconds, may have connectivity issues');
            }
        }, 3000);
    } else {
        console.error('Hero video element not found!');
    }
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
