import React from "react";
import Header from "./header/Header";
import "../assets/css/Header.css";
import Sidebar from "./sidebar/Sidebar";
const Dashboard = () => {
  return (
    <div className="p-3 dashboard">
      <Header />
      <div className="wrapper d-flex flex-column min-vh-100">
        <Sidebar />
        <div className="body flex-grow-1">{/* <AppContent /> */}</div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default Dashboard;
