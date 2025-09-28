
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movie.js";

const BookingForm = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate("/confirmation", { state: { ...form, bookingId, movie } });
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Book Seat for {movie.title}</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded p-6 w-80 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;