import React from 'react'
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoMdMore } from "react-icons/io";
import { MdOutlineBugReport } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <header>To Do App</header>
      <nav>
        <ul>
          <li className="nav_items"><FaArrowLeft />Navigation</li>
          <li className="nav_items"><FaHome />To-Do</li>
          <li className="nav_items"><CgNotes />Notes</li>
          <li className="nav_items"><IoMdMore />More</li>
          <li className="nav_items"><MdOutlineBugReport />Report Bugs</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
