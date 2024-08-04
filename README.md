# Personal Portfolio Website
![pro1](https://github.com/user-attachments/assets/80bc0e89-8e63-4fb1-9671-a89b8117f533)
<hr/>

This project is a React-based personal portfolio website that provides an interactive user experience with custom cursor animations and a loading screen. The application includes multiple pages such as Home, About, Projects, and Contact, and utilizes GSAP for animations. Below is a detailed overview of the main components and features of the website.

## Features

1. **Custom Cursor Animation**:
   - Implements a custom cursor that smoothly follows the mouse movements.
   - Utilizes GSAP animations to create a fluid cursor-following effect.

2. **Loading Screen**:
   - Displays a loading screen with a progress bar that shows the loading percentage.
   - The loading screen disappears once the loading is complete, transitioning smoothly into the main content.

3. **Pages**:
   - **Home**: The main landing page of the website, showcasing a brief introduction.
   - **About**: A page providing detailed information about you, your skills, and your experience.
   - **Projects**: A page showcasing various projects you have worked on, with descriptions and links to live demos or repositories.
   - **Contact**: A page for users to get in touch with you via a contact form or provided contact information.

4. **Scroll to Top**:
   - Includes a component that ensures the user is scrolled to the top when navigating between pages.

## Technical Overview

- **React**: The primary JavaScript library used for building the user interface.
- **React Router**: Manages the routing and navigation between different pages.
- **GSAP (GreenSock Animation Platform)**: Handles the animations for the cursor and the loading screen.
- **CSS**: Custom styles are defined in `App.css`.

## Components

- **Home**: Located at `src/Components/Home/Home.js`.
- **About**: Located at `src/Components/About/About.js`.
- **Projects**: Located at `src/Components/Projects/Projects.js`.
- **Contact**: Located at `src/Components/Contact/Contact.js`.
- **ScrollToTop**: Ensures the page scrolls to the top when navigating between routes.
- **Custom Cursor**: Implemented using a `div` with a reference and animated with GSAP.

## Key Functions

- **Cursor Animation**:
  - The custom cursor follows the mouse movements smoothly using GSAP.
  - Mouse coordinates are tracked and the cursor is animated to follow the mouse position with a delay for a smooth effect.

- **Loading Screen**:
  - Displays a loading progress bar that updates as the page loads.
  - The loading screen hides once the content is fully loaded.

## Installation and Setup

1. **Install dependencies**:
   ```bash
   npm install

   
2. **Start the development server**:
   ```bash
   npm start


3. **Open your browser and navigate to http://localhost:3000 to view the website**.
   
