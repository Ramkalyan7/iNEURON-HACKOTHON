import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllAdmins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const getAdmins = async () => {
            const { data } = await axios.get("http://localhost:5000/allusers");
            console.log(data);
            setAdmins(data);
        };
        getAdmins();
    }, []);

    return (
        <div className="grid-cols-3 grid w-[90%]">
            {admins.map(({ username, _id }) => {
                return (
                    <Link
                        to={`/admin/${_id}`}
                        className="p-6 mx-4 my-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 block"
                        key={_id}
                    >
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {username}
                            </h5>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default AllAdmins;
