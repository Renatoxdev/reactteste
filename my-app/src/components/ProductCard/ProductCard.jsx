import React from "react";
import "./ProductCard.css";

export default function ProductCard({ name, price, image, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition product-card">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-green-600 font-bold text-md">{price}</p>
    </div>
  );
}
