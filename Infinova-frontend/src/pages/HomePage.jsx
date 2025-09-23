import React from 'react';
import DivisionsPage from './DivisionsPage';
import AboutUs from './AboutUs';
import CeoPage from './CeoPage';
import Clients from './Clients';

const HomePage = () => {
  const scrollToDivisions = () => {
    const divisions = document.getElementById('divisionsPage');
    divisions?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="home-container">
        <video
          src="/bgVideo.mp4"
          autoPlay
          muted
          loop
          className="background-video"
        />
        <div className="overlay"></div>
        <h1 className="home-heading">"Education strategy</h1>
        <h1 className="home-heading">Innovation-</h1>
        <h1 className="home-heading home-heading-last">Under One Roof."</h1>
        <button className="explore-btn" onClick={scrollToDivisions}>
          Explore Now
        </button>
      </div>

      {/* Home Sections */}
      <DivisionsPage />
      <AboutUs />
      <Clients />
      <CeoPage />
    </>
  );
};

export default HomePage;
