import React, { useState } from "react";
import axios from "axios";
import InputEl from "../components/Input/InputEl";
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminId: JSON.parse(localStorage.getItem("userId")),
    title: "",
    message: "",
    date: "",
    startTime: "",
    endTime: "",
    username: "",
  });
  //   const itemStr = localStorage.getItem(key);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:5000/createmeet", formData);
    console.log(data);
    if (data) {
      alert("created succesfully");
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-10">Hello, User</h1>
      <form className="container w-50" onSubmit={handleSubmit}>
        <InputEl
          placeholder="title"
          type="text"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />

        <InputEl
          placeholder="message"
          type="text"
          value={formData.message}
          name="message"
          onChange={handleChange}
        />

        <InputEl
          palceholder="Date"
          type="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <InputEl
          palceholder="Start time"
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
        <InputEl
          palceholder="end time"
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
        />
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 w-75 bg-blue-900"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserHomePage;
