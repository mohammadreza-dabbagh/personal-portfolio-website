document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.querySelector('.nav-toggle'); 
    const navList = document.querySelector('.nav-list');     
    const navLinks = document.querySelectorAll('.nav-link'); 

    const toggleMenu = () => {
        navList.classList.toggle('active');
        
    };

    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                
                toggleMenu(); 
            }
        });
    });
});
