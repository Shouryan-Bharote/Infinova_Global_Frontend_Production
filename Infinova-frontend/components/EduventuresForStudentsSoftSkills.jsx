import React from "react";
import { Download } from 'lucide-react';


const EduventuresCourses = () => {
  const courses = [
    { title: "LaunchPad", desc: "Cyber security course" },
    { title: "Cusiosity", desc: "Cyber security course" },
    { title: "Excelerate", desc: "Cyber security course" },
  ];

  const handleDownload = () => {
    // Replace this with your actual brochure file URL
    const brochureUrl = '/path/to/your/brochure.pdf';
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="eduventuresCourses-container bg-white">
      {/* Heading */}
      <h2 className="eduventuresCourses-heading text-4xl font-bold text-center font-family" >
        <span className="text-blue-600">Soft Skills</span> Courses
      </h2>

      {/* Cards with Flexbox */}
      <div className="eduventuresCourses-cards flex flex-wrap justify-center">
        {courses.map((course,index) => (
          <div key={index} className="eduventuresCourses-cardWrapper">
            <div className="eduventuresCourses-card bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col">
              <div className="eduventuresCourses-image">
                <img
                  src="/coursesDummy.png"
                  alt="course"
                  className="rounded-xl w-full h-auto"
                />
              </div>

              <div className="eduventuresCourses-cardContent flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-700">{course.desc}</p>
                </div>

                <div className="mt-4">
                                  <button
                                    onClick={handleDownload}
                                    className="download-btn w-full"
                                    style={{
                                      backgroundColor: '#0056D2',
                                      color: 'white',
                                      border: 'none',
                                      borderRadius: '8px',
                                      padding: '10px 16px',
                                      fontSize: '14px',
                                      fontWeight: '600',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '6px',
                                      transition: 'all 0.3s ease',
                                      boxShadow: '0 2px 4px rgba(0, 86, 210, 0.2)',
                                    }}
                                    onMouseEnter={(e) => {
                                      e.target.style.backgroundColor = '#004BB8';
                                      e.target.style.transform = 'translateY(-1px)';
                                      e.target.style.boxShadow = '0 4px 8px rgba(0, 86, 210, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.target.style.backgroundColor = '#0056D2';
                                      e.target.style.transform = 'translateY(0)';
                                      e.target.style.boxShadow = '0 2px 4px rgba(0, 86, 210, 0.2)';
                                    }}
                                    onMouseDown={(e) => {
                                      e.target.style.transform = 'translateY(0)';
                                    }}
                                  >
                                    <Download size={16} />
                                    Download Brochure
                                  </button>
                                </div>
              
              </div>
            </div>

            {/* Show more button below first card */}
            {/* {index === 0 && (
              <div className="eduventuresCourses-showmore">
                <button className="eduventuresCourses-showmoreBtn border border-blue-500 text-black font-medium rounded-full shadow hover:bg-gray-100 transition">
                  show more <span className="eduventuresCourses-showmoreArrow">⌄</span>
                </button>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduventuresCourses;
