import React from "react";
import "../../assets/css/DiagnosticList.css";

const DiagnosticList = () => {
  const diagnostics = [
    { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
    { problem: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
    { problem: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
  ];

  return (
    <div className="container mt-4">
      <div className="card diagnostic-card p-3">
        <h5 className="card-title">Diagnostic List</h5>
        <table className="table table-hover">
          <thead style={{borderBottomColor:"white", backgroundColor:'#F6F7F8'}}>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody style={{borderBottomColor:"white"}}>
            {diagnostics.map((item, index) => (
              <tr key={index}>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
