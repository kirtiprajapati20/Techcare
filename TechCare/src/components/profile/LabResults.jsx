import React from "react";
import "../../assets/css/LabResults.css";
import DownloadIcon from "../../assets/images/DownloadIcon.svg";


const LabResults = () => {
  const labTests = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];

  return (
    <div className="container mt-4">
      <div className="card lab-card p-2 shadow-sm">
        <h5 className="card-title" style={{borderBottomColor:"white"}}>Lab Results</h5>
        <ul className="list-group">
          {labTests.map((test, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {test}
              <img src={DownloadIcon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
