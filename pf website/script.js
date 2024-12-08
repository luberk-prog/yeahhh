
// Add event listener to nav links with animation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        link.classList.add('active-link');
        setTimeout(() => {
            link.classList.remove('active-link');
        }, 2000);
    });
});

// Add animation to projects grid with hover effects
const projectGrid = document.querySelector('.project-grid');
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.1)';
        project.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        project.style.borderRadius = '10px';
        project.style.transition = 'all 0.3s ease-in-out';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        project.style.borderRadius = '5px';
        project.style.transition = 'all 0.3s ease-in-out';
    });

    project.addEventListener('click', () => {
        project.style.transform = 'scale(1.2)';
        project.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.3)';
        project.style.borderRadius = '15px';
        project.style.transition = 'all 0.3s ease-in-out';
        setTimeout(() => {
            project.style.transform = 'scale(1)';
            project.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            project.style.borderRadius = '5px';
            project.style.transition = 'all 0.3s ease-in-out';
        }, 2000);
    });
});

// Add parallax effect to background
const background = document.querySelector('.background');
window.addEventListener('scroll', () => {
    background.style.transform = `translateY(${window.scrollY * 0.1}px)`;
});

// Add fade-in effect to sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop - sectionHeight / 2) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});

// Add hover effect to about section
const aboutSection = document.querySelector('about');
const aboutImage = aboutSection.querySelector('img');
const aboutText = aboutSection.querySelector('.text');

aboutSection.addEventListener('mouseover', () => {
    aboutImage.style.transform = 'scale(1.2)';
    aboutImage.style.zIndex = '1';
    aboutText.style.transform = 'translateX(200px)';
    aboutText.style.opacity = '1';
});

aboutSection.addEventListener('mouseout', () => {
    aboutImage.style.transform = 'scale(1)';
    aboutImage.style.zIndex = '0';
    aboutText.style.transform = 'translateX(0)';
    aboutText.style.opacity = '0';
});