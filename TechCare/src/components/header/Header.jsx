import React from "react";
import "../../assets/css/Header.css";
import img1 from '../../assets/images/TestLogo.svg';
import img2 from '../../assets/images/home_FILL0_wght300_GRAD0_opsz24.svg';
import img3 from '../../assets/images/group_FILL0_wght300_GRAD0_opsz24.svg';
import img4 from '../../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import img5 from '../../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import img6 from '../../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import img7 from '../../assets/images/settings_FILL0_wght300_GRAD0_opsz24.svg';
import img8 from '../../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg';


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <div className="logo">
            <img src={img1} />
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
                  <img src={img2} />
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <img src={img3} />
                  Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={img4} />{" "}
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={img5} />{" "}
                  Message
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={img6} />{" "}
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
                src={img7}
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
            <img src={img8} />
          
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
