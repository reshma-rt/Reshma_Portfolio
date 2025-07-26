<script>
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close');

    if (modal && modalContent && closeModal) {
        document.querySelectorAll('.certificate-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const certificateUrl = this.getAttribute('href');
                modalContent.innerHTML = `
            <span class="close">&times;</span>
            <img src="${certificateUrl}" alt="Certificate" style="width: 100%; border-radius: 10px;">
        `;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('.progress').forEach(progressBar => {
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 500);
    });

    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'translateY(-10px)';
            skill.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
        });

        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'translateY(0)';
            skill.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
    });

    document.querySelectorAll('.progress').forEach(progress => {
        progress.addEventListener('mouseenter', () => {
            progress.style.background = 'linear-gradient(90deg, #00e6ad, #6c63ff)';
        });
        progress.addEventListener('mouseleave', () => {
            progress.style.background = 'linear-gradient(90deg, #6c63ff, #00e6ad)';
        });
    });

    const header = document.querySelector('.header');
    if (header) {
        const text = header.textContent;
        header.textContent = '';
        let i = 0;
        const typingSpeed = 100;

        function typeWriter() {
            if (i < text.length) {
                header.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    header.textContent = '';
                    i = 0;
                    typeWriter();
                }, 2000);
            }
        }
        typeWriter();
    }

    const addGlowEffect = (section) => {
        if (section) {
            section.addEventListener('mouseenter', () => {
                section.style.boxShadow = '0 0 30px rgba(0, 255, 195, 0.5)';
            });

            section.addEventListener('mouseleave', () => {
                section.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            });
        }
    };

    addGlowEffect(document.querySelector('.profile-section'));
    addGlowEffect(document.querySelector('.about-me'));

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }

    const textarea = document.getElementById('autoTextarea');
    if (textarea) {
        autoResize(textarea);

        textarea.addEventListener('input', function () {
            autoResize(this);
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            document.getElementById("fullnameError").textContent = "";
            document.getElementById("mailError").textContent = "";

            const fullname = this.name.value.trim();
            const email = this.mail.value.trim();
            const message = document.getElementById("autoTextarea").value.trim();
            let isValid = true;

            if (!fullname) {
                document.getElementById("fullnameError").textContent = "Name is required";
                isValid = false;
            } else if (!/^[A-Za-z ]+$/.test(fullname)) {
                document.getElementById("fullnameError").textContent = "Only letters and spaces allowed";
                isValid = false;
            }

            if (!email) {
                document.getElementById("mailError").textContent = "Email is required";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById("mailError").textContent = "Invalid email format";
                isValid = false;
            }

            if (isValid) {
                const existingThankYou = document.querySelector('.thank-you-message');
                if (existingThankYou) {
                    existingThankYou.remove();
                }
                const thankYouMessage = document.createElement('div');
                thankYouMessage.className = 'thank-you-message';
                thankYouMessage.innerHTML = `
            <h3>Thank you, ${fullname}!</h3>
            <p>Your message has been sent successfully.</p>
            <p>I'll get back to you soon.</p>
        `;
                this.parentNode.insertBefore(thankYouMessage, this.nextSibling);
                this.style.display = 'none';
                this.reset();
                if (textarea) {
                    textarea.style.height = 'auto';
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
</script>