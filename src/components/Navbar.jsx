import React from "react";
import "../styles/Navbar.css";
import { FaHome } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoMdMore } from "react-icons/io";
import { MdOutlineBugReport } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

function Navbar({formDiv, editFormDiv}) {
  let addTaskForm = () => {
    editFormDiv(!formDiv);
  }
  let createBtn;
  if(formDiv){
    createBtn = "HIDE FORM";
  }else{
    createBtn = "CREATE";
  }
  
  return (
    <>
      <header>
        <p>To Do App</p>
        <div>
          <input type="text" placeholder="Search Your To-Do...." />
          <button onClick={addTaskForm}>{createBtn}</button>
        </div>
      </header>
      <nav>
        <ul>
          <li className="nav_items">
            <FaArrowLeft />
            Navigation
          </li>
          <li className="nav_items">
            <FaHome />
            To-Do
          </li>
          <li className="nav_items">
            <CgNotes />
            Notes
          </li>
          <li className="nav_items">
            <IoMdMore />
            Tips
          </li>
          <li className="nav_items">
            <MdOutlineBugReport />
            Report Bugs
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;