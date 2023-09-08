import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((navLinks) => ( <a href={"#" + navLinks} key={navLinks}>{navLinks}</a>)); 
   return (
    <nav>
      {navLinks}
    </nav>
   );
  }

export default NavBar;