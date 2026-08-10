document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sticky navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Form validation
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple frontend validation check
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            
            if (!name || !phone || !date) {
                alert('Please fill in all required fields.');
                return;
            }

            // Show success message
            const successMessage = document.getElementById('success-message');
            const formContent = document.getElementById('form-content');
            
            if (successMessage && formContent) {
                formContent.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }
            
            // In a real application, you would send the data to your API here
            console.log('Appointment booked for:', name);
        });
    }

    // Set active nav link based on current page
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentLocation || (currentLocation === '' && linkHref === 'index.html')) {
            link.classList.add('text-teal-600', 'font-semibold');
            link.classList.remove('text-slate-600');
        }
    });
});
