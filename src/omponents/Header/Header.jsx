import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="hero">
        <h1>
          Be your own chef <br /> and learn new recepi
        </h1>
        <Link to={`recipe`}>  <button className="hero-btn">
         Expolore Now <span> &rarr;</span>
        </button></Link>
      </div>
    </>
  );
}

export default Header;
