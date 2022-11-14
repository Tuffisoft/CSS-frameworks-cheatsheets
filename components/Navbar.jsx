import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

    return (
      <div className="navabar">
        <ul className="nav-likns">
          <Link to="/ant">Ant Design</Link>
          <Link to="/bulma">Bulma</Link>
          <Link to="/chakra">Chakra</Link>
          <Link to="/tailwind">Tailwind</Link>
        </ul>
      </div>
    )
  }