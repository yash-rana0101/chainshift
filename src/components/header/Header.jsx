// import React from 'react';

import { Link } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.png"

export default function Header() {
  return (
    <header className="flex justify-between px-16 py-4 w-full bg-bg900  text-white">
      
        <Link to={"/"}><img src={NavLogo} alt="logo" draggable="false" className="h-16 cursor-pointer" /></Link>
      
      <div className="nav flex gap-8 items-center font-bold text-xl">
        <nav className="">
          <ul className="flex gap-8 justify-end w-full ">
            <li>
              <Link className="hover:text-primary500">Home</Link>
            </li>
            <li>
              <Link className="hover:text-primary500">About</Link>
            </li>
            <li>
              <Link className="hover:text-primary500">Service</Link>
            </li>
            <li>
              <Link className="hover:text-primary500">Why us</Link>
            </li>
            <li>
              <Link className="hover:text-primary500">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
