import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OCard from "../components/OMeeting/OCard";

const OMeetings = () => {
  const { adminId } = useParams();
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const getMeetings = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/meets/${adminId}`
        );
        console.log(data);
        setMeetings(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMeetings();
  }, [adminId]);
  return (
    <div className="grid-cols-3 grid w-[90%]">
      {meetings.map(({ title, message, _id }) => {
        return <OCard title={title} message={message} key={_id} meetId={_id} />;
      })}
    </div>
  );
};

export default OMeetings;
