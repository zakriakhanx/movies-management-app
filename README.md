# Movies Management App

A responsive Next.js application that allows users to browse movies, search for specific titles, view details, and manage their favorite movies. The app fetches movie data from the iTunes Search API and provides features like dynamic routing, context-based state management, and responsive design.

## Features

- Search Functionality: Search for movies by title using the search bar.
- Favorites Management: Add/remove movies to/from favorites and view them on a dedicated screen.
- Movie Details: View detailed information about a movie, including title, genre, release date, and more.
- Dark Mode: Toggle between light and dark themes.
- Pagination for efficient navigation through movie listings.

## Tech Stack

- **React**: Front-end library to build the user interface.
- **Next.js**: React framework for building server-side rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Player**: Component to display movie previews and trailers.
- **Context API**: To manage global state (e.g., favorite movies).

# Usage

## Home Screen

Displays a list of movies fetched from the iTunes Search API.

## Search

Search for movies by title using the search bar on the home page.

Results are dynamically updated based on the search query.

## Favorites Management

Mark movies as favorites and access them from the "Favorites" page.

## Movie Details

View detailed information about a movie by clicking on it.

## Dark Mode

Toggle between light and dark themes using a button in the header.

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone http://repo-Url
   cd repo-name
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

# Contributing

Contributions are welcome! To contribute:

1. Fork the repository.

2. Create a new branch for your feature:
   
    ```bash
    git checkout -b feature-name
    ```

3. Commit your changes and push to your fork.

4. Open a pull request.
