import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("http://localhost:3000/login", formData);
        console.log(data);
        if (data) {
            localStorage.setItem(
                "username",
                JSON.stringify(data.data.username)
            );
            localStorage.setItem("userId", JSON.stringify(data.data.userId));

            navigate("/");
        }
    };

    return (
        <div className="container w-25">
            <h1 className="text-center my-4">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        required
                        id="form2Example1"
                        className="form-control"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2Example1">
                        User Name
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"
                        required
                        id="form2Example2"
                        className="form-control"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                    </label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example31"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="form2Example31"
                            >
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4 w-75 bg-blue-900"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
