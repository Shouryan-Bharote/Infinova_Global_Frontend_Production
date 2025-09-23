import React from 'react';
import '../global.css';

const EduventuresForStudentsHeroSection = () => {
  return (
    <div className="education-banner">
      <div className="banner-container">
        {/* Left Content Section */}
        <div className="content-section">
          <div className="text-content">
            <h1 className="main-heading font-extrabold leading-snug">
              "Your Dream Career is One Skill Away, Join{' '}
              <span className="highlight">Infinova Eduventures</span> Now!!"
            </h1>
            <button className="contact-btn">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Illustration Section */}
        <div className="illustration-section">
          <div className="image-container">
            <img 
              src='/student-heri-img.png'
              alt="Student to Professional Transformation" 
              className="character-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduventuresForStudentsHeroSection;