import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden
                 transform hover:scale-105 hover:shadow-xl
                 transition-transform duration-300 w-full
                 max-w-sm mx-auto sm:max-w-none"
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-3 right-3 bg-white rounded-full
                     p-2 shadow-md hover:bg-gray-200 transition-colors"
        >
          <Heart className="text-gray-600" size={18} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{product.category}</p>
        <div className="flex justify-between items-center">
          {/* Product Price */}
          <span className="text-xl font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>
          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-full
                       hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="inline-block mr-2" size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;