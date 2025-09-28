
import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movie.js";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p className="text-center text-red-500">Movie not found!</p>;

  return (
    <div className="p-6 flex flex-col items-center">
      <img src={movie.image} alt={movie.title} className="w-64 rounded shadow-lg" />
      <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
      <p className="text-gray-600">{movie.year}</p>
      <p className="text-yellow-600 font-semibold">⭐ {movie.rating}</p>
      <p className="max-w-xl mt-4 text-gray-700">{movie.plot}</p>
      <Link
        to={`/book/${movie.id}`}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded"
      >
        Book Seat
      </Link>
    </div>
  );
};

export default MovieDetails;