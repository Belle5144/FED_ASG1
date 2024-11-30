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

function signUp(){
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

    // Validation for email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        console.log("Valid email");
    else {
        alert("Invalid email address!")
        return false;
    }

    // Validation for password
    if (/^\w{7,14}$/.test(password))
        console.log("Valid password!");
    else {
        alert("Invalid password!\n\nPassword have to be:\n" +
            " \u27A5 in 7-14 characters\n \u27A5 only letters, numbers, underscore")
        return false;
    }

    // Email already exist
    if (arrayEmail.includes(email)) {
        alert("This email has already registered!");
        return false;
    }

    // If not exist, add data into array
    arrayEmail.push(email);
    arrayPw.push(password);
    localStorage.setItem('emailLC', JSON.stringify(arrayEmail));
    localStorage.setItem('pwLC', JSON.stringify(arrayPw));
    const username = email.split('@')[0];
    localStorage.setItem('loginUser', username);
    localStorage.isLogin = true;

    openSuccessModal()
}

function openContinueWithGoogleModal(){
    event.preventDefault();
    fetch('continue_with_google.html')
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
            script2.src = 'continue_with_google.js'; // Path to the second script
            script2.onload = () => {
                console.log('Continue with google dialog JS loaded');
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
            console.error('Error fetching the Continue With Google HTML:', error);
        });
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
                // Change the dialog text to register
                const dialogTitle = document.querySelector("#dialog-title");
                dialogTitle.textContent = "Register Successful!";
                const dialogDetails = document.querySelector('#dialog-details');
                dialogDetails.textContent = "Welcome to Milly! You have successfully registered!.";

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