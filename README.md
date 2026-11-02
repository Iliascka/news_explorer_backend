# NewsExplorer Backend

NewsExplorer Backend is a Node.js and Express REST API that manages user authentication and saved news articles using MongoDB.

## Features

- User registration and login
- JWT authentication using HttpOnly cookies
- Protected API routes
- Save, retrieve, and delete news articles
- User-specific article management
- Request validation and centralized error handling
- Request and error logging

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript (ES Modules)
- JWT and bcrypt
- Celebrate / Joi
- Winston
- ESLint

## API Endpoints

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| POST   | `/signup`       | Register a new user                |
| POST   | `/signin`       | Log in a user                      |
| GET    | `/users/me`     | Get the current user's information |
| PATCH  | `/users/me`     | Update user information            |
| GET    | `/articles`     | Get saved articles                 |
| POST   | `/articles`     | Save an article                    |
| DELETE | `/articles/:id` | Delete a saved article             |

## Project Status

**Stage 1 - Frontend:** React application completed and deployed on
[GitHub Pages](https://iliascka.github.io/news_explorer_frontend/)

**Stage 2 - Backend:** REST API, MongoDB models, authentication, authorization, validation, error handling, and logging implemented.

**Stage 3 - Integration:** Connect the React frontend to the backend and deploy the complete application.
