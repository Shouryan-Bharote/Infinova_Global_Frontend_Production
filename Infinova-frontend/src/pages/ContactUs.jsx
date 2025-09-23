import React from "react";

import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="contactus-page-container w-[100vw]">
      {/* Page Heading */}
      <h1 className="contactus-heading text-gray-900 font-bold">
        Get in Touch With Us
      </h1>

      <div className="contactus-content">
        {/* Contact Info */}
        <div className="contactus-info-card bg-white shadow-xl rounded-2xl transition-transform hover:scale-105">
          <h2 className="text-gray-800 font-semibold">Contact Information</h2>
          <div className="contactus-info-list">
            <p className="flex items-center text-gray-700">
              <MapPin className="text-blue-600 contactus-icon" /> 
              123 Business Street, City, Country
            </p>
            <p className="flex items-center text-gray-700">
              <Mail className="text-blue-600 contactus-icon" /> 
              info@example.com
            </p>
            <p className="flex items-center text-gray-700">
              <Phone className="text-blue-600 contactus-icon" /> 
              +1 234 567 890
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contactus-form-card bg-white shadow-xl rounded-2xl transition-transform hover:scale-105">
          <h2 className="text-gray-800 font-semibold">Send Us a Message</h2>
          <form className="contactus-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="contactus-textarea border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
            <button
              type="submit"
              className="contactus-button bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
