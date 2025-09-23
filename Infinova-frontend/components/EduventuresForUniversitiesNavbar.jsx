import React, { useState } from "react";


export default function EduventuresForUniversitiesNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="eduventuresForUniversityNavbar">
      {/* Left: Logo */}
      <div className="eduventuresForUniversityNavbarLeft">
        <img
          src="/eduventures.png"
          alt="Infinova Eduventures"
          className="eduventuresForUniversityNavbarLogo"
        />
      </div>

      {/* Right: Desktop Links */}
      <div className="eduventuresForUniversityNavbarRight">
        <h1 className="eduventuresForUniversityNavbarHeading">
          For <span className="highlight">Campus</span>
        </h1>

        {/* Our Programs */}
        <div className="eduventuresForUniversityNavbarDropdown">
          <button
            className="eduventuresForUniversityNavbarLink"
            onClick={() => toggleMenu("programs")}
          >
            <span>Our Programs</span>
            <span>{openMenu === "programs" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "programs" && (
            <div className="eduventuresForUniversityNavbarDropdownBox">
              <a href="#">Program 1</a>
              <a href="#">Program 2</a>
              <a href="#">Program 3</a>
            </div>
          )}
        </div>

        {/* Our Partners */}
        <div className="eduventuresForUniversityNavbarDropdown">
          <button
            className="eduventuresForUniversityNavbarLink"
            onClick={() => toggleMenu("partners")}
          >
            <span>Our Partners</span>
            <span>{openMenu === "partners" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "partners" && (
            <div className="eduventuresForUniversityNavbarDropdownBox">
              <a href="#">Partner 1</a>
              <a href="#">Partner 2</a>
              <a href="#">Partner 3</a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="eduventuresForUniversityNavbarMobile">
        <button
          className="eduventuresForUniversityNavbarHamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="eduventuresForUniversityNavbarMobileMenu">
          <h1 className="eduventuresForUniversityNavbarHeading">
            For <span className="highlight">Campus</span>
          </h1>
          <button
            className="eduventuresForUniversityNavbarMobileLink"
            onClick={() => toggleMenu("programs")}
          >
            Our Programs {openMenu === "programs" ? "▲" : "▼"}
          </button>
          {openMenu === "programs" && (
            <div className="eduventuresForUniversityNavbarDropdownBox">
              <a href="#">Program 1</a>
              <a href="#">Program 2</a>
              <a href="#">Program 3</a>
            </div>
          )}

          <button
            className="eduventuresForUniversityNavbarMobileLink"
            onClick={() => toggleMenu("partners")}
          >
            Our Partners {openMenu === "partners" ? "▲" : "▼"}
          </button>
          {openMenu === "partners" && (
            <div className="eduventuresForUniversityNavbarDropdownBox">
              <a href="#">Partner 1</a>
              <a href="#">Partner 2</a>
              <a href="#">Partner 3</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
