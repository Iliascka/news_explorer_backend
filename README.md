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

| Method | Endpoint               | Description                        |
| ------ | ---------------------- | ---------------------------------- |
| POST   | `/signup`              | Register a new user                |
| POST   | `/signin`              | Log in a user                      |
| GET    | `/users/me`            | Get the current user's information |
| PATCH  | `/users/me`            | Update user information            |
| GET    | `/articles`            | Get saved articles                 |
| POST   | `/articles`            | Save an article                    |
| DELETE | `/articles/:articleId` | Delete a saved article             |

## Deployment

**Backend API:** https://api-news-explorer.utdnews.com

**Live Application:** [NewsExplorer](https://news-explorer.utdnews.com)

The backend is deployed on Google Cloud, using Nginx as a reverse proxy, PM2 for process management, and HTTPS for secure communication.

## Project Status

**Stage 1 - Frontend:** Developed the responsive React application with article search and authentication interfaces.

**Stage 2 - Backend:** Implemented the REST API, MongoDB models, authentication, authorization, validation, error handling, and logging.

**Stage 3 - Full-Stack Integration:** Connected the React frontend to the Express backend, implemented persistent authentication and saved article management, and deployed the complete application to Google Cloud.

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

| Method | Endpoint               | Description                        |
| ------ | ---------------------- | ---------------------------------- |
| POST   | `/signup`              | Register a new user                |
| POST   | `/signin`              | Log in a user                      |
| GET    | `/users/me`            | Get the current user's information |
| PATCH  | `/users/me`            | Update user information            |
| GET    | `/articles`            | Get saved articles                 |
| POST   | `/articles`            | Save an article                    |
| DELETE | `/articles/:articleId` | Delete a saved article             |

## Deployment

**Backend API:** https://api-news-explorer.utdnews.com

**Live Application:** [NewsExplorer](https://news-explorer.utdnews.com)

The backend is deployed on Google Cloud, using Nginx as a reverse proxy, PM2 for process management, and HTTPS for secure communication.

## Project Status

**Stage 1 - Frontend:** Developed the responsive React application with article search and authentication interfaces.

**Stage 2 - Backend:** Implemented the REST API, MongoDB models, authentication, authorization, validation, error handling, and logging.

**Stage 3 - Full-Stack Integration:** Connected the React frontend to the Express backend, implemented persistent authentication and saved article management, and deployed the complete application to Google Cloud.
