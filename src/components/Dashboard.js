import React from "react";
import Search from "./Search";
import LocalNav from "./LocalNav";

const Dashboard = () => {
  return (
    <div>
      <div className="row"></div>
      <Search />
      <LocalNav />
    </div>
  );
};

export default Dashboard;
