import React from 'react';

export const WishlistPage = ({ wishlist, removeFromWishlist, addToCart }) => {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-center">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your wishlist is empty</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 sm:pb-2">
              <div className="flex items-center w-full sm:w-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover sm:w-16 sm:h-16 mr-4 mb-4 sm:mb-0" 
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="space-x-2 flex flex-col sm:flex-row mt-4 sm:mt-0">
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 sm:w-auto w-full mb-2 sm:mb-0"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item)}
                  className="text-red-500 hover:text-red-700 sm:w-auto w-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
