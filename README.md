# Weather Dashboard Project

## Description

This Weather Dashboard project is a React-based web application that allows users to search for cities and view their current weather conditions. The application consists of two main pages:

1. City Search Page: Users can search for cities using an autocomplete input field. As they type, the application suggests matching cities.

2. Weather Dashboard: Once a city is selected, users are redirected to this page where they can view detailed weather information for the chosen city.

The project utilizes modern web technologies and practices, including:

- React for building the user interface
- React Router for navigation
- React Query for efficient data fetching and caching
- Custom hooks for state management and API interactions
- Tailwind CSS for styling

## How to Run

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory:
   ```
   cd weather-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

- `src/pages`: Contains the main page components (City Search and Weather Dashboard)
- `src/components`: Reusable UI components
- `src/hooks`: Custom React hooks
- `src/api`: API service functions and related hooks
- `src/providers`: Context providers (e.g., React Query provider)

## Features

- City search with autocomplete
- Weather information display
- Responsive design
- Error handling and loading states

Feel free to explore the code and customize the application to suit your needs!
