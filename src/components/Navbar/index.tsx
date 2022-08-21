import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link className="menu-button" to="/stats">Statistic</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;