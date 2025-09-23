import React from "react";


export default function EduventuresForUniversitiesHeroSection() {
  return (
    <div className="eduventuresForUniversitiesHeroSection bg-blue-50 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="eduventuresForUniversitiesHeroSectionLeft text-center md:text-left">
        <h1 className="eduventuresForUniversitiesHeroSectionHeading font-extrabold leading-snug">
          “The Perfect <span className="text-blue-600">Training</span> &amp;{" "}
          <span className="text-blue-600">Placement</span> Solutions for Your Campus”
        </h1>

        <button className="eduventuresForUniversitiesHeroSectionButton bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>

      {/* Right Content */}
      <div className="eduventuresForUniversitiesHeroSectionRight flex items-center justify-center md:justify-end">
        <img
          src="/ourPartners.png"
          alt="Our Partners"
          className="eduventuresForUniversitiesHeroSectionImage"
        />
      </div>
    </div>
  );
}
