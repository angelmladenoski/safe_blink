# Frontend Academy - Project 2

## Overview

**SafeBlink** is a custom-built single-page web application focused on educating users about safe internet browsing.
It was developed using **HTML**, **Sass\***, and **Vanilla JavaScript**, and includes routing, login authentication, discussions, filters, and a profile system. The project follows a Figma design and fully adapts across all screen sizes.

A lightweight **Flask REST API** provides authentication, enabling login and user-specific data persistence.

---

## Project Purpose

This project was created as part of Brainster’s Front-End Academy.
The goal was to build a real-world style educational platform, demonstrating:

- SPA routing with hash navigation
- Custom UI/UX built from scratch
- Session-based user state management
- API communication using a custom Flask server
- A fully responsive interface with animations

The app replicates the structure and behavior of a modern learning platform.

---

## Main Features

### Public Experience

- Home, Info, Discussions, Contact, and Login pages
- Custom hash-based routing with fade transitions
- Fully responsive UI (mobile-first)
- Carousel and scrollable sections on mobile
- Working 404 page for invalid routes
- Video preview on the home page

### Login & User State

- Login using 3 predefined user accounts
- Validation, show/hide password, and disabled button states
- Welcome overlay after successful login
- Session-based user tracking

### Info Page (Информирај се)

- Five filter categories
- Dynamic card rendering based on filter
- Filters saved per user in session storage
- Filter state persists after refresh and login/logout

### Discussion Page (Дискусии)

- Hardcoded + user-submitted discussions
- “See more” functionality
- Logged-in users can post comments
- Each user's posts are saved per account

### Profile Page (Профил)

- Update email and birth year
- Changes saved and persisted per user
- Separate data storage per account

---

## Technology Summary

### Core

- HTML5
- Sass (SCSS)
- JavaScript (ES Modules)
- Flask REST API

### Additional

- Session Storage for user state
- Lottie animations (for the 404 page)

---

## Getting Started

To run the project locally:

1. Clone the repository:

```bash
  git clone https://github.com/angelmladenoski/safe_blink.git .
```

2. Install dependencies:

```bash
  cd "REST API"
```

3. Install dependencies:

```bash
  pip install flask flask_cors
```

4. Start the API:

```bash
python authenticator.py
```

5. Open the project using a local server (e.g., Live Server).

## How to Use

- Navigate through public pages freely
- Log in using one of the predefined credentials
- Explore video categories and filters
- Create discussion posts (only when logged in)
- Edit your profile information
- Experience smooth transitions and mobile-friendly layout

## Development Approach

The application was developed with emphasis on clean structure and real-world SPA behavior.

### Steps included:

1. **Design Analysis** – inspecting Figma screens for both mobile and desktop.
2. **Layout & Components** – building reusable UI blocks using clean HTML/Sass.
3. **Routing System** – creating a custom hash-based router with transitions.
4. **Authentication Logic** – connecting the front end with a Flask REST API.
5. **State Persistence**– implementing session-based storage for users, filters, and discussions.
6. **Testing & Responsiveness** – verifying UI behavior across all devices.

## File Structure

- **assets/** – images and icons
- **css/** – Sass and compiled styles
- **js/** – modules for routing, pages, and logic
- **REST API/** – Flask server for authentication
- **index.html** – main entry point

## Acknowledgments

- Built using design assets and guidelines from Brainster Front-End Academy
- Thanks to mentors and instructors for their support

## Author

Developed by **Angel Mladenoski**

📧 Email: [angel.mladenoski@gmail.com](mailto:angel.mladenoski@gmail.com)<br/>
💼 [LinkedIn](https://www.linkedin.com/in/angel-mladenoski-46a27330a) <br/>
🐙 [GitHub](https://github.com/angelmladenoski)
