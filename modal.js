window.onload = () => {
    document.querySelector('.full-screen-wrapper').classList.add('loaded');
};

function closeModal(){
    const modal = document.querySelector('.full-screen-wrapper');
    const loginContainer = document.querySelector('.modal-container');
    
    // Ensure initial state for animation
    modal.style.opacity = '0'; // Initially hidden
    loginContainer.style.top = '-100%'; // Start off-screen
    document.body.style.overflow = 'auto';
}   