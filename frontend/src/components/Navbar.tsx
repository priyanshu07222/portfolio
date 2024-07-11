// import React from 'react'

import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Social } from "./Social";

export const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between my-4  py-4">
        <div>
          <Logo />
        </div>
        <div className="flex gap-6">
          <NavItem items={{ name: "Home", url: "/" }} />
          <NavItem items={{ name: "About", url: "/" }} />
          <NavItem items={{ name: "Projects", url: "/" }} />
          {/* <Social/> */}
        </div>
      </div>
    </Container>
  );
};
