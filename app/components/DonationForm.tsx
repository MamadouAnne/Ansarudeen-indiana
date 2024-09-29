import React, { useState } from 'react';

interface DonationFormProps {
  onCancel?: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="amount" className="block mb-2">Donation Amount ($)</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          step="1"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </div>
      {paymentMethod === 'creditCard' && (
        <>
          <div>
            <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                required
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block mb-2">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
            </div>
          </div>
        </>
      )}
      <div>
        <label htmlFor="name" className="block mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          Donate
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default DonationForm;