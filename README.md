# 🎬 Movies Management App

A **user-friendly movie management app** built with **Next.js** and **Tailwind CSS**, allowing users to **discover, search, and manage their favorite movies**. The app fetches movies from the iTunes API, provides a dark mode, and supports **favorites management**.

## 🚀 Features

- 🔍 **Search Movies**: Easily find movies by their names.
- ⭐ **Favorite Movies**: Save and manage your favorite movies.
- 🌙 **Dark Mode**: Toggle between light and dark themes.
- 📄 **Movie Details**: View detailed information about each movie.
- 🎥 **Movie Previews**: Watch trailers and previews.
- 🔄 **Pagination**: Browse through movies efficiently.

## 🏗️ Tech Stack

- **Next.js**: Server-side rendering and optimized performance.
- **Tailwind CSS**: Responsive and modern UI styling.
- **React Context API**: State management for movies and favorites.
- **Axios**: Fetch movie data from the iTunes API.
- **React Player**: Embedded movie trailers.

## 📂 Project Structure

```
zakriakhanx-movies-management-app/
│── app/
│   ├── components/      # Reusable UI components
│   ├── contextAPI/      # Global state management (Favorites & Movies)
│   ├── favorites/       # Favorite movies page
│   ├── movieDetails/    # Movie details pages
│   ├── globals.css      # Global styles
│   ├── layout.js        # Main layout with Navbar
│   ├── page.js          # Home page with search and movie grid
│── public/              # Static assets
│── next.config.mjs      # Next.js configuration
│── tailwind.config.mjs  # Tailwind CSS configuration
│── package.json         # Dependencies and scripts
│── .eslint.config.mjs   # ESLint configuration
```

## 🛠️ Installation & Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/movies-management-app.git
   cd movies-management-app
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Development Server**  
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**  
   ```bash
   npm run build
   ```

5. **Run the Production Build**  
   ```bash
   npm start
   ```

## 🛠️ API Integration

The app fetches movie data from **iTunes API** via a proxy:
```js
async rewrites() {
  return [
      {
          source: '/api/itunes/:path*',
          destination: 'https://itunes.apple.com/:path*',
      },
  ];
}
```

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (\`git checkout -b feature-branch\`)
3. Make your changes
4. Commit your changes (\`git commit -m "Added new feature"\`)
5. Push the branch (\`git push origin feature-branch\`)
6. Open a Pull Request
