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
    
    // Add bounce animation to the button
    const button = document.querySelector('.cta-button');
    button.classList.add('bounce');
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 2000);
}

// Join movement functionality
function joinMovement() {
    const emailInput = document.getElementById('emailInput');
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

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style based on type
    if (type === 'error') {
        notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
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
            notification.remove();
        }, 300);
    }, 4000);
}

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

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add parallax effect to floating elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const floatingElements = document.querySelectorAll('.element');
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.3;
        element.style.transform = `translateY(${rate * speed}px)`;
    });
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h2');
    const heroSubtitle = document.querySelector('.hero-content h3');
    
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
    const cards = document.querySelectorAll('.about-card, .feature-card');
    
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

// Add random color changes to floating elements
setInterval(function() {
    const elements = document.querySelectorAll('.element');
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