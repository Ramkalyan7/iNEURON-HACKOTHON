import React, { useState } from "react";

import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:5000/register", formData);
    console.log(data);
    if (data) {
      alert("login successfull");
    }
  };

  return (
    <div className="container w-25">
      <h1 className="text-center my-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <input
            type="text"
            required
            id="form2Example1"
            class="form-control"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="form2Example1">
            User Name
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            required
            id="form2Example2"
            class="form-control"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label class="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          =[-={" "}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary btn-block mb-4 w-75">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
