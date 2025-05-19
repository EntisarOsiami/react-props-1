import React from "react";

function Nav() {
  return (
    <div className="navbar">
      <li className="brand-nav">Website</li>

      <ul className="nav-list">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Profile</a></li>
      </ul>
    </div>
  );
}

export default Nav;
