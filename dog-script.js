// Fun dog facts for the Dog World experience
const dogFacts = [
    "🐕 Dogs have unique nose prints, just like human fingerprints!",
    "🦴 A dog's mouth exerts 150-200 pounds of pressure per square inch!",
    "🎾 Dogs can learn over 1,000 words and can count up to four or five!",
    "🐾 Puppies are born deaf and blind, but their hearing is so sharp they can hear sounds at frequencies twice as high as humans!",
    "🏃 Greyhounds can run up to 45 miles per hour!",
    "💤 Dogs curl up in a ball when they sleep to conserve body heat and protect vital organs!",
    "🌈 Dogs can see colors, but not as many as humans - they see blues and yellows best!",
    "🎵 Dogs have a sense of time and can predict future events like walks and feeding times!",
    "❤️ Petting a dog can lower your blood pressure and reduce stress!",
    "🧠 Dogs are as smart as a 2-year-old child and can learn by watching other dogs!"
];

// Show random dog fact
function showDogFact() {
    const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
    showNotification(randomFact);
    
    // Add bounce animation to the button
    const button = document.querySelector('.cta-button');
    button.classList.add('bounce');
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 2000);
}

// Join dog community functionality
function joinDogCommunity() {
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
    
    // Simulate joining the dog community
    showNotification('🐕 Welcome to the Dog World community! Get ready for pawsome content!', 'success');
    emailInput.value = '';
    
    // Add some celebration effects
    createDogConfetti();
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

// Create dog-themed confetti effect
function createDogConfetti() {
    const dogEmojis = ['🐕', '🦴', '🎾', '🐾', '🏠', '❤️'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.fontSize = '20px';
        confetti.textContent = dogEmojis[Math.floor(Math.random() * dogEmojis.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-30px';
        confetti.style.zIndex = '9999';
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
            // Don't prevent default for external links (like index.html)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
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
                joinDogCommunity();
            }
        });
    }
});

// Add random animations to floating elements
setInterval(function() {
    const elements = document.querySelectorAll('.element');
    const animations = ['bounce', 'float', 'pulse'];
    
    elements.forEach(element => {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        element.style.animation = `${randomAnimation} 2s ease-in-out`;
        setTimeout(() => {
            element.style.animation = 'float 6s ease-in-out infinite';
        }, 2000);
    });
}, 5000);

// Add welcome message when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        showNotification('🐕 Welcome to Dog World! Ready to learn about our furry friends?');
    }, 2000);
});