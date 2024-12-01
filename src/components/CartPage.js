import React from 'react';

export const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 space-y-4 sm:space-y-0"
              >
                {/* Item Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 space-y-4 sm:space-y-0">
            <h3 className="text-xl font-bold text-gray-800">Total</h3>
            <p className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
