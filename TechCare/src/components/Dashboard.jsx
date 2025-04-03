import React from "react";
import Profile from "./profile/Profile";
import Header from "./header/Header";
import "../assets/css/Header.css";
import DiagnosticList from "./profile/DiagnosticList";
import LabResults from "./profile/LabResults";

const Dashboard = () => {
  return (
    <>
      <div className="p-3">
        <Header />
      </div>
      <div>Dashboard</div>
      <Profile />
      <div className="container">
      <DiagnosticList />
      <LabResults />
    </div>
    </>
  );
};

export default Dashboard;
