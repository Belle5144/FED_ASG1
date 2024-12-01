//Make the password visible
function togglePassword() {
    const passwordField = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password'; 
        eyeIcon.classList.remove('fa-eye-slash'); 
        eyeIcon.classList.add('fa-eye');
    }
}

function signIn() {
    event.preventDefault()
    const inputEmail = document.querySelector("#email-input");
    const inputPassword = document.querySelector("#password-input");

    var arrayEmailLC = JSON.parse(localStorage.getItem("emailLC"));          //retrieves the value stored in localStorage with the key "emailLC".
    var arrayPwLC = JSON.parse(localStorage.getItem("pwLC"));                //converts the string into a JavaScript array.

    const arrayEmail = [];                                                   //Create an new array to store the available values
    const arrayPw = [];

    if (arrayEmailLC != null) {                                              //pushing the values into the array
        for (const i in arrayEmailLC) {
            arrayEmail.push(arrayEmailLC[i]);
        }
        for (const i in arrayPwLC) {
            arrayPw.push(arrayPwLC[i]);
        }
    }

    var email = inputEmail.value;                                            //getting input values
    var password = inputPassword.value;

    if (arrayEmail.includes(email)) {                                        //check if the input email is present in the array email list
        var getAcc = arrayEmail.findIndex((element) => element == email);    //find the position of the input email in the array
        if(arrayEmail[getAcc] === email && arrayPw[getAcc] === password) {   //checking if both email and password are correct
            const username = email.split('@')[0];                            // split the email to access first part as username
            localStorage.setItem('loginUser', username);                     //save it in local storage
            localStorage.isLogin = true;
            openSuccessModal()
        } else {
            alert("Invalid Password!");
        }
    }
    else { 
        alert("Account does not exist!");
        return false;
    }
}

function openSignUpModal(){
    event.preventDefault();
    fetch('sign_up.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;

            
            const script = document.createElement('script');
            script.src = 'modal.js';  
            script.onload = () => {
                console.log('Modal JS loaded');
            };

            document.body.appendChild(script);
            const script2 = document.createElement('script');
            script2.src = 'sign_up.js'; 
            script2.onload = () => {
                console.log('Sign up JS loaded');
            }
            document.body.appendChild(script2);
            Animation1('.full-screen-wrapper', '.modal-container');
        });
}
function openSuccessModal(){
    fetch('success_dialog.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;

            const script = document.createElement('script');
            script.src = 'modal.js';  
            script.onload = () => {
                console.log('External JS loaded');
            };
            document.body.appendChild(script); 
            const script2 = document.createElement('script');
            script2.src = 'success_dialog.js'; 
            script2.onload = () => {
                console.log('Success dialog JS loaded');
            }
            document.body.appendChild(script2);
            Animation1('.full-screen-wrapper', '.modal-container');
        });
}