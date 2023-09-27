import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as IconExpand } from "../assets/shared/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../assets/shared/icon-close.svg";

import "./SideBar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ShowSidebar = () => {
    setIsOpen(true);
  };

  const HideSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        className={`open-button ${isOpen ? "hide" : ""}`}
        onClick={ShowSidebar}
      >
        <IconExpand />
      </div>
      <div
        className={`close-button ${isOpen ? "block" : ""}`}
        onClick={HideSidebar}
      >
        <IconClose />
      </div>
      <nav className={`${isOpen ? "flex" : ""}`}>
        <NavLink
          className="links"
          to="/"
          end
          onClick={HideSidebar}
        >
          <b>00</b> &nbsp; Home
        </NavLink>
        <NavLink
          className="links"
          to="/Destination"
          onClick={HideSidebar}
        >
          <b>01</b> &nbsp; Destination
        </NavLink>
        <NavLink
          className="links"
          to="/Crew"
          onClick={HideSidebar}
        >
          <b>02</b> &nbsp; Crew
        </NavLink>
        <NavLink
          className="links"
          to="/Technology"
          onClick={HideSidebar}
        >
          <b>03</b> &nbsp; Technology
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
