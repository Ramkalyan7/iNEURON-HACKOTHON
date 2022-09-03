import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
