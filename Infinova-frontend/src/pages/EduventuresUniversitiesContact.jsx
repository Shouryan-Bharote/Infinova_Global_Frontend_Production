import React from "react";


export default function EduventuresUniversitiesContact() {
  return (
    <div className="EduventuresUniversitiesContact w-full flex flex-col items-center bg-white">
      
      {/* Stats Section */}
      <div className="EduventuresUniversitiesContactStats flex flex-col md:flex-row justify-center items-center">
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">100+ College</p>
          {/* <p className="text-lg">College</p> */}
        </div>
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">15,000+ Trained</p>
          {/* <p className="text-lg">Trained</p> */}
        </div>
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">200+ Placement</p>
          {/* <p className="text-lg">Placement</p> */}
        </div>
      </div>

      {/* Contact Section */}
      <div className="EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Left: Heading */}
        <div className="EduventuresUniversitiesContactLeft md:w-1/2 w-full font-extrabold">
          <h2 className="EduventuresUniversitiesContactHeading text-4xl md:text-5xl leading-tight">
            Get In <span className="text-blue-600">Touch</span> <br />
            with <span className="text-black">Our Team</span>
          </h2>
        </div>

        {/* Right: Form */}
        <div className="EduventuresUniversitiesContactRight md:w-1/2 w-full flex flex-col">
          <input
            type="text"
            placeholder="Institute Name"
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          <input
            type="text"
            placeholder="Faculty Name"
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          <div className="EduventuresUniversitiesContactPhone flex">
            <input
              type="text"
              placeholder="+91"
              className="EduventuresUniversitiesContactInput w-20 rounded-full bg-white"
            />
            <input
              type="text"
              placeholder="Phone"
              className="EduventuresUniversitiesContactInput flex-1 rounded-full bg-white"
            />
          </div>
          <button className="EduventuresUniversitiesContactButton bg-[#0056D2] text-white rounded-md font-semibold shadow-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
