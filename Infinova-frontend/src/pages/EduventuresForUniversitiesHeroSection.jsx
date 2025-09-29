import React from "react";

export default function EduventuresForUniversitiesHeroSection() {
  return (
    <>
      <style>{`
        /* General Styling */
        .hero-section-wrapper {
          width: 100%;
          background-color: #eff6ff; /* equivalent to bg-blue-50 */
          padding: 2rem 1rem; /* p-8 for mobile */
        }

        .hero-container {
          max-width: 1280px; /* A standard container width */
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column; /* Mobile first: stacked layout */
          align-items: center;
          justify-content: center;
          gap: 2rem; /* gap-8 */
        }

        /* Left Content: Text and Button */
        .hero-left-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center; /* Center items on mobile */
          text-align: center; /* Center text on mobile */
        }

        .hero-heading {
          font-size: 2rem; /* text-4xl */
          font-weight: 800; /* font-extrabold */
          line-height: 1.25; /* leading-tight */
          color: #1f2937; /* text-gray-800 */
        }

        .highlight-text {
          color: #2563eb; /* text-blue-600 */
        }

        .hero-cta-button {
          margin-top: 2.5rem; /* mt-10 */
          border-radius: 0.5rem; /* rounded-lg */
          background-color: #2563eb; /* bg-blue-600 */
          padding: 1rem 2rem; /* px-8 py-4 */
          font-size: 1.125rem; /* text-lg */
          font-weight: 600; /* font-semibold */
          color: #ffffff; /* text-white */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */
          transition: background-color 0.2s ease-in-out;
          border: none;
          cursor: pointer;
        }

        .hero-cta-button:hover {
          background-color: #1d4ed8; /* hover:bg-blue-700 */
        }

        .hero-cta-button:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px #eff6ff; /* focus rings */
        }

        /* Right Content: Image */
        .hero-right-content {
          margin-top: -1rem; /* mt-8 */
          width: 100%;
          display: flex;
          align-items: end;
          justify-content: end;
        }

        .hero-image {
          height: auto;
          width: 100%;
          max-width: 25rem; /* max-w-lg */
          border-radius: 0.5rem; /* rounded-lg */
          object-fit: contain;
        }

        /* Responsive Styles for Medium Screens and Up (Tablets & Desktops) */
        @media (min-width: 768px) {
          .hero-section-wrapper {
            padding-top: 1rem; /* md:py-16 */
          }

          .hero-container {
            flex-direction: row; /* Side-by-side layout */
            justify-content: space-between;
          }

          .hero-left-content {
            width: 60%; /* Utilized mid-space for text */
            margin-top: 0;
            align-items: flex-start; /* Align to the left */
            text-align: left;
          }
          
          .hero-right-content {
            width: 40%;
            margin-top: 0;
          }

          .hero-heading {
            font-size: 3rem; /* md:text-5xl */
          }
        }

        /* Responsive Styles for Large Screens and Up (Large Desktops) */
        @media (min-width: 1024px) {
          .hero-heading {
            font-size: 4.5rem; /* lg:text-6xl */
          }
        }
      `}</style>
      <div className="hero-section-wrapper">
        <div className="hero-container">
          {/* Left Content: Text and Button */}
          <div className="hero-left-content">
            <h1 className="hero-heading">
              The perfect <span className="highlight-text">Training</span> &{" "}
              <span className="highlight-text">Placement</span> Solutions for
              Your Campus
            </h1>
            <button className="hero-cta-button">Contact Us</button>
          </div>

          {/* Right Content: Image */}
          <div className="hero-right-content">
            <img
              src="../../public/ourPartners.png"
              alt="Our Partners"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

