import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Mainpage = () => {
    return (
        <>
            <section className="section-one">
                <div className="container">
                    <h1 className="text-8xl">TOGETHER</h1>
                    <p>Connect with ANYONE, ANYTIME, ANYWHERE</p>
                    <Link
                        to="/"
                        className="home-button rounded-pill btn-primary btn-lg"
                    >
                        Know More
                    </Link>
                </div>
            </section>
            <section className="section-two">
                <div className="container-two">
                    <div className="container-two-content content">
                        <h1 className="text-capitalize">Introduction</h1>
                        <p>
                            We at <b>Together</b> makes the scheduling of your
                            online meetings simple and convenient. We
                            automatically update the meeting in both the user
                            and admin Google Calendar so that no one ever misses
                            any meeting.
                        </p>
                        <p>
                            Experience this technlogy today and save your time.
                            Last but not the least point we're providing all of
                            this at ZERO Cost!!!
                        </p>
                    </div>
                    <div className="container-two-content content-image">
                        <img
                            src="https://st4.depositphotos.com/3474805/38777/v/1600/depositphotos_387775772-stock-illustration-team-having-briefing-discussing-data.jpg"
                            className="py-5 img"
                        />
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-center gap-3 my-3">
                <Link
                    to="/login"
                    type="button"
                    class="btn btn-lg btn-outline-primary"
                >
                    Log in
                </Link>
                <Link
                    to="/register"
                    type="button"
                    class="btn btn-lg btn-outline-secondary"
                >
                    Sign up
                </Link>
                <Link
                    to="/registermeet/:meetId"
                    type="button"
                    class="btn btn-lg btn-outline-success"
                >
                    Registered Users
                </Link>
                <Link
                    to="/alladmins"
                    type="button"
                    class="btn btn-lg btn-outline-danger"
                >
                    View All Meetings
                </Link>
                <Link
                    to="/createmeeting"
                    type="button"
                    class="btn btn-lg btn-outline-warning"
                >
                    Create A New Meeting
                </Link>
            </div>

            <footer className="mu-3 bg-secondary">
                <span className="text-3xl">
                    {" "}
                    Team : <b>Dandelions</b>
                </span>
            </footer>
        </>
    );
};

export default Mainpage;
