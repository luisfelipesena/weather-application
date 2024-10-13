# Weather Dashboard Project

This Weather Dashboard project is a full-stack web application that allows users to search for cities and view their current weather conditions. The application consists of two main components:

1. Frontend (React):
   - City Search Page: Users can search for cities using an autocomplete input field.
   - Weather Dashboard: Displays detailed weather information for the chosen city.

2. Backend (Node.js):
   - Serves as a proxy to fetch weather data from external APIs.
   - Provides city autocomplete functionality.

To facilitate visualization, the project has been deployed and can be accessed at: https://weather-dash-project.netlify.app/

## Technologies Used

- Frontend:
  - React
  - React Router
  - React Query
  - Tailwind CSS

- Backend:
  - Node.js
  - Express

## How to Run

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project root directory.

3. Install dependencies and start both frontend and backend:
   ```
   npm run install:all
   npm run start:all
   ```

   This will install all necessary dependencies and start both the backend and frontend servers.

4. Open your browser and visit `http://localhost:3000` to view the application.

## Environment Variables

Before running the project, make sure to set up the required environment variables:

1. In the `backend/.env` file:
   ```
   PORT=3001
   WEATHER_API_KEY=your_weather_api_key
   API_NINJA_KEY=your_api_ninja_key
   ```

2. In the `frontend/.env` file:
   ```
   PORT=3000
   REACT_APP_API_URL=http://localhost:3001
   GENERATE_SOURCEMAP=false
   ```

To obtain the necessary API keys, visit:
- Weather API: https://www.weatherapi.com/docs/
- API Ninjas: https://api-ninjas.com/

## Features

- City search with autocomplete
- Current weather information display
- Responsive design
- Error handling and loading states
