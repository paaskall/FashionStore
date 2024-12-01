import React from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ wishlist, cart }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-gray-800">
        <Link to="/">Urban Elegance</Link>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="hidden sm:block relative">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-full px-4 py-2 w-40 md:w-64 focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <Search className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Wishlist and Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative group">
            <Heart className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
            <span className="absolute -bottom-6 left-0 w-max hidden text-xs text-gray-600 group-hover:block">
              Wishlist
            </span>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative group">
            <ShoppingCart className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <span className="absolute -bottom-6 left-0 w-max hidden text-xs text-gray-600 group-hover:block">
              Cart
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
