import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RegisteredMUs = () => {
  const { meetId } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getMeetDetails = async () => {
      const { data } = await axios.get(`http://localhost:5000/users/${meetId}`);
      console.log(data.users);
      setUsers(data.users);
    };

    getMeetDetails();
  }, [meetId]);

  //api key:AIzaSyBBE6AM3Zl-bnhi1Nc3AcoirKFmtfurydI

  return (
    <div className="grid-cols-3 grid w-[90%]">
      {users.map((user, index) => {
        return (
          <div
            className="p-6 mx-4 my-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 block"
            key={index}
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RegisteredMUs;
