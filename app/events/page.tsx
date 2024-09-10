import Link from "next/link";

export default function Events() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">Events</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-300">Upcoming Events</h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl">
          {/* Placeholder for interactive calendar component */}
          <div className="bg-white bg-opacity-20 h-96 flex items-center justify-center mb-8 rounded-lg">
            <p className="text-xl font-bold text-white">Interactive Calendar Component</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Monthly Dhikr Gathering", date: "May 15, 2023", time: "7:00 PM", location: "Ansarudeen Center" },
              { title: "Ramadan Tafsir Series", date: "April 1-30, 2023", time: "Daily after Maghrib", location: "Online" },
              { title: "Annual Tijaniyya Conference", date: "July 1-3, 2023", time: "All Day", location: "Convention Center" },
              { title: "Youth Spiritual Retreat", date: "August 12-14, 2023", time: "All Day", location: "Campground" }
            ].map((event) => (
              <div key={event.title} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-green-300">{event.title}</h3>
                <p className="mb-1 text-white"><strong>Date:</strong> {event.date}</p>
                <p className="mb-1 text-white"><strong>Time:</strong> {event.time}</p>
                <p className="mb-2 text-white"><strong>Location:</strong> {event.location}</p>
                <Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">Register</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-green-300">Past Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mawlid Celebration", date: "October 8, 2022" },
            { title: "Spiritual Leadership Workshop", date: "February 15, 2023" },
            { title: "Community Iftar", date: "April 15, 2023" }
          ].map((event) => (
            <div key={event.title} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-green-300">{event.title}</h3>
              <p className="mb-4 text-white">{event.date}</p>
              <Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">View Photos</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}