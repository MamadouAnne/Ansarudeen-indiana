export default function Contact() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300">
              Send Message
            </button>
          </form>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4 mb-8">
            <p><strong>Phone:</strong> (317) 555-1234</p>
            <p><strong>Email:</strong> info@ansarudeen-indiana.org</p>
            <p><strong>Address:</strong> 123 Main St, Indianapolis, IN 46201</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            {/* Placeholder for map component */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <p className="text-xl font-bold">Map Component</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}