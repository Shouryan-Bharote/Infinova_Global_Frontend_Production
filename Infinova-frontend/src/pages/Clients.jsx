import React from 'react';

import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

const Clients = () => {
  return (
    <div className="clients-section">
      
      {/* Clients Heading */}
      <h1 className="clients-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Clients
      </h1>

      {/* Marquee Section */}
      <div className="clients-marquee-container">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex">
            <img src="/google.png" alt="Google" className="clients-logo" />
            <img src="/ebay.png" alt="Ebay" className="clients-logo" />
            <img src="/paytm.png" alt="Paytm" className="clients-logo" />
            <img src="/amazon.png" alt="Amazon" className="clients-logo" />
            <img src="/unilever.png" alt="Unilever" className="clients-logo" />
          </div>
          <div className="flex">
            <img src="/google.png" alt="Google" className="clients-logo" />
            <img src="/ebay.png" alt="Ebay" className="clients-logo" />
            <img src="/paytm.png" alt="Paytm" className="clients-logo" />
            <img src="/amazon.png" alt="Amazon" className="clients-logo" />
            <img src="/unilever.png" alt="Unilever" className="clients-logo" />
          </div>
        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="choose-heading">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Why <span className="text-blue-500">Choose</span> Us ?
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stats-card bg-[#FFF3E3] flex items-center flex-col">
          <Users className="stats-icon" />
          <h3 className="stats-number">30+</h3>
          <p className="stats-label">Teams</p>
        </div>

        <div className="stats-card bg-[#FFEEEE] flex items-center flex-col">
          <TrendingUp className="stats-icon" />
          <h3 className="stats-number">45+</h3>
          <p className="stats-label">Happy Students</p>
        </div>

        <div className="stats-card bg-[#E4FAFF] flex items-center flex-col">
          <Award className="stats-icon" />
          <h3 className="stats-number">12+</h3>
          <p className="stats-label uppercase">Award Winning</p>
        </div>

        <div className="stats-card bg-[#ECE7FF] flex items-center flex-col">
          <Briefcase className="stats-icon" />
          <h3 className="stats-number">150+</h3>
          <p className="stats-label">Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
