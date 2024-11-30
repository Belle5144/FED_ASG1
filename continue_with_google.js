function togglePassword() {
    const passwordField = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');

    // toggle the input type between password and text
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password'; // Hide password
        eyeIcon.classList.remove('fa-eye-slash'); // Change icon to eye
        eyeIcon.classList.add('fa-eye');
    }
}

function openSignUpModal(){
    event.preventDefault();
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

function signIn() {
    event.preventDefault()
    const inputEmail = document.querySelector("#email-input");
    const inputPassword = document.querySelector("#password-input");

    // create local storage or get data from it
    var arrayEmailLC = JSON.parse(localStorage.getItem("emailLC"));
    var arrayPwLC = JSON.parse(localStorage.getItem("pwLC"));

    const arrayEmail = [];
    const arrayPw = [];

    // get all data from local storage and push into array
    if (arrayEmailLC != null) {
        for (const i in arrayEmailLC) {
            arrayEmail.push(arrayEmailLC[i]);
        }
        for (const i in arrayPwLC) {
            arrayPw.push(arrayPwLC[i]);
        }
    }

    var email = inputEmail.value;
    var password = inputPassword.value;

    if (arrayEmail.includes(email)) {
        var getAcc = arrayEmail.findIndex((element) => element == email);
        if(arrayEmail[getAcc] === email && arrayPw[getAcc] === password) {
            const username = email.split('@')[0];
            localStorage.setItem('loginUser', username);
            localStorage.isLogin = true;
            openSuccessModal()
        } else {
            alert("Invalid Password!");
        }
    }
    else { // account does not exist
        alert("Account does not exist!");
        return false;
    }
}

function openSuccessModal(){
    fetch('success_dialog.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;

            //Dynamic load the javascript file to support modal function
            const script = document.createElement('script');
            script.src = 'modal.js';  // Path to your external JS file
            script.onload = () => {
                console.log('External JS loaded');
            };
            document.body.appendChild(script); // Append the script to the body
            const script2 = document.createElement('script');
            script2.src = 'success_dialog.js'; // Path to the second script
            script2.onload = () => {
                console.log('Success dialog JS loaded');
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
            console.error('Error fetching the Success HTML:', error);
        });
}