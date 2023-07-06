import React from "react";
import "./Group.scss";

const Group = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={require("../../../assets/Programmes/Group.jpg")} alt="Image" className="image" />

        <div className="text">
          Are you excited to join us?
        </div>
        <div className="button-container">
          <button className="schedule-button">Schedule Now</button>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Group;
