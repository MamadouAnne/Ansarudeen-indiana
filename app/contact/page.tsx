'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <p className="text-white text-lg mb-6 text-center">
          Get in touch with us for more information or to join our community. We'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="bg-white text-green-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Visit Us</h2>
        <p className="text-white">Ansarudeen Indiana Center</p>
        <p className="text-white">123 Main Street, Indianapolis, IN 46201</p>
        <p className="text-white mt-4">Phone: (317) 555-1234</p>
        <p className="text-white">Email: info@ansarudeen-indiana.org</p>
      </div>
    </div>
  );
}