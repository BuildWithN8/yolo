// Motivational quotes for the YOLO BOLO experience
const motivationalQuotes = [
    "🚀 You are capable of amazing things! Keep pushing forward!",
    "⭐ Every moment is a chance to create something extraordinary!",
    "🎯 Your dreams are valid. Chase them with passion!",
    "💫 Success is not final, failure is not fatal: it's courage that counts!",
    "🌟 Be yourself; everyone else is already taken!",
    "🔥 The only impossible journey is the one you never begin!",
    "💎 You don't have to be great to get started, but you have to get started to be great!",
    "🌈 Life is 10% what happens to you and 90% how you react to it!",
    "🎪 Make today so awesome that yesterday gets jealous!",
    "🦋 Don't wait for opportunity. Create it!"
];

// Show random motivational message
function showMotivation() {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    showNotification(randomQuote);
    
    // Add bounce animation to the button with safety check
    const button = safeQuerySelector('.cta-button');
    if (button) {
        button.classList.add('bounce');
        setTimeout(() => {
            button.classList.remove('bounce');
        }, 2000);
    }
}

// Join movement functionality
function joinMovement() {
    const emailInput = document.getElementById('emailInput');
    if (!emailInput) {
        showNotification('🚨 Error: Email input not found!', 'error');
        return;
    }
    
    const email = emailInput.value.trim();
    
    if (email === '') {
        showNotification('🚨 Please enter your email address!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('🚨 Please enter a valid email address!', 'error');
        return;
    }
    
    // Simulate joining the movement
    showNotification('🎉 Welcome to the YOLO BOLO movement! Get ready to live boldly!', 'success');
    emailInput.value = '';
    
    // Add some celebration effects
    createConfetti();
}

// Email validation and notification functions are now in utils.js

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#ffa500', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const duration = Math.random() * 3000 + 2000;
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Smooth scrolling for navigation links (FIXED - was breaking external links)
document.addEventListener('DOMContentLoaded', function() {
    setupSmoothNavigation();
});

// Add parallax effect to floating elements with debouncing for performance
const parallaxEffect = debounce(function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const floatingElements = safeQuerySelectorAll('.element');
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.3;
        element.style.transform = `translateY(${rate * speed}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', parallaxEffect);

// Initialize typing effect when page loads (using utils.js typeWriter)
window.addEventListener('load', function() {
    const heroTitle = safeQuerySelector('.hero-content h2');
    const heroSubtitle = safeQuerySelector('.hero-content h3');
    
    if (heroTitle && heroSubtitle) {
        const originalTitle = heroTitle.textContent;
        const originalSubtitle = heroSubtitle.textContent;
        
        typeWriter(heroTitle, originalTitle, 100);
        setTimeout(() => {
            typeWriter(heroSubtitle, originalSubtitle, 80);
        }, originalTitle.length * 100 + 500);
    }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = safeQuerySelectorAll('.about-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add keyboard support for email input
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                joinMovement();
            }
        });
    }
});

// Add random color changes to floating elements with managed intervals
createManagedInterval(function() {
    const elements = safeQuerySelectorAll('.element');
    const colors = ['#ff6b6b', '#ffa500', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
    
    elements.forEach(element => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.textShadow = `0 0 20px ${randomColor}`;
    });
}, 3000);

// Add welcome message when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        showNotification('🎉 Welcome to YOLO BOLO! Ready to live your best life?');
    }, 2000);
});