# FED Assignment 1: Creating a Website
I have created an e-commerce website to deliver a seamless shopping experience for families. The website is warm and inviting designed to cater to parents looking for high-quality playful products for their children. It features an intuitive interface with clear navigation allowing users to easily explore products, view details and complete their purchases effortlessly.

Key highlights of the website include an organized homepage showing featured and upcoming products,  product list page providing an overview of all available items, while a detailed product page with options for size and color selection and a smooth interactive login and registration system. The website ensures a user-friendly experience with responsive design making it accessible across devices.

## Design Process
The design of this e-commerce website is centered around the needs of parents, our primary users. They are often busy and may not have so much time to spend on shopping, hence they would seek for a convenient and efficient website to purchase products for their children. Their primary goals are to quickly find suitable items, access the details of the product and complete purchases in a short period of time. Additionally, the website caters indirectly to children, as the playful and engaging design reflects the fun and family-oriented nature of the products.

### How the website helps to achieve these goals:
The project helps parents to achieve their goals by providing an easy-to-navigate structure, so that they can explore featured, upcoming, and all available products without confusion. Detailed product pages clearly display information like size, color, pricing, and reviews, helping parents make informed choices. The login and registration features are designed to be simple and secure. The warm color palette and clean layout ensure the website is not only visually appealing but also works well across all devices. Additionally, the playful design adds warmth and charm, making the shopping experience more enjoyable and stress-free for parents. It creates an inviting atmosphere that encourages exploration, helping parents feel at ease while finding the perfect products for their family.

### User Stories

1. As a parent, I want to browse a product list, so that I can see all the items available in one place and easily choose what I need.

2. As a parent, I want to view detailed product information, so that I can make informed decisions about my purchases.

3. As a parent, I want a secure and simple login and registration process, so that I can save my preferences and track my orders conveniently.

4. As a parent, I want the website to have a warm and inviting design, so that I feel comfortable and stress-free while shopping.

5. As a busy parent, I want the website to work seamlessly on any device, so that I can shop conveniently whether I’m at home or on the go.

Hence, I created a wireframe to provide an overview of how my website will appear in both mobile and desktop layouts. This wireframe showcases the key design elements, including navigation, product listings, detailed pages and interactive features, ensuring a seamless user experience across different devices.
figma link: https://www.figma.com/design/KYDULowpLwq5AzvUoLii7z/FED_S10268034_BelleChongQingXi_Assg1_wireframe?node-id=0-1&t=GY7OdMVuqz50yfgC-1

## Features
### Existing Features
- Allows users to navigate to different pages such as the Home, Products, and About Us page, by tapping on the respective links in the header  
- Allows users to browse all available products, by tapping on the product navigator  
- Allows users to browse information about the website, by tapping on the about us navigator  
- Allows users to access detailed information about a product, including size, color, price, and description, by clicking on a product in the 
  product list  
- Allows users to log in to their accounts by entering their email and passwords in the log in pop-up modal by tapping the Sign in button
- Allows users to register their accounts by entering their email and a password in the register modal by tapping the reguster button
- Allows users to see confirmation of a successful login or registration by displaying a message after the process  
- Allows users to get back to the page after signing in or registering an account by clicking "Return to Dashboard" (button)  
- Allows users to browse the website seamlessly on any device by adapting the layout to different screen sizes.

### Features Left to Implement
- Allows users to add selected products to a virtual shopping cart for purchase later, by clicking on the "Add to Cart" button on the product 
  details page.
- Allows users to find specific products quickly, by typing keywords into a search bar and receiving matching results
- Allows users to review their cart and complete purchases, by proceeding through a checkout page with payment and shipping options
- Allows users to sort and filter products by attributes like price, size, or color, by using options available on the product list page
- Allows users to view and edit their account details or track their orders, by accessing a dedicated profile page. 


## Technologies Used
- HTML5
    - Used for structuring the content and layout of the website, ensuring semantic and accessible design
- CSS3
    - Used for styling the website, including layouts, colors, fonts, and responsive design to ensure visual appeal across devices.
- JavaScript
    - Used to add interactivity, such as dynamic navigation, modal dialogs, and login/registration validation
- Font Awesome
    - Used for incorporating scalable icons for elements like search, login, and navigation buttons
- Normalize.css
    - Used to provide consistent styling across different browsers by normalizing default CSS
- Google Fonts (Varela Round)
    - Used to enhance the typography with a clean, rounded font that aligns with the website's playful design
- LocalStorage API
    - Used for storing user login and registration data persistently to simulate session management.

## Testing
### 1. Login Button Testing Scenarios
- Test 1: Empty Fields
  - Steps: Open the login modal and click the "Login" button without entering any information.
  - Expected Result: No action occurs, as there is no explicit error message for empty fields in the current implementation.
- Test 2: Invalid Email Format
  - Steps: Enter an invalid email format (e.g., user@com) in the email field and click the "Login" button.
  - Expected Result: An alert appears with the message: "Invalid email address!" indicating the email format does not match the expected pattern.
- Test 3: Non-Existent Account
  - Steps: Enter a valid email format (e.g., user@example.com) that is not registered in localStorage and a random password. Click the "Login" button.
  - Expected Result: An alert appears with the message: "Account does not exist!" indicating the email is not registered.
- Test 4: Invalid Password
  - Steps: Enter a registered email in the email field and an incorrect password in the password field. Click the "Login" button.
  - Expected Result: An alert appears with the message: "Invalid Password!" indicating the entered password does not match the stored password for the email.
- Test 5: Valid Login
  - Steps: Enter a registered email and the correct password. Click the "Login" button.
  - Expected Result: The login is successful. A modal with a success message is displayed, and the user is redirected to the homepage or another designated page.

### 2. Registration Button Testing Scenarios

- Test 1: Empty Fields
  - Steps: Open the registration modal and click the "Sign Up" button without entering any information.
  - Expected Result: No action occurs, as there is no explicit error message for empty fields in the current implementation.

- Test 2: Invalid Email Format
  - Steps: Enter an invalid email format (e.g., user@com) in the email field and click the "Sign Up" button.
  - Expected Result: An alert appears with the message: "Invalid email address!" indicating the email format does not match the expected pattern.

- Test 3: Weak or Invalid Password
  - Steps: Enter a valid email and a password that does not meet the requirements (e.g., fewer than 7 characters or contains special symbols). Click the "Sign Up" button.
  - Expected Result: An alert appears with the message: "Invalid password! Password must be 7-14 characters long and contain only letters, numbers, and underscores."

- Test 4: Duplicate Email
  - Steps: Enter an email address that is already registered in localStorage and a valid password. Click the "Sign Up" button.
  - Expected Result: An alert appears with the message: "This email has already been registered!" indicating the email is not available for a new account.

- Test 5: Successful Registration
  - Steps: Enter a valid, unregistered email and a valid password. Click the "Sign Up" button.
  - Expected Result: The registration is successful. A modal with a success message is displayed, and the user's login status is updated in localStorage

## Acknowledgements
- All text content, product descriptions, and media (such as images and design inspiration) used in this project are sourced from the official Miffy Shop. 
- https://miffyshop.co.uk/
