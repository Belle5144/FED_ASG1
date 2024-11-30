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

function openContinueWithGoogleModal(){
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