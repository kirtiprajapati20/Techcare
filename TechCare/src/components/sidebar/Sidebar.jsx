import React, { useEffect, useState } from "react";
import "../../assets/css/Sidebar.css";
import axios from "axios";
import imgSearch from '../../assets/images/search_FILL0_wght300_GRAD0_opsz24.svg'
const Sidebar = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      let username = "coalition";
      let password = "skills-test";
      let auth = btoa(`${username}:${password}`);

      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );
      console.log("User Data:", response.data);
      setUserData(response?.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <div className="sidebar">
          <div className="top">
            <p>Patients</p>
            <img src={imgSearch} alt="Search" />
          </div>
          {/* Make sure userData is an array before mapping */}
          {Array.isArray(userData) && userData.length > 0 ? (
            userData.map((data, index) => (
              <div className="container mt-3" key={index}>
                <div className="d-flex align-items-center user-card">
                  <img
                    src={data?.profile_picture}
                    alt="Profile"
                    className="rounded-circle user-img"
                  />
                  <div className="ms-2">
                    <h6 className="mb-0 user-name">{data?.name}</h6>
                    <small className="sub-line">
                      {data?.gender}, {data?.age}
                    </small>
                  </div>
                  <div className="ms-auto">
                    <i className="fas fa-ellipsis-h options-icon"></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No patients found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
