// Shared utilities for YOLO BOLO projects

// Email validation utility
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification utility with error handling
function showNotification(message, type = 'success') {
    try {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        notification.textContent = message; // Use textContent for security
        
        // Style based on type
        if (type === 'error') {
            notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
            notification.setAttribute('aria-label', 'Error message');
        } else {
            notification.setAttribute('aria-label', 'Success message');
        }
        
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide notification after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    } catch (error) {
        console.error('Error showing notification:', error);
    }
}

// Typing effect utility with safety checks
function typeWriter(element, text, speed = 100) {
    if (!element || !text) return;
    
    let i = 0;
    element.textContent = ''; // Use textContent for security
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Debounce utility for performance optimization
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

// Throttle utility for performance optimization
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
    }
}

// Safe DOM query utility
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.error('Error selecting element:', selector, error);
        return null;
    }
}

// Safe DOM query all utility
function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.error('Error selecting elements:', selector, error);
        return [];
    }
}

// Cleanup utility for intervals
const activeIntervals = new Set();

function createManagedInterval(callback, delay) {
    const intervalId = setInterval(callback, delay);
    activeIntervals.add(intervalId);
    return intervalId;
}

function clearManagedInterval(intervalId) {
    clearInterval(intervalId);
    activeIntervals.delete(intervalId);
}

function clearAllManagedIntervals() {
    activeIntervals.forEach(intervalId => clearInterval(intervalId));
    activeIntervals.clear();
}

// Clean up intervals when page is about to unload
window.addEventListener('beforeunload', clearAllManagedIntervals);

// Navigation utility with proper link handling
function setupSmoothNavigation() {
    const navLinks = safeQuerySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // External links and page links work normally
        });
    });
}

// Export utilities for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showNotification,
        typeWriter,
        debounce,
        throttle,
        safeQuerySelector,
        safeQuerySelectorAll,
        createManagedInterval,
        clearManagedInterval,
        clearAllManagedIntervals,
        setupSmoothNavigation
    };
}