import React, { useState } from 'react';

function ContactPage() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  return (
    <div>
      <h1>Contact Us</h1>
      {/* Other contact page content */}
      
      <button onClick={() => setShowDonationForm(!showDonationForm)}>
        Make a Donation
      </button>

      {showDonationForm && (
        <div className="donation-form">
          <h2>Donation Form</h2>
          {/* Add form fields, submit button, etc. */}
          <button onClick={() => setShowDonationForm(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ContactPage;