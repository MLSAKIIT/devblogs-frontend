# DevBlogs Frontend

## Overview

This is the frontend for DevBlogs, a Full Stack Blogging site for Developers by Developers. It's part of the MLSA HACKTOBER 2024: WEBDEV project.

## Tech Stack

- React for dynamic user interfaces
- Tailwind CSS for styling
- Vite as the build tool

## Features

1. Complete user authentication with protected routes
2. Curated recommendations on homepage
3. Infinite scrolling layout
4. Responsive and modern UI

## Prerequisites

- Node.js
- npm or yarn
- React
- Tailwind CSS
- React Hook Form / Yup

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the frontend directory of the project.
3. Install the required dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
5. The frontend should now be running on a local port, typically http://localhost:5173.

## Folder Structure

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   ├── assets/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── index.css
│   ├── main.jsx
│   └── pages/
├── tailwind.config.js
└── vite.config.js
```

## Contributing

We welcome contributions to improve this project! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Issues & Features
- Create and validate login and registration forms using `react-hook-form` and `yup`.
- Fetch blogs and implement pagination.
- Dark mode toggle with Tailwind CSS.
- Rich text editor integration using `react-quill`.
- Route protection for authenticated routes.
  
Check the main project documentation for a list of current issues and tasks for the frontend.

## References

- Form validation: 
  - https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
  - https://www.youtube.com/watch?v=wlltgs5jmZw
- Simple authentication:
  - https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03
  - https://www.tutorialspoint.com/localstorage-in-reactjs
- Route protection:
  - https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
  - https://www.youtube.com/watch?v=pyfwQUc5Ssk
- Dark mode:
  - https://mujeebkhan1831.medium.com/how-to-implement-darkmode-in-react-using-tailwind-css-3c47d009209a
  - https://www.youtube.com/watch?v=06IpGhvEtYg
- 404 Page:
  - https://www.geeksforgeeks.org/how-to-setup-404-page-in-react-routing/
- React-quill:
  - https://www.npmjs.com/package/react-quill
  - https://www.youtube.com/watch?v=ahNdQaq0mHg
  - https://www.youtube.com/watch?v=I3JQNq7Cbt0
- Pagination:
  - https://www.youtube.com/watch?v=koG_UErY24I
- React headers:
  - https://jasonwatmore.com/react-fetch-add-bearer-token-authorization-header-to-http-request
