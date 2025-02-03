# ServiceQuery - Backend

## Project Description

**ServiceQuery Backend** powers the ServiceQuery platform by handling the API endpoints, managing user authentication, storing queries, and ensuring the secure submission of customer data. The backend integrates with the frontend, allowing the admin to view and manage customer queries, while ensuring all interactions are secure and authenticated.

This backend uses **Node.js** with **Express.js** to handle routing, **MongoDB** for storing data, and **JWT Authentication** for security. The system also leverages **Passport** for user authorization, **Mongoose** for MongoDB integration, and **wrapAsync** for handling async route handlers.

## Features

- **User Authentication**: JWT-based authentication is used to secure routes. Admins and users must authenticate via a login process to access and manage queries.

- **Query Management**: Allows customers to submit queries (e.g., "Fan not working," "Switch malfunction"), which are stored in a database and can be viewed by the admin.

- **Admin Panel Access**: Only authenticated admins can access routes for viewing and managing customer queries.

- **JWT Authentication Middleware**: A middleware is applied to secure sensitive routes by ensuring the user has a valid JWT token.

- **Refresh Tokens**: When JWTs expire, refresh tokens are used to automatically issue a new access token, eliminating the need for the admin to log in again.

- **Mongoose Store for Session Management**: Sessions are managed with **Mongoose** to persist user login states across requests.

- **Passport for Authorization**: **Passport.js** is used for handling the login authorization and user authentication process, allowing the system to securely validate users.

- **Error Handling**: All API routes use custom error handling with `wrapAsync` for managing async code and ensuring errors are caught and properly returned to the client.

- **MongoDB Integration**: All queries submitted by customers and user data are stored in a MongoDB database for persistence.

- **API Endpoints**: The backend exposes RESTful API endpoints for the frontend to send and retrieve data, such as submitting customer queries and managing authentication.

- **Robust Error Handling**: The backend has robust error handling to ensure all exceptions and errors are properly managed and returned to the client.

## Technologies Used

- **Node.js**: The backend is built using Node.js, a JavaScript runtime environment that allows for efficient and scalable server-side development.

- **Express.js**: Express is used as the web framework to handle routing, middleware, and API endpoint logic.

- **MongoDB**: MongoDB is used as the database for storing customer queries, user information, and other necessary data.

- **JWT Authentication**: JSON Web Tokens (JWT) are used for user authentication and securing sensitive routes.

- **Passport.js**: Passport.js is used for handling login authorization and ensuring that only authenticated users can access the application.

- **Axios**: Axios is used for making requests to external services (if needed), such as sending emails or notifications.

- **Mongoose**: Mongoose is used to interact with the MongoDB database with an elegant schema-based solution.

- **Mongoose-Session Store**: Mongoose is also used for session management, allowing the application to maintain login sessions.

- **wrapAsync**: A utility function used for error handling in asynchronous route handlers to ensure proper exception management.

- **Dotenv**: Dotenv is used for managing environment variables, like JWT secret keys, database credentials, etc..


