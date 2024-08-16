import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TailSpin } from "react-loader-spinner";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShareSquare,
} from "react-icons/fa";
import axios from "axios";
import download from "../../assets/download.jpeg";

export default function RandomTweet(props) {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [previousTweets, setPreviousTweets] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );
      setTweet(response.data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getRandomTimestamp = () => {
    const minutesAgo = Math.floor(Math.random() * 60) + 1;
    return `${minutesAgo} minutes ago`;
  };

  const getRandomViews = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
        <TailSpin color="white" height={80} width={80} />
      </div>
    );
  }

  if (error) {
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
      <div className="relative text-center p-6 bg-black text-white rounded shadow-md w-auto min-h-[200px] flex flex-col justify-between mx-4">
        <button>
          <IoIosArrowRoundBack className="text-3xl cursor-pointer hover:text-white" />
        </button>

        <div className="flex items-center mt-4">
          <img
            src={download}
            alt="User Avatar"
            className="flex w-20 h-20 object-cover rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-white">Elon Musk</h2>
          </div>
        </div>

        <div className="mt-4 flex-1">
          <p className="text-lg text-white">{tweet.content}</p>
        </div>

        <div className="mt-4 border-t border-b border-gray-500 py-2">
          <div className="text-sm text-gray-300 flex justify-between items-center">
            <span>{getRandomTimestamp()}</span>
            <span>{getRandomViews()} views</span>
          </div>
        </div>

        <div className="mt-2 flex justify-around items-center text-gray-300">
          <FaRegComment className="text-xl cursor-pointer hover:text-white" />
          <FaRetweet className="text-xl cursor-pointer hover:text-white" />
          <FaRegHeart className="text-xl cursor-pointer hover:text-white" />
          <FaShareSquare className="text-xl cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}
