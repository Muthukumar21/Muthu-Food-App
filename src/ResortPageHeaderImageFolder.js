import React from "react";
import "./ResortPageHeaderImageFolder.css";

function ResortPageHeaderImageFolder(props) {
  return (
    <div className="resortPageHeaderImageFolder">
      <div className="firstImage align">
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Party-Hall-at-Dindigul-Thalappakatti-Anna-Nagar-Thalap-Out-1.jpg"
          alt="not found"
        />
      </div>
      <div className="secondImage align">
        <img
          src="https://thalappakatti.com/wp-content/uploads/2017/01/thalappakatti-chicken-biriyani-bone.jpg"
          alt="not found"
        />
      </div>
      <div className="thirdImage align">
        <img
          src="https://thalappakatti.com/wp-content/uploads/2017/01/thalappakatti-egg-biriyani.jpg"
          alt="not found"
        />
      </div>
      <div className="fourImage align">
        <img
          src="https://thalappakatti.com/wp-content/uploads/2017/01/keemabal-biriyani.jpg"
          alt="not found"
        />
      </div>
      <div className="fiveImage align">
        <img
          src="https://thalappakatti.com/wp-content/uploads/2017/01/thalappakatti-mutton-biriyani-boneless.jpg"
          alt="not found"
        />
      </div>
    </div>
  );
}

export default ResortPageHeaderImageFolder;
