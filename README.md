# My Portfolio

### A personal portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) showcasing my projects, experience, education, and contact information.

## Features
- **Home Page**: Brief introduction and links to sections of the portfolio.
- **About Page**: Detailed information about me, my skills, and background.
- **Education Page**: Display of academic qualifications.
- **Projects Page**: List and details of personal and professional projects.
- **Experience Page**: Overview of work experiences and internships.
- **Contact Page**: Options to connect via LinkedIn or send an email using an integrated form.
- **Hire Me Button**: Uses WhatsApp API for direct contact regarding job opportunities.
  

## Tech Stack
- **Frontend**: React.js, Bootstrap for responsive UI.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (if applicable for any dynamic content).
- **Email Functionality**: EmailJS for sending messages directly from the contact form.
- **API**: WhatsApp API for quick hire me button functionality.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/khushirajput305/my-portfolio.git
    cd my-portfolio
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```bash
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_USER_ID=your_user_id
    WHATSAPP_API_NUMBER=your_whatsapp_number
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

## Email Functionality

- The contact form uses **EmailJS** to send emails without needing a backend.
- Make sure to set up your EmailJS account and update the `.env` file with the correct `SERVICE_ID`, `TEMPLATE_ID`, and `USER_ID`.

## WhatsApp Integration

- The **Hire Me** button is connected to the WhatsApp API for instant communication.
- Clicking on the button redirects users to WhatsApp with a pre-filled message, allowing them to get in touch quickly.


