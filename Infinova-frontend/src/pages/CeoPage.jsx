import React from 'react';


const CeoPage = () => {
  return (
    <div className="ceo-container flex justify-center items-center">
      <div className="ceo-inner flex flex-col md:flex-row items-center">
        
        {/* CEO Image */}
        <div className="ceo-image w-full md:w-1/2 flex justify-center  h-[70vh] items-center ">
          <img 
            src="/ceo.png" 
            alt="CEO"  
            className="w-[90%]  sm:w-60 sm:h-60 md:w-80 md:h-100 object-contain rounded-2xl "
          />
        </div>
        
        {/* CEO Content */}
        <div className="ceo-content w-full md:w-1/2 flex flex-col items-center text-center">
          <div className="ceo-heading flex gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1289e4]">CEO</h1>
          </div>
          <p className="ceo-text text-[#053C66] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            As a dedicated Soft Skills Trainer, I have trained over 15,000 students in the past 5 years, 
            working with various companies and colleges. My expertise lies in enhancing communication, 
            leadership, and interpersonal skills through tailored workshops and seminars. 
            I have successfully managed numerous educational events, ensuring their smooth execution 
            and impactful outcomes. My mission is to empower individuals to achieve their full potential 
            in both personal and professional realms by providing them with the essential skills needed 
            to thrive in today's competitive environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
