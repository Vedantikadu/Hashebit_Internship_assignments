

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={movie.image

      } alt={movie.title} className="w-full h-145 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.year}</p>
        <p className="text-sm text-black-600 font-semibold">⭐ {movie.cast}</p>
        <Link
          to={`/movie/${movie.id}`}
          className="mt-3 inline-block bg-pink-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
