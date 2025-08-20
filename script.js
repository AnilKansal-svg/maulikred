document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Toggle dropdown on click
    if (dropdown) {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }
    
    // Scroll to top/bottom button
    const scrollBtn = document.getElementById('scrollBtn');
    const scrollArrow = document.getElementById('scrollArrow');
    const scrollThreshold = 300; // Pixels to scroll before showing the button
    let isAtBottom = false;

    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        
        // Check if we're at the bottom of the page
        isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;
        
        // Toggle button visibility
        if (scrollPosition > scrollThreshold || isAtBottom) {
            scrollBtn.classList.add('visible');
            
            // Flip arrow based on scroll position
            if (isAtBottom) {
                scrollBtn.classList.add('flip');
                scrollArrow.alt = 'Scroll to top';
            } else {
                scrollBtn.classList.remove('flip');
                scrollArrow.alt = 'Scroll to bottom';
            }
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top or bottom when button is clicked
    scrollBtn.addEventListener('click', function() {
        if (isAtBottom) {
            // If at bottom, scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // If not at bottom, scroll to bottom
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
});
