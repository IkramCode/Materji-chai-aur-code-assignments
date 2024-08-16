import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosRefresh } from "react-icons/io";
import { TailSpin } from "react-loader-spinner";

export default function RandomUser() {
  const [user, setUser] = useState(null);
  const [previousUsers, setPreviousUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random"
      );
      if (user) {
        setPreviousUsers((prev) => [user, ...prev]);
      }
      setUser(response.data.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    if (previousUsers.length > 0) {
      const [lastUser, ...rest] = previousUsers;
      setUser(lastUser);
      setPreviousUsers(rest);
    }
  };

  const handleLogoClick = () => {
    window.open("https://chaicode.com/", "_blank");
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
        <TailSpin color="white" height={80} width={80} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
        <div className="text-center p-4 bg-red-100 rounded shadow-md">
          <h2 className="text-xl font-bold text-red-700">
            Something went wrong!
          </h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-gradient-to-br from-pink-600 to-orange-500 bg-opacity-90 rounded-lg shadow-lg p-6 transform transition-5 hover:shadow-2xl">
        <div className="flex justify-between mb-4">
          <button
            onClick={handleBack}
            disabled={previousUsers.length === 0}
            aria-label="Previous User"
          >
            <IoIosArrowRoundBack
              className={`text-white text-2xl ${
                previousUsers.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            />
          </button>
          <button onClick={fetchData} aria-label="Refresh">
            <IoIosRefresh className="text-white text-2xl" />
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-1 text-white">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm text-white">{user.login.username}</p>
        </div>

        <div className="flex justify-around mb-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaMapMarkerAlt className="text-white text-xl" />
            <span className="text-white font-semibold">Location</span>
          </a>
          <a href={`tel:${user.phone}`} className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white text-xl" />
            <span className="text-white font-semibold">Phone</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <p className="text-xs text-white">City:</p>
              <p className="text-lg font-bold text-white">
                {user.location.city}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-white">Nationality:</p>
              <p className="text-lg font-bold text-white">{user.nat}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-white">DOB:</p>
              <p className="text-lg font-bold text-white">
                {new Date(user.dob.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <p className="text-xs text-white">Phone:</p>
              <p className="text-lg font-bold text-white">{user.phone}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-white">Time Zone:</p>
              <p className="text-lg font-bold text-white">
                {user.location.timezone.offset}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-white">Reg. Since:</p>
              <p className="text-lg font-bold text-white">
                {new Date(user.registered.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-20 h-20 justify-end items-end mt-12 mb-4 mr-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXjJ14FahiIJwTFfXdmYEagnbQU18vwdVvsdXKQAooCSz_IJu"
            alt="Logo"
            className="rounded-full border-2 border-white p-2 cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
      </div>
    </div>
  );
}
