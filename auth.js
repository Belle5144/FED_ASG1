//Handle phone navigation logic
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('side-menu-close-button');
const sideMenu = document.getElementById('phone-side-menu');

hamburgerButton.addEventListener('click', () => {
    sideMenu.style.left = '0'; // Slide menu into view
});

closeButton.addEventListener('click', () => {
    sideMenu.style.left = '-250px'; // Hide menu
});

document.addEventListener('DOMContentLoaded', () => {
    //Check whether is login or not, hide the button
    const loginButton = document.querySelector('.login-button');
    const registerButton = document.querySelector('.Register-button');
    const phoneLoginButton = document.querySelector('.phone-login-button');
    const phoneRegisterButton = document.querySelector('.phone-Register-button');
    
    //Check auth status
    if(localStorage.isLogin == null){
        loginButton.addEventListener('click', openLoginModal)
        registerButton.addEventListener('click', openSignUpModal)
        phoneLoginButton.addEventListener('click', openLoginModal)
        phoneRegisterButton.addEventListener('click', openSignUpModal)
    } else {
        loginButton.style.display = 'initial';
        loginButton.textContent = 'Logout';
        loginButton.addEventListener('click', logout)
        phoneLoginButton.style.display = 'initial';
        phoneLoginButton.textContent = 'Logout';
        phoneLoginButton.addEventListener('click', logout)
        registerButton.style.display = 'none';
        phoneRegisterButton.style.display = 'none';
        if(localStorage.loginUser != null){
            //Show the name
            const userDisplay = document.createElement('h1');
            userDisplay.style.marginLeft = '10px'
            userDisplay.style.display = 'inline-block';
            userDisplay.style.fontSize = '14px';
            userDisplay.style.color = 'white';
            userDisplay.style.backgroundColor = '#53589A';
            userDisplay.style.padding = '15px';
            userDisplay.style.borderRadius = '50%';
            userDisplay.style.lineHeight = '25px';
            userDisplay.textContent = localStorage.loginUser || 'Guest'; // Show the current user or 'Guest' if not logged in
            const lastDiv = document.querySelector(".navigation-container div:last-of-type");
            console.log(lastDiv);
            lastDiv.appendChild(userDisplay);
        }
    }
})

function openLoginModal(){
    fetch('login.html')
        .then(response => response.text())  
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;

            //Dynamic load the javascript file to support modal function
            const script = document.createElement('script');
            script.src = 'modal.js';  // Path to your external JS file
            script.onload = () => {
                console.log('Modal JS loaded');
            };
            document.body.appendChild(script); // Append the script to the body
            const script2 = document.createElement('script');
            script2.src = 'login.js'; // Path to the second script
            script2.onload = () => {
                console.log('Login JS loaded');
            }
            document.body.appendChild(script2);
            
            // Get the modal and modal container elements
            const modal = document.querySelector('.full-screen-wrapper');
            const modalContainer = document.querySelector('.modal-container');
            if (modal && modalContainer) {
                // Make sure the modal is hidden.
                modal.style.opacity = '0'; 
                modalContainer.style.top = '-100%'; 

                //Delay it to make sure the content is load then only perform animation
                setTimeout(() => {
                    modal.style.transition = 'opacity 0.5s ease';
                    modalContainer.style.transition = 'top 0.8s ease, transform 0.8s ease';
                    modal.style.opacity = '1';
                    modalContainer.style.top = '50%';  
                    modalContainer.style.transform = 'translate(-50%, -50%)'; 
                }, 100); 

                // Prevent scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        })
        .catch(error => {
            console.error('Error fetching the Login HTML:', error);
        });
}

function openSignUpModal(){
    fetch('sign_up.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;

            //Dynamic load the javascript file to support modal function
            const script = document.createElement('script');
            script.src = 'modal.js';  // Path to your external JS file
            script.onload = () => {
                console.log('Modal JS loaded');
            };

            document.body.appendChild(script); // Append the script to the body
            const script2 = document.createElement('script');
            script2.src = 'sign_up.js'; // Path to the second script
            script2.onload = () => {
                console.log('Sign up JS loaded');
            }
            document.body.appendChild(script2);
            // Get the modal and modal container elements
            const modal = document.querySelector('.full-screen-wrapper');
            const modalContainer = document.querySelector('.modal-container');
            if (modal && modalContainer) {
                // Make sure the modal is hidden.
                modal.style.opacity = '0';
                modalContainer.style.top = '-100%';

                //Delay it to make sure the content is load then only perform animation
                setTimeout(() => {
                    modal.style.transition = 'opacity 0.5s ease';
                    modalContainer.style.transition = 'top 0.8s ease, transform 0.8s ease';
                    modal.style.opacity = '1';
                    modalContainer.style.top = '50%';
                    modalContainer.style.transform = 'translate(-50%, -50%)';
                }, 100);

                // Prevent scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        })
        .catch(error => {
            console.error('Error fetching the Sign up HTML:', error);
        });
}

function logout(){
    localStorage.removeItem('isLogin');
    localStorage.removeItem('loginUser')
    alert('Logout success')
    window.location.reload();
}
