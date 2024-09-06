function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    // Toggle the nav-links class for opening/closing the menu
    navLinks.classList.toggle('open');
    
    // Animate the burger icon
    burger.classList.toggle('toggle');
}
