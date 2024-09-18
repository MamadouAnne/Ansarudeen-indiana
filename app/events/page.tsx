'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Events() {
  const [upcomingEvents] = useState([
    { title: "Weekly Dhikr Gathering", date: "Every Thursday, 7:00 PM", location: "Ansarudeen Center" },
    { title: "Monthly Quranic Study Circle", date: "First Saturday of each month, 2:00 PM", location: "Ansarudeen Center" },
    { title: "Annual Mawlid Celebration", date: "October 15, 2023", location: "Indianapolis Convention Center" },
    { title: "Youth Leadership Workshop", date: "July 22-23, 2023", location: "Ansarudeen Youth Center" },
    { title: "Ramadan Iftar Gatherings", date: "Throughout Ramadan", location: "Various locations" },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Events</h1>
      <p className="text-white text-lg mb-8 text-center">
        Stay updated with our upcoming events and gatherings. Join us in celebrating our faith and strengthening our community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
            <p className="text-white mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-white mb-4"><strong>Location:</strong> {event.location}</p>
            <Link href={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-300 hover:text-green-100 transition duration-300">
              Event Details
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact" className="bg-white text-green-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg">
          Suggest an Event
        </Link>
      </div>
    </div>
  );
}