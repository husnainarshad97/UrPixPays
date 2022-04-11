import React from "react";
import { FcSearch } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";

const Header = () => {
  return (
    <div className="main-content">
     
        <header>
          <div className="search-wrapper">
            <span className="ti-search">
              <FcSearch />
            </span>
            <input type="search" placeholder="search"></input>
          </div>

          <div className="social-icons">
            <span className="ti-bell">
              <FcInvite />
            </span>
            <span className="ti-comment">
              <FcSms />
            </span>
            <div className="header-img"></div>
          </div>
        </header>
   
    </div>
  );
};

export default Header;
