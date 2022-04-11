import React from "react";

import "../css/style.css";

//Components
import SideBar from "./sideBar";
import Table from "./Table";
import Header from "./Header";
import UserTable from "./userTable";
import Challenges from "./Challenges";
import Maincontent from "./mainContent";

function Admin() {
  return (
    <div className="body">
      <SideBar />
      <Header />
      {/* <Maincontent/> */}
      <Table />
      {/* <UserTable/> */}
    </div> //body div
  );
}

export default Admin;
