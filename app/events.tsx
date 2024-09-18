'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    // Create stars
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-deep-space">
      {/* Universe background */}
      <div className="stars-container absolute inset-0"></div>

      <div className="container mx-auto py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Events</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Upcoming Events</h2>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6">
            {/* Placeholder for interactive calendar component */}
            <div className="bg-gray-200 bg-opacity-20 h-96 flex items-center justify-center mb-8 rounded-lg">
              <p className="text-xl font-bold text-white">Interactive Calendar Component</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Monthly Dhikr Gathering", date: "May 15, 2023", time: "7:00 PM", location: "Ansarudeen Center" },
                { title: "Ramadan Tafsir Series", date: "April 1-30, 2023", time: "Daily after Maghrib", location: "Online" },
                { title: "Annual Tijaniyya Conference", date: "July 1-3, 2023", time: "All Day", location: "Convention Center" },
                { title: "Youth Spiritual Retreat", date: "August 12-14, 2023", time: "All Day", location: "Campground" }
              ].map((event) => (
                <div key={event.title} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <p className="mb-1 text-gray-200"><strong>Date:</strong> {event.date}</p>
                  <p className="mb-1 text-gray-200"><strong>Time:</strong> {event.time}</p>
                  <p className="mb-2 text-gray-200"><strong>Location:</strong> {event.location}</p>
                  <Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">Register</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Past Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Mawlid Celebration", date: "October 8, 2022" },
              { title: "Spiritual Leadership Workshop", date: "February 15, 2023" },
              { title: "Community Iftar", date: "April 15, 2023" }
            ].map((event) => (
              <div key={event.title} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                <p className="mb-4 text-gray-200">{event.date}</p>
                <Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">View Photos</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}