import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MoviesProvider } from "./contextAPI/MoviesContext";
import { FavoritesProvider } from "./contextAPI/FavoritesContext";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movies Management App",
  description: "A user-friendly app for discovering, organizing, and managing your favorite movies. Browse a wide collection of movies, add them to your favorites, and access detailed movie information all in one place."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FavoritesProvider>
          <MoviesProvider>
            <Navbar />
            {children}
          </MoviesProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
