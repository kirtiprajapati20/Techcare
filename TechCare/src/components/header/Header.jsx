import React from "react";
import "../../assets/css/Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <div className="logo">
            <img src="/images/TestLogo.svg" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="/images/home_FILL0_wght300_GRAD0_opsz24.svg" />
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <img src="/images/group_FILL0_wght300_GRAD0_opsz24.svg" />
                  Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" />{" "}
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" />{" "}
                  Message
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg" />{" "}
                  Transactions
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn profile-dropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"

            >
              <img
                src="/public/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.jpg"
                alt="Profile Picture"
                className="profile-pic"
              />
              <span className="user-info">
                Dr. Jose Simmons <br />
                <p>General Practitioner</p>
              </span>
            </button>
          </div>
          
          <div className="me-3 menu-items">
            <img src="/images/settings_FILL0_wght300_GRAD0_opsz24.svg" />
            <img src="/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
