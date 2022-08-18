import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/Heading.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="section-info">
        <h1>Build your library</h1>
        <p>But two selected books and get one for free</p>
        <Link to="/all-books">
          <button>View all</button>
        </Link>
      </div>
      <div className="image">
        <img src={headerImg} alt="heading-img" />
      </div>
    </div>
  );
};
export default Header;
