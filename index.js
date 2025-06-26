        // Confetti effect
        function createConfetti() {
            const colors = ['#ff6b6b', '#ffb8b8', '#ffd166', '#06d6a0', '#118ab2', '#ef476f'];

            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';

                document.body.appendChild(confetti);

                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Surprise button
        document.getElementById('surpriseBtn').addEventListener('click', function() {
            createConfetti();

            // Create floating hearts
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.fontSize = Math.random() * 30 + 20 + 'px';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.opacity = '0.8';
                heart.style.zIndex = '1000';
                heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;

                document.body.appendChild(heart);

                // Keyframes for floating up
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes floatUp {
                        0% {
                            transform: translateY(0) rotate(0deg);
                            opacity: 0.8;
                        }
                        100% {
                            transform: translateY(-100vh) rotate(360deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);

                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                    style.remove();
                }, 5000);
            }

            // Play birthday song
            const audio = new Audio('https://www.soundjay.com/human/sounds/happy-birthday-song-01.mp3');
            audio.play().catch(e => console.log('Autoplay prevented:', e));

            // Change button text
            this.textContent = 'Surpresa Liberada! 🎉';
            setTimeout(() => {
                this.textContent = 'Clique para outra surpresa!';
            }, 3000);
        });

        // Create more balloons on click
        document.addEventListener('click', function(e) {
            if (e.target.id !== 'surpriseBtn') {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = e.clientX + 'px';
                balloon.style.bottom = '0';
                balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
                balloon.style.animationDuration = Math.random() * 10 + 10 + 's';

                document.body.appendChild(balloon);

                setTimeout(() => {
                    balloon.remove();
                }, 20000);
            }
        });

        // Typewriter effect for the main title
        const title = document.querySelector('h1');
        const originalText = title.textContent;
        title.textContent = '';

        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 150);

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const hero = document.querySelector('.hero');
            hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        });

        // Interactive photo gallery
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(' + (Math.random() * 10 - 5) + 'deg)';
            });

            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });