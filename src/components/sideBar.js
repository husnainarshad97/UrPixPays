import "../css/style.css";
// import Link from 'react-router-dom'
//icons

import { FcDebian } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsTable } from "react-icons/bs";
import { FaPuzzlePiece } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function SideBar() {
  const [option, setOption] = useState(0);
  return (
    <div>
       <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="ti-unlink">
              <FcDebian />
            </span>

            <span>UrPixPays</span>
          </h3>
          <label for="sidebar-toggle">
            <FaBars className="sidebar-toggle-burger" />
          </label>
          <label for="sidebar-toggle">
            <ImCross className="sidebar-toggle-hide" />
          </label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li className={option === 0 ? 'active': 'inactive'} onClick={() => setOption(0)}>
              <span >
                <span className="menu-icon">
                  <GoHome />
                </span>
                <span className="menu-text ">Home</span>
              </span>
            </li>

            <li className={option === 1 ? 'active': 'inactive'} onClick={() => setOption(1)}>
              <span  >
                 {/* <div className={option === 3 ? 'active': 'inactive'} onClick={() => setOption(1)}>Add new Challenge</div> */}
                <span className="menu-icon">
                  <FaPuzzlePiece />
                </span>
                <span className="menu-text">Challenge</span>
              </span>
            </li>

            <li className={option === 2 ? 'active': 'inactive'} onClick={() => setOption(2)}>
              <span >
                <span className="menu-icon">
                  <BsTable />
                </span>
                <span className="menu-text"> User Table</span>
              </span>
            </li>
          </ul>
        </div>

       
      </div>
    </div>
  );
}

export default SideBar;
