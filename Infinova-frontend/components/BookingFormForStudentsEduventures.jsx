import { useState } from 'react';
import '../global.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    program: '',
    fullName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="booking-container">
      <div className="booking-card EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <h1 className="booking-title">
          Book <span className="text-blue">Free</span> LIVE Class Today !
        </h1>
        
        <div className="form-container font-family:montserrat">
          <div className="input-group">
            <select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select the Program</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="mobile-development">Mobile Development</option>
            </select>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="phone-group">
            <div className="country-code">
              +91
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input phone-input"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="submit-button"
          >
            <span>Book Free LIVE Class Now!</span>
            <svg 
              className="arrow-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}