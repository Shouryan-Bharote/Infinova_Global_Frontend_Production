import React from "react";

const FooterAnuj = () => {
  return (
    <footer className="footer-wrapper">
      {/* ===== Upper Blue Section ===== */}
      <div className="footer-upper-section">
        <div className="footer-upper-inner">
          <div className="footer-upper-left">
            <h2>Consulting Agency For Your Business</h2>
            <p>
              Unlock your company's full potential with our data-driven
              strategies.
            </p>
          </div>
          <div className="footer-upper-right">
            <button className="footer-contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* ===== Main Lower Section with 3 Columns ===== */}
      <div className="footer-lower-section">
        {/* A SINGLE .footer-content holds ALL three columns */}
        <div className="footer-content">
          {/* Column 1: Our Divisions */}
          <div className="footer-section">
            <h3 className="footer-links-title">Our Divisions</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Infinova Eduventures</a>
              </li>
              <li>
                <a href="#">Infinova consultants</a>
              </li>
              <li>
                <a href="#">Infinova Technologies</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick links */}
          <div className="footer-section">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Internships</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Hiring Solutions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="footer-section">
            <h3 className="footer-links-title">Get In Touch</h3>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <img src="../../public/telephone.png" alt="Phone" />
                <p>(480) 555-0103</p>
              </li>
              <li className="footer-contact-item">
                <img src="../../public/location.png" alt="Location" />
                <div>
                  head office address: Cidco,
                  <br />
                  Chh.Sambhajinagar/Aurangabad,
                  <br />
                  Maharashtra-431001
                </div>
              </li>
              <li className="footer-contact-item">
                <img src="../../public/mail.png" alt="Email" />
                <p>Infinovaeduventures@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Bottom Copyright & Social Icons Section ===== */}
      <div className="footer-bottom-section {">
        <p className="footer-copyright">&copy; 2025 Infinova Global. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook">
            <img src="../../public/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/infinova_eduventures?igsh=MTRuNG9wN2F4NG9kNw==" aria-label="Instagram">
            <img src="../../public/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/infinovaeduventures/" aria-label="Instagram">
            <img src="../../public/linkedin.png" alt="Linkedin" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="../../public/twitter.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="../../public/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterAnuj;
