import React from "react";

const Header = () => {
  return (
    <div className="navbar d-flex">
      <div>
        <img src="./logo192.png" />
      </div>
      <div>
        <ul className="menu d-flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
