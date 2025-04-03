import React from "react";
import "../../assets/css/Header.css"
const Header =()=>{
    return(
        <>
           <nav className="navbar navbar-light  px-4  ">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" className=" nav-img" />
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0 p-0">
            <img src="/images/icons/search.svg" className=" ps-2"/>
            {/* <i className="fa fa-search ps-3 me-1" style={{color:"#9C8E73"}} ></i> */}
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="left ms-auto">
        <button className="ask-button p-1 px-2  me-2">
          Ask Me Anything <img src="/images/icons/msg.svg" />
        </button>
        <div className="mt-2">
          <div>
            <label>
              <input type="checkbox" id="modeToggle" />
              <div class="toggle-switch">
                <img
                  src="/images/icons/sun-svgrepo-com 1.svg"
                  className="sun-icon"
                />
                <img
                  src="/images/icons/moon-svgrepo-com 3.png"
                  className="moon-icon"
                />
              </div>
            </label>
          </div>
        </div>
        {/* <Dropdown>
          <Dropdown.Toggle
            as="button"
            className="btn p-0 ms-1 mt-1  custom-dropdown"
          >
            <img
              src="/images/icons/language.svg"
              className=" me-2"
              alt="lang"
            />
            En
            <img
              src="/images/icons/Iconset.svg"
              className="ms-1"
              width="15"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
            <Dropdown.Item>French</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            className="btn p-0 ms-1 mt-1  custom-dropdown"
          >
            <img
              src="/images/5.jpg"
              alt="User"
              className="user rounded-circle  "
            />
            <img
              src="/images/icons/Iconset.svg"
              className="ms-1"
              width="15 p-0"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </nav>
        </>
    )
}
export default Header;