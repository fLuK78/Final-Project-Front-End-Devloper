import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({ cart }) {
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?q=${search}`);
      setIsMobileMenuOpen(false);
    }
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4 relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-800">
          I HAVE RAM
        </Link>

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            to="/products"
            className="font-semibold text-white hover:text-blue-600 transition"
          >
            สินค้า
          </Link>
          <Link
            to="/computersets"
            className="font-semibold text-white hover:text-blue-600 transition"
          >
            คอมพิวเตอร์เซ็ท
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-white hover:text-blue-600 transition"
          >
            ติดต่อเรา
          </Link>
        </nav>

        {/* Search + Cart + Mobile Menu Button */}
        <div className="flex flex-grow items-center justify-end gap-4">
          {/* Search (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control w-full border border-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              placeholder="ค้นหา รุ่น, ยี่ห้อ..."
            />
          </form>

          {/* Cart */}
          <Link to="/cart" className="text-white hover:text-blue-600 relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button (visible on small screens) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-blue-600"
          >
            {/* Display the correct icon based on menu state */}
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden bg-white shadow-lg absolute inset-x-0 top-full transition-all duration-300 ease-in-out ${
          // Use CSS classes to slide the menu down from the top
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="ค้นหา รุ่น, ยี่ห้อ..."
            />
          </form>
          {/* Mobile Navigation Links */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            หน้าหลัก
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            สินค้า
          </Link>
          <Link
            to="/computersets"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            คอมพิวเตอร์เซ็ท
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </header>
  );
}
