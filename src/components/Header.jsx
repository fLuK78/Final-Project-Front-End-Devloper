import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header({ cart }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?q=${search}`);
    }
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-800">
          IHAVERAM
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            to="/products"
            className="font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            สินค้า
          </Link>
          <Link
            to="/computersets"
            className="font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            คอมพิวเตอร์เซ็ท
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            ติดต่อเรา
          </Link>
        </nav>

        {/* Search + Cart */}
        <div className="flex flex-grow items-center justify-end gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="ค้นหา รุ่น, ยี่ห้อ..."
            />
          </form>

          {/* Cart */}
          <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
