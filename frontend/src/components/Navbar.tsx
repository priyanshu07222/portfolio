// import React from 'react'

import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <div className="flex justify-between my-4  py-4">
      <div>
        <Logo/>
      </div>
      <div className="flex gap-6">
        <NavItem items={{name:"Home", url:"/"}}  />
        <NavItem items={{name:"About", url:"/"}}  />
        <NavItem items={{name:"Projects", url:"/"}}  />
      </div>
    </div>
  );
};
