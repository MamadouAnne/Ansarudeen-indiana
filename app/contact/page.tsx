'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import DonationForm from '../components/DonationForm';

const ContactPage = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
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
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                123 Main St, Indianapolis, IN 46201
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                (317) 555-1234
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                info@ansarudeenindy.org
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-green-500 transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-green-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-green-500 transition duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div id="donate">
          <h2 className="text-2xl font-semibold mb-4">Support Our Cause</h2>
          {!showDonationForm ? (
            <button
              onClick={() => setShowDonationForm(true)}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              I Want to Donate
            </button>
          ) : (
            <DonationForm onCancel={() => setShowDonationForm(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;