import Link from "next/link";

export default function Events() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Placeholder for interactive calendar component */}
          <div className="bg-gray-200 h-96 flex items-center justify-center mb-8">
            <p className="text-xl font-bold">Interactive Calendar Component</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Monthly Dhikr Gathering", date: "May 15, 2023", time: "7:00 PM", location: "Ansarudeen Center" },
              { title: "Ramadan Tafsir Series", date: "April 1-30, 2023", time: "Daily after Maghrib", location: "Online" },
              { title: "Annual Tijaniyya Conference", date: "July 1-3, 2023", time: "All Day", location: "Convention Center" },
              { title: "Youth Spiritual Retreat", date: "August 12-14, 2023", time: "All Day", location: "Campground" }
            ].map((event) => (
              <div key={event.title} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="mb-1"><strong>Date:</strong> {event.date}</p>
                <p className="mb-1"><strong>Time:</strong> {event.time}</p>
                <p className="mb-2"><strong>Location:</strong> {event.location}</p>
                <Link href="#" className="text-green-700 hover:underline">Register</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Past Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mawlid Celebration", date: "October 8, 2022" },
            { title: "Spiritual Leadership Workshop", date: "February 15, 2023" },
            { title: "Community Iftar", date: "April 15, 2023" }
          ].map((event) => (
            <div key={event.title} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="mb-4">{event.date}</p>
              <Link href="#" className="text-green-700 hover:underline">View Photos</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}