import { NavLink } from "react-router-dom";

import { ReactComponent as ReactLogo } from "../assets/shared/logo.svg";

import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="bar">
        <div className="logo">
          <ReactLogo />
        </div>
        <div className="line"></div>
        <nav>
          <NavLink className="links" to="/" end>
            <b>00</b> &nbsp; Home
          </NavLink>
          <NavLink className="links" to="/Destination">
            <b>01</b> &nbsp; Destination
          </NavLink>
          <NavLink className="links" to="/Crew">
            <b>02</b> &nbsp; Crew
          </NavLink>
          <NavLink className="links" to="/Technology">
            <b>03</b> &nbsp; Technology
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
