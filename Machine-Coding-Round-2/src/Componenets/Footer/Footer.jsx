import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="bg-gray-900 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400 transition duration-300 ease-in-out`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/random-tweet-joke"
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400 transition duration-300 ease-in-out`
            }
          >
            Random Jokes
          </NavLink>
          <NavLink
            to="/cats-listing"
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400 transition duration-300 ease-in-out`
            }
          >
            Cats Listing
          </NavLink>
        </div>

        {/* Contact Information */}
        <div className="text-gray-300 mt-4 md:mt-0">
          <p>Contact Us</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-300 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.599 0 0 .6 0 1.326v21.349C0 23.4.599 24 1.326 24H12.82v-9.294H9.692V11.21h3.128V8.413c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.098 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.495h-3.12V24h6.116c.728 0 1.326-.6 1.326-1.326V1.326C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.89 9.89 0 0 1-2.828.775 4.933 4.933 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482c-4.084-.205-7.699-2.158-10.125-5.134a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.214 2.188 4.097a4.902 4.902 0 0 1-2.229-.616v.062a4.917 4.917 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.923 4.923 0 0 0 4.602 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.779-.023-1.158-.068a13.945 13.945 0 0 0 7.548 2.209c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.309 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.069-1.645-.069-4.849s.011-3.584.069-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.286.059-2.439.322-3.337 1.219-.898.898-1.16 2.051-1.219 3.337-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.286.322 2.439 1.219 3.337.898.898 2.051 1.16 3.337 1.219 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.286-.059 2.439-.322 3.337-1.219.898-.898 1.16-2.051 1.219-3.337.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.286-.322-2.439-1.219-3.337-.898-.898-2.051-1.16-3.337-1.219-1.28-.058-1.688-.072-4.947-.072z" />
              <circle cx="12" cy="12" r="3.6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
