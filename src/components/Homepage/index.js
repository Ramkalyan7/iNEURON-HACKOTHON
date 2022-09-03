import React from "react";
import "./style.css";
const Homepage = () => {
  return (
    <div className="flex items-center">
      {/* <span class="v7_58">T∞GETHER</span><span class="v7_61">Meet anytime, anywhere</span> */}

      <button type="button" class="btn btn-primary m-5">
        create meeting
      </button>
      <button type="button" class="btn btn-primary m-5">
        Join a Meeting
      </button>
    </div>
  );
};

export default Homepage;
