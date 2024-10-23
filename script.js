
        // Initialize AOS Animation Library
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Initialize Hero Slideshow
        function heroSlider() {
            return {
                currentSlide: 0,
                slides: [
                    {
                        image: './three.webp',
                        title: 'Luxury Interior Design',
                        subtitle: 'Creating spaces that inspire and transform'
                    },
                    {
                        image: './second.webp',
                        title: 'Modern Living Spaces',
                        subtitle: 'Where comfort meets elegance'
                    },
                    {
                        image: './first.webp',
                        title: 'Exceptional Design',
                        subtitle: 'Crafting unique environments'
                    }
                ],
                init() {
                    // Auto-advance slides every 5 seconds
                    setInterval(() => this.nextSlide(), 5000);
                },
                nextSlide() {
                    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                },
                prevSlide() {
                    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                }
            };
        }

        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                const mobileMenu = document.querySelector('[x-data]').__x.$data;
                if (mobileMenu) {
                    mobileMenu.isOpen = false;
                }
            });
        });

        // Form Submission
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add your form submission logic here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
