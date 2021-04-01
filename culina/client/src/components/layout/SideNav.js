import React from "react";
import { FilePlus } from "react-feather";

const SideNav = () => {
  // side-nav__link--active
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a className="side-nav__link" href="#">
            <FilePlus className="side-nav__icon" /> Click
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
