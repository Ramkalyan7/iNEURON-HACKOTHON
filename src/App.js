import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateMeet from "./pages/CreateMeet";
import RegisterMeet from "./pages/RegisterMeet";
import YMeetings from "./pages/YMeetings";
import OMeetings from "./pages/OMeetings";
import AllAdmins from "./pages/AllAdmins";
import RegisteredMUs from "./components/YMeetings/RegisteredMUs";
import Navabar from "./pages/Navbar";
import Mainpage from "./pages/MainPage/Mainpage";

function App() {
    return (
        <>
            {/* <Navabar /> */}
            <Mainpage />

            {/* <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/meetusers/:meetId" element={<RegisteredMUs />} />
                <Route path="/seeyourmeetings" element={<YMeetings />} />
                <Route path="/seeothersmeetings" element={<AllAdmins />} />
                <Route path="/admin/:adminId" element={<OMeetings />} />
                <Route path="/alladmins" element={<AllAdmins />} />
                <Route path="/createmeeting" element={<CreateMeet />} />
                <Route path="/registermeet/:meetId" element={<RegisterMeet />} />
            </Routes> */}
        </>
    );
}

export default App;
