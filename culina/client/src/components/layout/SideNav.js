import React from "react";
import { FilePlus } from "react-feather";

const SideNav = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a className="side-nav__link" href="">
            <FilePlus /> Click
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
