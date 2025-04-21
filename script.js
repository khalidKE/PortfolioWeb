document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < header.offsetHeight - 100) {
            navLinksItems.forEach(link => link.classList.remove('active'));
            document.querySelector('a[href="#home"]').classList.add('active');
            return;
        }
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksItems.forEach(link => link.classList.remove('active'));
                document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Navbar Background Change on Scroll
    function changeNavbarBackground() {
        const navbar = document.getElementById('navbar');
        
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', changeNavbarBackground);
    
    const skillSection = document.getElementById('skills');
    const skillLevels = document.querySelectorAll('.skill-level');
    let animated = false;
    
    function animateSkills() {
        const sectionTop = skillSection.offsetTop;
        const sectionHeight = skillSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (!animated && scrollPosition > sectionTop - window.innerHeight / 1.5) {
            skillLevels.forEach(level => {
                const width = level.style.width;
                level.style.width = '0';
                setTimeout(() => {
                    level.style.width = width;
                }, 200);
            });
            animated = true;
        }
    }
    
    window.addEventListener('scroll', animateSkills);
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        contactForm.reset();
    });
    
    // Initialize the page with active nav link
    highlightNavLink();
});