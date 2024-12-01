import React, { useState } from "react";
import { MapPin, CreditCard, DollarSign } from "lucide-react"; // Import ikon Lucide React

const CheckoutPage = ({ cartTotal, handleCheckout }) => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout(shippingAddress, paymentMethod);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-center">
        Checkout
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Shipping Address */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <MapPin className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="flex-1">
            <label
              htmlFor="shippingAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Shipping Address:
            </label>
            <input
              id="shippingAddress"
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <CreditCard className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="flex-1">
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <DollarSign className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="flex-1 text-lg font-semibold text-gray-700">
            Total: <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Confirm and Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
