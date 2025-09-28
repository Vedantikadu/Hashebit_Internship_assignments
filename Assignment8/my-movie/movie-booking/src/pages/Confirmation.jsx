
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();

  if (!state) return <p className="text-center text-red-500">No booking details!</p>;

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-600">✅ Booking Confirmed!</h1>
      <p className="mt-4">🎟️ Booking ID: <span className="font-mono">{state.bookingId}</span></p>
      <p className="mt-2">👤 {state.name}</p>
      <p>📧 {state.email}</p>
      <p>📱 {state.mobile}</p>
      <p className="mt-2 font-semibold">Movie: {state.movie.title}</p>
      <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default Confirmation;