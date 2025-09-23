import React from 'react';


const Footer = () => {
  return (
    <div className="footer-container">
      {/* Upper Section */}
      <div className="footer-upper-section">
        <div className="footer-upper-inner">
          {/* Left Side */}
          <div className="footer-left">
            <h1 className='text-xl lg:text-3xl font-medium'>Consulting Agency For Your Business</h1>
            <p>The quick fox jumps over the lazy dog</p>
          </div>
          {/* Right Side */}
          <div>
            <button className="footer-contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="footer-lower-section">
        <div className="footer-lower-inner">
          {/* Company Info */}
          <div className="footer-column">
            <h1 className="footer-links-title">Company Info</h1>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Career</li>
              <li>We Are Hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h1 className="footer-links-title">Legal</h1>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Career</li>
              <li>We Are Hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-column">
            <h1 className="footer-links-title">Features</h1>
            <ul className="footer-links">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h1 className="footer-links-title">Resources</h1>
            <ul className="footer-links">
              <li>IOS & Android</li>
              <li>Watch And Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer-column">
            <h1 className="footer-links-title">Get In Touch</h1>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <img src="/telephone.png" alt="Phone" />
                <p>(480) 555-0103</p>
              </li>
              <li className="footer-contact-item">
                <img src="/location.png" alt="Location" />
                <p>4517 Washington Ave.</p>
              </li>
              <li className="footer-contact-item">
                <img src="/send.png" alt="Email" />
                <p>XYZ@gmail.com</p>
              </li>
            </ul>
          </div>
           <div className="footer-social-icons">
    <a href="#" aria-label="Facebook">
      <img src="/facebook.png" alt="Facebook" />
    </a>
    <a href="#" aria-label="Instagram">
      <img src="/instagram.png" alt="Instagram" />
    </a>
    <a href="#" aria-label="Twitter">
      <img src="/twitter.png" alt="Twitter" />
    </a>
    <a href="#" aria-label="YouTube">
      <img src="/youtube.png" alt="YouTube" />
    </a>
  </div>
        </div>
      </div>

      {/* Bottom Section */}
<div className="footer-bottom-wrapper flex justify-center">
  <div className="footer-bottom-inner w-[85%]  flex justify-between ">
    <p className="footer-bottom-text"><p>&copy; 2025 Infinova Global. All rights reserved.</p>
</p>
 
  </div>
</div>

    </div>
  );
};

export default Footer;
