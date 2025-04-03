import React from "react";
import Profile from "./Profile";
import Header from "./header/Header";
import "../assets/css/Header.css";

const Dashboard = () => {
  return (
    <>
      <div className="p-3">
        <Header />
      </div>
      <div>Dashboard</div>
      <Profile />
    </>
  );
};

export default Dashboard;
