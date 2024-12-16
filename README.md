# Notes Application

This project is a simple Notes application, consisting of a backend and a frontend, which allows users to create, update, delete, and archive notes. The backend uses NestJS and Prisma, while the frontend is built with React, Vite, and Tailwind CSS.

## Features

- Create, update, delete, and archive notes.
- Notes are stored in a database (SQLite or PostgreSQL).
- Fully functional frontend that communicates with the backend via API.

## Backend

The backend of the application is responsible for handling the API requests and interacting with the database. It is built using NestJS and Prisma.

### Requirements

- Node.js >= 18.x.x
- NestJS >= 9.x.x
- Prisma >= 3.x.x
- SQLite or PostgreSQL for the database

### Steps to Run

1. Clone this repository: `git clone [repository-url](https://github.com/WaltGreenwich/nest-react-notes-project.git)`
2. Navigate to the backend directory: `cd backend`
3. Install the dependencies: `npm install`
4. Run database migrations: `npx prisma migrate dev`
5. Start the development server: `npm run start:dev`

Ensure that the frontend is running on the correct port to communicate with the API.

## Frontend

The frontend of the application is a React app created with Vite and styled using Tailwind CSS. It provides a user-friendly interface to manage notes.

### Requirements

- Node.js >= 18.x.x
- React >= 18.x.x
- Vite >= 4.x.x
- Tailwind CSS >= 3.x.x

2. Navigate to the frontend directory: `cd frontend`
3. Install the dependencies: `npm install`
4. Set up environment variables by creating a `.env` file in the root of the frontend directory with the following content:
   
   ```env
   VITE_BACKEND_URL=http://localhost:3000

## Project Structure

- **Backend**: Contains the NestJS API with Prisma database management.
- **Frontend**: Contains the React app with Vite and Tailwind CSS for the UI.

## License

This project is open source and available under the [MIT License](LICENSE).
