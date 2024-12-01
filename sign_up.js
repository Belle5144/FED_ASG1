function togglePassword() {
    const passwordField = document.getElementById('password-input');     // Selects the password input field by its ID
    const eyeIcon = document.getElementById('eye-icon');                 // Selects the eye icon by its ID

    if (passwordField.type === 'password') {                             // If the field type is 'password' (hidden characters)
        passwordField.type = 'text';                                     // Change it to 'text', making the characters visible
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';                                 // Hide password
        eyeIcon.classList.remove('fa-eye-slash');                        // Remove the 'eye' icon class
        eyeIcon.classList.add('fa-eye');                                 // Add the 'eye-slash' icon class to indicate visibility
    }
}
function signUp(){
    event.preventDefault()
    const inputEmail = document.querySelector("#email-input");
    const inputPassword = document.querySelector("#password-input");

    var arrayEmailLC = JSON.parse(localStorage.getItem("emailLC"));      //retrieves the value stored in localStorage with the key "emailLC".
    var arrayPwLC = JSON.parse(localStorage.getItem("pwLC"));            //converts the string into a JavaScript array.
 
    const arrayEmail = [];                                               //Create an new array to store the available values
    const arrayPw = [];

    if (arrayEmailLC != null) {                                          //pushing the values into the array
        for (const i in arrayEmailLC) {
            arrayEmail.push(arrayEmailLC[i]);
        }
        for (const i in arrayPwLC) {
            arrayPw.push(arrayPwLC[i]);
        }
    }
    var email = inputEmail.value;                                        //getting the input values
    var password = inputPassword.value;

    // Validation for email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){}   //method executes the regex and checks if the email matches the pattern
    else {
        alert("Invalid email address!")                                  //browser alert
        return false;                                                    //terminates the entire function
    }

    // Validation for password
    if (/^\w{7,14}$/.test(password)){}
    else {
        alert("Invalid password!\n\nPassword have to be:\n" +
            " \u27A5 in 7-14 characters\n \u27A5 only letters, numbers, underscore")
        return false;
    }

    if (arrayEmail.includes(email)) {                                   //Checking if the email existed, sign up before
        alert("This email has already registered!");
        return false;
    }

    arrayEmail.push(email);                                             //If not exist, add data into array
    arrayPw.push(password);
    localStorage.setItem('emailLC', JSON.stringify(arrayEmail));        //Saves the arrayEmail to localStorage and convert it back to string
    localStorage.setItem('pwLC', JSON.stringify(arrayPw));
    const username = email.split('@')[0];                               //spliting the email and accessing the front part
    localStorage.setItem('loginUser', username);                        //Saves it as a username
    localStorage.isLogin = true;                                        //Updating log in status

    openSuccessModal()
}

function openContinueWithGoogleModal() {
    event.preventDefault();                                                        // Prevent default behavior, refreshing

    fetch('continue_with_google.html')
        .then(response =>response.text())                                          // Get the HTML content as a string
        .then(html => {
            const modalPlaceholder = document.getElementById('modal-placeholder'); //Get the ID
            modalPlaceholder.innerHTML = html;                                     //Insert vthe contents into the ID
            Animation1('.full-screen-wrapper', '.modal-container');
        });
}

function openSuccessModal(){
    fetch('success_dialog.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('modal-placeholder').innerHTML = html;
            const script = document.createElement('script');                       //Creatng script to contain js
            script.src = 'modal.js';  
            script.onload = () => {                                                //onload ensures that your code runs only after the content has been added
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