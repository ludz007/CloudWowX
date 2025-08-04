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

// Navigation Setup
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
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
            behavior: 'smooth'
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
            behavior: 'smooth'
        });
    }
}

// Scroll Effects Setup
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate service cards with stagger
                if (entry.target.classList.contains('services-grid')) {
                    animateServiceCards();
                }
                
                // Animate pricing features
                if (entry.target.classList.contains('pricing-features')) {
                    animatePricingFeatures();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .pricing-card, .booking-content, .hero-content').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Special observers for specific sections
    const servicesGrid = document.querySelector('.services-grid');
    const pricingFeatures = document.querySelector('.pricing-features');
    
    if (servicesGrid) observer.observe(servicesGrid);
    if (pricingFeatures) observer.observe(pricingFeatures);
}

// Animate service cards with stagger effect
function animateServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s ease forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
        }, index * 100);
    });
}

// Animate pricing features
function animatePricingFeatures() {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.animation = `fadeInLeft 0.5s ease forwards`;
            feature.style.opacity = '1';
        }, index * 100);
    });
}

// Setup animations for dashboard elements
function setupAnimations() {
    // Animate dashboard metrics on load
    setTimeout(() => {
        const metrics = document.querySelectorAll('.metric-value');
        metrics.forEach((metric, index) => {
            setTimeout(() => {
                animateNumber(metric);
            }, index * 200);
        });
    }, 1000);

    // Animate chart bars
    setTimeout(() => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.animation = `growUp 1s ease-out forwards`;
            }, index * 100);
        });
    }, 1500);

    // Animate neural network
    animateNeuralNetwork();
}

// Animate numbers with counting effect
function animateNumber(element) {
    const text = element.textContent;
    const number = parseFloat(text.replace(/[^\d.]/g, ''));
    const suffix = text.replace(/[\d.]/g, '');
    
    if (isNaN(number)) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = number / steps;
    const stepDuration = duration / steps;
    
    let currentNumber = 0;
    let currentStep = 0;
    
    const interval = setInterval(() => {
        currentNumber += stepValue;
        currentStep++;
        
        if (currentStep >= steps) {
            currentNumber = number;
            clearInterval(interval);
        }
        
        // Format number based on original format
        let displayNumber;
        if (text.includes('.')) {
            displayNumber = currentNumber.toFixed(1);
        } else {
            displayNumber = Math.round(currentNumber);
        }
        
        element.textContent = displayNumber + suffix;
    }, stepDuration);
}

// Animate neural network background
function animateNeuralNetwork() {
    const nodes = document.querySelectorAll('.neural-node');
    const connections = document.querySelectorAll('.neural-connection');
    
    // Randomize animation delays for more organic feel
    nodes.forEach(node => {
        const delay = Math.random() * 2;
        node.style.animationDelay = `${delay}s`;
    });
    
    connections.forEach(connection => {
        const delay = Math.random() * 3;
        connection.style.animationDelay = `${delay}s`;
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger to X
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
        
        // Close menu on link click (mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
}

// Form Handlers Setup
function setupFormHandlers() {
    // Handle service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Handle button interactions with enhanced feedback
    const buttons = document.querySelectorAll('button, .pricing-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            createRippleEffect(e, this);
        });
    });
}

// ROI Calculator Setup
function setupROICalculator() {
    const employeesInput = document.getElementById('employees');
    const revenueInput = document.getElementById('revenue');
    const supportHoursInput = document.getElementById('support-hours');
    
    const annualSavingsEl = document.getElementById('annual-savings');
    const roiPercentageEl = document.getElementById('roi-percentage');
    const paybackPeriodEl = document.getElementById('payback-period');

    function calculateROI() {
        if (!employeesInput || !revenueInput || !supportHoursInput) return;
        
        const employees = parseInt(employeesInput.value) || 50;
        const monthlyRevenue = parseInt(revenueInput.value) || 100000;
        const supportHours = parseInt(supportHoursInput.value) || 40;

        // AI automation savings calculations
        const automationSavings = employees * 150; // $150 per employee per month
        const supportSavings = supportHours * 25 * 4; // $25/hour saved, 4 weeks
        const leadGenSavings = monthlyRevenue * 0.15; // 15% revenue increase from AI
        
        const monthlySavings = automationSavings + supportSavings + leadGenSavings;
        const annualSavings = monthlySavings * 12;
        const cloudwowxCost = 143 * 12; // Annual CloudwowX cost
        
        const netSavings = annualSavings - cloudwowxCost;
        const roiPercentage = Math.round((netSavings / cloudwowxCost) * 100);
        const paybackMonths = (cloudwowxCost / monthlySavings).toFixed(1);

        // Update display
        if (annualSavingsEl) annualSavingsEl.textContent = `$${netSavings.toLocaleString()}`;
        if (roiPercentageEl) roiPercentageEl.textContent = `${roiPercentage}%`;
        if (paybackPeriodEl) paybackPeriodEl.textContent = `${paybackMonths} months`;

        // Track calculator usage
        trackEvent('roi_calculation', {
            employees: employees,
            revenue: monthlyRevenue,
            annual_savings: netSavings
        });
    }

    // Add event listeners for real-time calculation
    if (employeesInput && revenueInput && supportHoursInput) {
        [employeesInput, revenueInput, supportHoursInput].forEach(input => {
            input.addEventListener('input', calculateROI);
        });
        
        // Initial calculation
        calculateROI();
    }
}

// Live Activity Setup
function setupLiveActivity() {
    const activities = [
        { name: "Michael from California", action: "just booked a consultation", time: 2 },
        { name: "Sarah from New York", action: "started their AI transformation", time: 8 },
        { name: "David from Texas", action: "just booked a consultation", time: 15 },
        { name: "Lisa from Florida", action: "purchased the AI Starter Kit", time: 23 },
        { name: "John from Chicago", action: "completed their AI setup", time: 31 },
        { name: "Emma from Seattle", action: "just booked a consultation", time: 45 },
        { name: "Carlos from Miami", action: "upgraded to premium AI package", time: 52 }
    ];

    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;

    function updateActivity() {
        // Rotate activities every 8 seconds
        const currentItems = activityFeed.querySelectorAll('.activity-item');
        
        // Add new activity at top
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const newItem = document.createElement('div');
        newItem.className = 'activity-item';
        newItem.innerHTML = `
            <div class="activity-avatar">${Math.random() > 0.5 ? '👨‍💼' : '👩‍💼'}</div>
            <div class="activity-content">
                <strong>${randomActivity.name}</strong> ${randomActivity.action}
                <div class="activity-time">just now</div>
            </div>
        `;
        
        activityFeed.insertBefore(newItem, activityFeed.firstChild);
        
        // Update timestamps
        const timeElements = activityFeed.querySelectorAll('.activity-time');
        timeElements.forEach((element, index) => {
            if (index === 0) return; // Skip the "just now" item
            const minutes = Math.floor(Math.random() * 60) + (index * 5);
            element.textContent = `${minutes} minutes ago`;
        });
        
        // Remove excess items (keep only 4)
        while (activityFeed.children.length > 4) {
            activityFeed.removeChild(activityFeed.lastChild);
        }
    }

    // Update activity every 8 seconds
    setInterval(updateActivity, 8000);
}

// Countdown Timer Setup
function setupCountdownTimer() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!hoursEl || !minutesEl || !secondsEl) return;

    // Set initial time (12 hours, 47 minutes, 23 seconds)
    let totalSeconds = 12 * 3600 + 47 * 60 + 23;

    function updateTimer() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');

        totalSeconds--;

        // Reset timer when it reaches 0
        if (totalSeconds < 0) {
            totalSeconds = 12 * 3600 + Math.floor(Math.random() * 60) * 60 + Math.floor(Math.random() * 60);
        }
    }

    // Update timer every second
    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}

// Create ripple effect for buttons
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Performance Optimizations
function setupPerformanceOptimizations() {
    // Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Setup performance monitoring
    if ('PerformanceObserver' in window) {
        monitorPerformance();
    }
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Monitor performance
function monitorPerformance() {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
            }
        }
    });
    
    observer.observe({ entryTypes: ['measure'] });
    
    // Measure page load time
    window.addEventListener('load', () => {
        performance.mark('page-loaded');
        performance.measure('page-load-time', 'navigationStart', 'page-loaded');
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Could implement error reporting here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could implement error reporting here
});

// Export functions for global access
window.scrollToBooking = scrollToBooking;
window.scrollToServices = scrollToServices;

// Analytics Integration (if needed)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Track Event:', eventName, properties);
    
    // Example implementation:
    // gtag('event', eventName, properties);
    // or
    // analytics.track(eventName, properties);
}

// Track important user interactions
document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (target) {
        const text = target.textContent.trim();
        const href = target.href;
        
        if (href && href.includes('buy.stripe.com')) {
            trackEvent('purchase_initiated', { product: 'AI Starter Kit' });
        } else if (href && href.includes('cal.com')) {
            trackEvent('booking_initiated', { type: 'consultation' });
        } else if (text.includes('Book') || text.includes('Demo')) {
            trackEvent('demo_requested', { button_text: text });
        }
    }
});

// Progressive Web App features (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Dark mode toggle (if needed)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', !document.body.classList.contains('light-mode'));
}

// Initialize dark mode preference
function initializeDarkMode() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'false') {
        document.body.classList.add('light-mode');
    }
}

// Call on page load
// initializeDarkMode();
