import React from "react";
import "../../assets/css/Profile.css";
import profilePic from "../../assets/images/profile.png";
import BirthIcon from "../../assets/images/BirthIcon.svg";
import FemaleIcon from "../../assets/images/FemaleIcon.svg";
import PhoneIcon from "../../assets/images/PhoneIcon.svg";
import InsuranceIcon from "../../assets/images/InsuranceIcon.svg";

const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-end">
        <div className="col-md-6">
          <div className="card profile-card text-center p-3 shadow-sm">
            <img src={profilePic} className="profile-img" alt="Profile" />
            <div className="card-body">
              <h5 className="card-title">Jessica Taylor</h5>
              <div className="py-3 profile">
              <div class="d-flex align-items-center gap-3 p-2">
                <div class="flex-shrink-0">
                  <img src={BirthIcon} alt="Gender" class="img-fluid rounded" />
                </div>
                <div class="d-flex flex-column">
                  <span>Date Of Birth</span>
                  <strong>August 23, 1996</strong>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3 p-2">
                <div class="flex-shrink-0">
                  <img src={FemaleIcon} alt="Gender" class="img-fluid rounded" />
                </div>
                <div class="d-flex flex-column">
                  <span>Gender</span>
                  <strong>Female</strong>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3 p-2">
                <div class="flex-shrink-0">
                  <img src={PhoneIcon} alt="Gender" class="img-fluid rounded" />
                </div>
                <div class="d-flex flex-column">
                  <span>Contact Info.</span>
                  <strong>(415) 555-1234</strong>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3 p-2">
                <div class="flex-shrink-0">
                  <img src={PhoneIcon} alt="Gender" class="img-fluid rounded" />
                </div>
                <div class="d-flex flex-column">
                  <span>Emergency Contacts</span>
                  <strong>(415) 555-5678</strong>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3 p-2">
                <div class="flex-shrink-0">
                  <img src={InsuranceIcon} alt="Gender" class="img-fluid rounded" />
                </div>
                <div class="d-flex flex-column">
                  <span>Insurance Provider</span>
                  <strong>Sunrise Health Assurance</strong>
                </div>
              </div>
              </div>
              <button className="btn btn-primary">Show All Information</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
