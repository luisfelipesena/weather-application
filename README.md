# Weather Dashboard Project

This Weather Dashboard project is a full-stack web application that allows users to view current weather conditions either by their IP-based location or by searching for a specific city. The application consists of two main components:

1. Frontend (React):
   - Geolocation: Automatically detects user's location using IP-based latitude and longitude.
   - City Search: Users can search for cities using an autocomplete input field powered by the API Ninjas API.
   - Weather Dashboard: Displays detailed weather information for the chosen location or city.

2. Backend (Node.js):
   - Serves as a proxy to fetch weather data from external APIs.
   - Integrates with Weather API to retrieve weather information.
   - Provides city autocomplete functionality using API Ninjas.

To facilitate visualization, the project has been deployed and can be accessed at: https://weather-dash-project.netlify.app/

## Technologies Used

- Frontend:
  - React
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

Note: This project uses free API keys for both Weather API and API Ninjas.

## Features

- Automatic location detection using IP-based geolocation
- City search with autocomplete using API Ninjas
- Current weather information display using Weather API
- Responsive design
- Error handling and loading states
