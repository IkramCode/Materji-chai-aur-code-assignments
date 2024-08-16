import axios from "axios";
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

export default function CatsListing() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchCats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`
      );
      const fetchedCats = response.data?.data?.data || [];
      setCats((prevCats) => [...prevCats, ...fetchedCats]);
      setHasMore(fetchedCats.length === 4);
    } catch (err) {
      setError("Failed to load cats. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, [page]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Cats around us</h1>
      {loading && page === 1 ? (
        <div className="flex justify-center items-center h-full">
          <TailSpin color="gray" height={80} width={80} />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[90vw]">
          {cats.length > 0 ? (
            <>
              {cats.map((cat) => (
                <div
                  key={cat.id}
                  className=" bg-blue-100 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all ease-in-out"
                >
                  <img
                    src={cat.image}
                    alt={cat.breed}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold mb-2">{cat.breed}</p>
                    <p className="text-gray-600 mb-4">{cat.description}</p>
                    <p className="mb-2">
                      <strong>Origin:</strong> {cat.origin}
                    </p>
                    <p className="mb-4">
                      <strong>Life span:</strong> {cat.lifespan}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.temperament.split(",").map((trait) => (
                        <span
                          key={trait}
                          className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded-full"
                        >
                          {trait.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {hasMore && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Load More
                </button>
              )}
            </>
          ) : (
            <p>No cats available.</p>
          )}
        </div>
      )}
    </div>
  );
}
