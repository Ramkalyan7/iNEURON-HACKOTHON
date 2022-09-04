import React from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" to="/">
                    Together
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <button className="nav-item">
                            <Link className="nav-link" to="/registermeet">
                                Join meeting
                            </Link>
                        </button>
                        <button className="nav-item">
                            <Link className="nav-link" to="/createmeeting">
                                Create meeting
                            </Link>
                        </button>
                    </ul>
                </div>
                <div className="d-flex justify-content-around navbar-nav ">
                    <li className="nav-item mx-1">
                        <button type="button" class="btn btn-outline-primary">
                            Sign In
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-secondary mx-3"
                        >
                            Sign Up
                        </button>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navabar;
