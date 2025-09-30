import React from "react";
import { NavLink } from "react-router-dom";


const EduventuresNavbar = () => {
  return (
    <nav className="eduventures-navbar bg-black h-[5.5 vh] md:h-[5.5 vh]">
      <div className="eduventures-navbar-inner">
        <NavLink
          to="/eduventures/forstudents"
          className={({ isActive }) =>
            isActive
              ? "eduventures-link active-link"
              : "eduventures-link"
          }
        >
          For Individuals
        </NavLink>
        <NavLink
          to="/eduventures/foruniversities"
          className={({ isActive }) =>
            isActive
              ? "eduventures-link active-link"
              : "eduventures-link"
          }
        >
          For Universities
        </NavLink>
      </div>
    </nav>
  );
};

export default EduventuresNavbar;
