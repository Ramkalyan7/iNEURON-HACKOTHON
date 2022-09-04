import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Homepage = () => {
  return (
    <div className="flex items-center ">
      {/* <span className="v7_58">T∞GETHER</span><span className="v7_61">Meet anytime, anywhere</span> */}
      <div>
        {" "}
        <Link
          to="/createmeeting"
          type="button"
          className=" bg-blue-900 btn btn-primary m-5"
        >
          create meeting
        </Link>
        <Link to="/registermeet" className="btn btn-primary m-5">
          Join a Meeting
        </Link>
      </div>

      <div>
        {" "}
        <Link
          to="/seeyourmeetings"
          className=" bg-blue-900 btn btn-primary m-5"
        >
          See meetings created by you
        </Link>
        <Link to="/seeothersmeetings" className="btn btn-primary m-5">
          See meeting of others
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
