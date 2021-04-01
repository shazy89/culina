import React from "react";
import { Link } from "react-router-dom";

const SideNavItem = ({ icon: Icon, content, fref }) => {
  return (
    <li className="side-nav__item">
      <Link className="side-nav__link" to="#">
        <Icon className="side-nav__icon" />
        {content}
      </Link>
    </li>
  );
};

export default SideNavItem;
