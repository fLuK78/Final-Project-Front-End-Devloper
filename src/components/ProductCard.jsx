import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name || product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg">{product.name || product.title}</h3>
      <p className="text-red-600 font-bold mb-2">{product.price}</p>

      {/* ปุ่มดูรายละเอียด */}
      <Link
        to={`/products/${product.id}`}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center mb-2"
      >
        🔍 ดูรายละเอียด
      </Link>

      {/* ปุ่มเพิ่มลงตะกร้า */}
      {addToCart && (
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          🛒 เพิ่มลงตะกร้า
        </button>
      )}
    </div>
  );
}
