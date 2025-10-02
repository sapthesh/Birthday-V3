document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('startButton');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const unfoldButton = document.getElementById('unfoldButton');
    const finalGreetingElement = document.getElementById('finalGreeting');

    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4'),
    };

    const recipientName = "Sapthesh"; // Customizable Name
    const messageGreeting = "Happy Birthday,"; // Customizable Greeting

    // --- Utility Function to Transition Steps ---
    function transitionToStep(targetStepId) {
        const currentActive = document.querySelector('.step.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        steps[targetStepId].classList.add('active');
    }

    // --- Step 1: Welcome Screen Interactions ---
    startButton.addEventListener('click', () => {
        transitionToStep('step2');
        // Autoplay music (often requires user interaction first)
        backgroundMusic.play().catch(error => {
            console.log("Autoplay prevented:", error);
            // Optionally, show a play button if autoplay fails
        });
    });

    // --- Step 2: Envelope Interactions ---
    envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        envelopeContainer.querySelector('.click-instruction').style.opacity = '0'; // Hide instruction
        setTimeout(() => {
            transitionToStep('step3');
            setTimeout(() => {
                document.getElementById('letterContainer').classList.add('show');
            }, 100); // Small delay for letter reveal animation
        }, 700); // Duration matches envelope flap animation
    });

    // --- Step 3: Letter Unfold Interactions ---
    unfoldButton.addEventListener('click', () => {
        transitionToStep('step4');
        startCelebrationAnimations();
    });

    // --- Step 4: Grand Celebration Animations ---
    function startCelebrationAnimations() {
        // --- Typewriter Effect for Main Greeting ---
        let i = 0;
        finalGreetingElement.textContent = ''; // Clear content
        finalGreetingElement.style.borderRight = '3px solid var(--accent-yellow)'; // Ensure cursor is visible
        
        const typingInterval = setInterval(() => {
            if (i < messageGreeting.length) {
                finalGreetingElement.textContent += messageGreeting.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                finalGreetingElement.classList.add('typed'); // Add class to manage cursor animation after typing
            }
        }, 100); // Typing speed

        // --- Confetti Cannon Effect ---
        createConfettiCannon(100, 0.5); // Count, delay
        setTimeout(() => createConfettiCannon(80, 0.3), 500); // Second burst
        setTimeout(() => createConfettiCannon(60, 0.2), 1000); // Third burst

        // --- Rising Balloons ---
        createBalloons(15);

        // --- Background Fireworks (Subtle) ---
        createFireworks(5); // Number of firework bursts
    }

    // --- Confetti Cannon Helper ---
    function createConfettiCannon(count, delayMultiplier) {
        const confettiCannonContainer = document.querySelector('.confetti-cannon-container');
        const colors = ['var(--primary-red)', 'var(--accent-yellow)', 'var(--text-light)', '#00d8d6', '#8e44ad']; // Use CSS variables

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}vw`; // Random start X
            confetti.style.top = `${Math.random() * 20 - 10}vh`; // Slightly above/below top of screen

            // Randomize duration and delay
            const duration = Math.random() * 2 + 3; // 3-5 seconds
            const delay = Math.random() * delayMultiplier;
            confetti.style.animationDuration = `${duration}s`;
            confetti.style.animationDelay = `${delay}s`;
            
            // Randomize size and shape
            const size = Math.random() * 8 + 4; // 4-12px
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            if (Math.random() > 0.5) confetti.style.borderRadius = '50%'; // Make some circular

            // Randomize initial rotation for confetti
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            confettiCannonContainer.appendChild(confetti);

            // Remove after animation to prevent DOM bloat
            confetti.addEventListener('animationend', () => confetti.remove());
        }
    }

    // --- Balloons Helper ---
    function createBalloons(count) {
        const balloonsContainer = document.querySelector('.balloons-container');
        const colors = ['var(--primary-red)', 'var(--accent-yellow)', '#00d8d6', '#8e44ad', '#3498db'];

        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');

            balloon.style.left = `${Math.random() * 80 + 10}vw`; // Avoid edges
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = `${Math.random() * 6 + 10}s`; // 10-16s duration
            balloon.style.animationDelay = `${Math.random() * 5}s`; // Staggered start

            balloonsContainer.appendChild(balloon);

            // Remove after animation
            balloon.addEventListener('animationend', () => balloon.remove());
        }
    }

    // --- Fireworks Helper ---
    function createFireworks(count) {
        const fireworksContainer = document.querySelector('.fireworks-container');
        const colors = ['var(--primary-red)', 'var(--accent-yellow)', 'var(--text-light)', '#00d8d6'];

        for (let i = 0; i < count; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            
            firework.style.left = `${Math.random() * 80 + 10}vw`;
            firework.style.bottom = `${Math.random() * 20}vh`; // Launch from bottom 20%
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.boxShadow = `0 0 5px ${firework.style.backgroundColor}`; // Match box shadow to color
            
            // Stagger animation delay
            const delay = Math.random() * 3; // 0-3 second delay
            firework.style.animationDelay = `${delay}s, ${delay + 3}s`; // Launch and then explode
            
            fireworksContainer.appendChild(firework);

            firework.addEventListener('animationend', () => firework.remove());
        }
    }
});
