import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header(props) {
  return (
    <header className="bg-gray-900 shadow-lg py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="logo-large object-contain" 
          />
        </div>
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400 transition duration-300 ease-in-out`
            }
          >
            Random User
          </NavLink>
          <NavLink
            to="/random-tweet-joke"
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-400" : "text-gray-300"
              } hover:text-cyan-400 transition duration-300 ease-in-out`
            }
          >
            Random Tweets
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
        </nav>
      </div>
    </header>
  );
}
