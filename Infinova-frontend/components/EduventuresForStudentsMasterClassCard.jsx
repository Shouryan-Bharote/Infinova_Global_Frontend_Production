import React from 'react';
import '../global.css';

const MasterClasses = () => {
  const classData = {
    title: "Become a Maang Engineer",
    instructor: "By Sayed Mustakim",
    role: "CEO & Founder",
    date: "Day, Date",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  };

  return (
    <div className="master-classes-container font family-montserrat">
      <div className="header">
        <h1 className="title">
          Free <span className="highlight">Master Classes</span>
        </h1>
      </div>
      
      <div className="classes-grid">
        <div className="class-card">
          <div className="card-content">
            <div className="upcoming-badge">Upcoming</div>
            <h2 className="class-title font-bold">{classData.title}</h2>
            
            <div className="instructor-section">
              <div className="instructor-image">
                <img 
                  src={classData.image}
                  alt="Sayed Mustakim"
                />
              </div>
              <div className="instructor-info">
                <div className="instructor-name font-extrabold">{classData.instructor}</div>
                <div className="instructor-role font-bold">{classData.role}</div>
              </div>
            </div>
            
            <div className="action-section">
              <button className="register-btn">
                Register
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="date-badge">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {classData.date}
              </div>
            </div>
          </div>
        </div>

        {/* Second identical card */}
        <div className="class-card">
          <div className="card-content">
            <div className="upcoming-badge">Upcoming</div>
            <h2 className="class-title font-bold">{classData.title}</h2>
            
            <div className="instructor-section">
              <div className="instructor-image">
                <img 
                  src={classData.image}
                  alt="Sayed Mustakim"
                />
              </div>
              <div className="instructor-info">
                <div className="instructor-name font-extrabold">{classData.instructor}</div>
                <div className="instructor-role font-bold">{classData.role}</div>
              </div>
            </div>
            
            <div className="action-section">
              <button className="register-btn">
                Register
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="date-badge">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {classData.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;