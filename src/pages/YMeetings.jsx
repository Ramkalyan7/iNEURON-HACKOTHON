import axios from "axios";
import React, { useEffect, useState } from "react";
import YCard from "../components/YMeetings/YCard";

const YMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const getMeetings = async () => {
      const adminId = JSON.parse(localStorage.getItem("userId"));
      const { data } = await axios.get(
        `http://localhost:5000/meets/${adminId}`
      );
      setMeetings(data);
      console.log(data);
    };
    getMeetings();
  }, []);

  return (
    <>
      <div className="grid-cols-3 grid w-[90%]">
        {meetings.map(({ title, message, _id }) => {
          return (
            <YCard key={_id} title={title} message={message} meetId={_id} />
          );
        })}
      </div>
    </>
  );
};

export default YMeetings;
