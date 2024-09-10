import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const address = "123 Main St, Indianapolis, IN 46201";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const email = "info@ansarudeen-indiana.org";
  const mailtoUrl = `mailto:${email}`;
  const phoneNumber = "(317) 555-1234";
  const telUrl = `tel:${phoneNumber.replace(/\D/g, '')}`;

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="Your message here..." required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </section>
        
        <section className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Contact Information</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <a href={telUrl} className="text-green-300 hover:text-green-100 transition duration-300">
                <FiPhone className="text-2xl mr-4" />
              </a>
              <a href={telUrl} className="text-white hover:text-green-300 transition duration-300">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center">
              <a href={mailtoUrl} className="text-green-300 hover:text-green-100 transition duration-300">
                <FiMail className="text-2xl mr-4" />
              </a>
              <a href={mailtoUrl} className="text-white hover:text-green-300 transition duration-300">
                {email}
              </a>
            </div>
            <div className="flex items-center">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition duration-300">
                <FiMapPin className="text-2xl mr-4" />
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition duration-300">
                {address}
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.3259669047546!2d-86.15849492346614!3d39.76844589187883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1684183849592!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
      </div>

      <section id="donate" className="mt-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-300">Make a Donation</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="donationAmount" className="block text-white mb-2">Donation Amount ($)</label>
            <input type="number" id="donationAmount" name="donationAmount" min="1" step="1" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="Enter amount" required />
          </div>
          <div>
            <label htmlFor="cardName" className="block text-white mb-2">Name on Card</label>
            <input type="text" id="cardName" name="cardName" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="Full name on card" required />
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-white mb-2">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-white mb-2">Expiry Date</label>
              <input type="text" id="expiryDate" name="expiryDate" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="MM/YY" required />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-white mb-2">CVV</label>
              <input type="text" id="cvv" name="cvv" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="123" required />
            </div>
          </div>
          <div>
            <label htmlFor="donorEmail" className="block text-white mb-2">Email</label>
            <input type="email" id="donorEmail" name="donorEmail" className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="your@email.com" required />
          </div>
          <div>
            <label htmlFor="donationMessage" className="block text-white mb-2">Message (Optional)</label>
            <textarea id="donationMessage" name="donationMessage" rows={4} className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-green-300 focus:outline-none text-white placeholder-gray-300" placeholder="Your message here..."></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
              Make Donation
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}