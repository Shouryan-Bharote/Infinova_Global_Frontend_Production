import React from 'react';
import Eduventures from '../Eduventures';
import { useNavigate } from 'react-router-dom';
const DivisionsPage = () => {
  const navigate=useNavigate();
  return (
    <div className="division-outer" id='divisionsPage'>
      
      {/* Heading */}
      <div className="division-header">
        <h1 className="division-header-title">Our</h1>
        <h1 className="division-header-title division-header-blue">Division</h1>
      </div>

      {/* Division Logo Cards */}
      <div className="division-logo-container">
        <div className="division-logo-card cursor-pointer" onClick={()=>navigate('/eduventures')}>
          <img src="/eduventures.png" alt="Eduventures" className="division-logo-img" />
        </div>
        <div className="division-logo-card cursor-pointer"
          onClick={()=>navigate('/coming-soon')}>
          <img src="/CON_Logo.png" alt="Consultants" className="division-logo-img" />
        </div>
        <div className="division-logo-card cursor-pointer"
          onClick={()=>navigate('/coming-soon')}>
          <img src="/TECH_Logo.png" alt="Technologies" className="division-logo-img" />
        </div>
      </div>

      {/* Division Content Cards */}
      <div className="division-content">
        <div className="division-content-grid">
          <div className="division-info-card flex items-center flex-col">
            <img src="/textBook.png" alt="Education" className="division-info-img" />
            <h1 className="division-info-title">Education Empowers</h1>
            <p className="division-info-text">
              We prepare students and professionals with industry-relevant skills,
              bridging the gap between learning and real-world opportunities.
            </p>
          </div>

          <div className="division-info-card flex items-center flex-col">
            <img src="/growth.png" alt="Strategy" className="division-info-img" />
            <h1 className="division-info-title">Strategy Guides</h1>
            <p className="division-info-text">
              We help individuals and organizations make informed choices,
              ensuring career and business growth with the right strategies.
            </p>
          </div>

          <div className="division-info-card flex items-center flex-col ">
            <img src="/light.png" alt="Innovation" className="division-info-img" />
            <h1 className="division-info-title">Innovation Transforms</h1>
            <p className="division-info-text">
              Through cutting-edge technologies and creative solutions, we drive
              transformation that shapes industries and empowers the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionsPage;
