import React, { useState } from "react";
import { FilePlus, FileText } from "react-feather";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("");
  // side-nav__link--active
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FileText}
          content="All Restaurants"
          to="/restaurants"
        />
        <SideNavItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          icon={FilePlus}
          content="New Restaurants"
          to="/restaurant/new"
        />
      </ul>
    </div>
  );
};

export default SideNav;
