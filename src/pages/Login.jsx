import React from "react";

const Login = () => {
    return (
        <div className="container">
            <h1 className="text-center my-4">Login</h1>
            <form>
                <div class="form-outline mb-4">
                    <input
                        type="email"
                        id="form2Example1"
                        class="form-control"
                    />
                    <label class="form-label" htmlFor="form2Example1">
                        Email address
                    </label>
                </div>

                <div class="form-outline mb-4">
                    <input
                        type="password"
                        id="form2Example2"
                        class="form-control"
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
                                checked
                            />
                            <label
                                class="form-check-label"
                                htmlFor="form2Example31"
                            >
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                    </div>

                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        class="btn btn-primary btn-block mb-4 w-75"
                    >
                        Sign in
                    </button>
                </div>

                <div class="text-center">
                    <p>
                        Not a member? <a href="#!">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
