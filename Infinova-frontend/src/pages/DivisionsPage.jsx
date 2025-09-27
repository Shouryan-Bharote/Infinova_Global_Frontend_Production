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


      {/* Divison-cart1 */}
      <div className='cards'>
      <div class="card">
        <div className="division-logo-card cursor-pointer" onClick={()=>navigate('/eduventures')}>
          <img src="/eduventures.png" alt="Eduventures" className="division-logo-img" />
        </div>

        <div className="division-info-card flex items-center flex-col ">
        <img src="/textBook.png" alt="Education" className="division-info-img" />
            <h3 className="division-info-title">Education Empowers</h3>
            <p className="division-info-text">
              We prepare students and professionals with industry-relevant skills,
              bridging the gap between learning and real-world opportunities.
            </p>

          <a className="link cursor-pointer" onClick={()=>navigate('/eduventures')}>Learn more →</a>
      </div>  
      </div>

      {/* Divison-cart2 */}
      <div class="card">
         <div className="division-logo-card cursor-pointer" onClick={()=>navigate('/coming-soon')}>
          <img src="/CON_Logo.png" alt="Consultants" className="division-logo-img" />
        </div>

          <div className="division-info-card flex items-center flex-col ">
          <img src="/growth.png" alt="Strategy" className="division-info-img" />
            <h3 className="division-info-title">Strategy Guides</h3>
            <p className="division-info-text">
              We help individuals and organizations make informed choices,
              ensuring career and business growth with the right strategies.
            </p>
          <a className="link cursor-pointer" onClick={()=>navigate('/coming-soon')}>Learn more →</a>
      </div>
      </div>

      {/* Division-Cart3 */}
      <div class="card">
         <div className="division-logo-card cursor-pointer"onClick={()=>navigate('/coming-soon')}>
          <img src="/TECH_Logo.png" alt="Technologies" className="division-logo-img" />
        </div>

          <div className="division-info-card flex items-center flex-col ">
           <img src="/light.png" alt="Innovation" className="division-info-img" />
            <h3 className="division-info-title">Innovation Transforms</h3>
            <p className="division-info-text">
              Through cutting-edge technologies and creative solutions, we drive
              transformation that shapes industries and empowers the future.
            </p>
            <a className="link cursor-pointer" onClick={()=>navigate('/coming-soon')}>Learn more →</a>
      </div>
      </div>
      </div>

    </div>
  );
};

export default DivisionsPage;
