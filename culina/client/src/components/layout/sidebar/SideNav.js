import React from "react";
import { FilePlus } from "react-feather";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  // side-nav__link--active
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <SideNavItem icon={FilePlus} content="New Company" to={"company/new"} />
      </ul>
    </div>
  );
};

export default SideNav;
