import React from 'react';


const AboutUs = () => {
  return (
    <div className="aboutus-container flex justify-center">
      <div className="aboutus-inner flex flex-col lg:flex-row w-[90vw]">
        
        {/* Left Side Image */}
        <div className="aboutus-image w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto flex justify-center">
          <img src="https://www.cyberoism.com/wp-content/uploads/2022/01/aboutus.png" alt="" className='h-[100%]'/>
        </div>

        {/* Right Side Content */}
        <div className="aboutus-content w-full lg:w-1/2 flex flex-col justify-center">
          {/* Heading */}
          <div className="aboutus-heading flex justify-center gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1289E4]">
              Us
            </h1>
          </div>

          {/* Paragraph */}
          <p className="aboutus-text text-[#053C66] text-lg sm:text-xl md:text-2xl text-center">
            “At Infinova Global, we unite education, strategy, and innovation to empower people and businesses. 
            Through Eduventures, we make students job-ready. With Consultants, we help corporates grow stronger. 
            And with Technologies, we deliver future-driven solutions. Our vision is simple — nurture talent, 
            boost growth, and transform the future.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
