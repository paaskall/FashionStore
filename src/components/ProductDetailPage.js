import React, { useState } from 'react';

const ProductDetailPage = ({ product, addToCart, addToWishlist }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product || !product.image) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-pulse w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div  className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div  className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info Section */}
        <div  className="p-6 md:p-8 lg:p-12 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {product.name}
            </h1>
          </div>

          {/* Size Selector */}
          <div  className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Choose Size
            </label>
            <div  className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200
                    ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div  className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Choose Color
            </label>
            <div  className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    w-10 h-10 rounded-full border-2 transform transition-all duration-200
                    ${
                      selectedColor === color
                        ? 'ring-4 ring-offset-2 ring-gray-300 scale-110'
                        : 'hover:scale-110'
                    }
                  `}
                  style={{
                    backgroundColor: color,
                    borderColor: color === selectedColor ? color : 'transparent',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Details Description */}
          <div  className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Product Details
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div  className="text-2xl sm:text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </div>

          {/* Action Buttons */}
          <div  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg 
                         hover:bg-gray-800 transition-colors duration-300 
                         font-semibold text-base flex items-center justify-center"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="w-full sm:w-auto text-gray-700 px-6 py-3 rounded-lg 
                         border border-gray-300 hover:bg-gray-50 
                         transition-colors duration-300 
                         font-semibold text-base flex items-center justify-center"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
