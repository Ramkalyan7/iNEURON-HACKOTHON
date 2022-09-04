import React from "react";

const UserHomePage = () => {
    return (
        <div>
            <h1>Hello, User</h1>
            <form className="container w-50">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                        Date: &nbsp;
                    </label>
                    <input type="date" id="date" />
                    <label htmlFor="exampleFormControlSelect2">
                        Start Time: &nbsp;
                        <input type="time" />
                    </label>
                    <label htmlFor="exampleFormControlSelect2">
                        End Time: &nbsp;
                    </label>
                    <input type="time" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Example textarea
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default UserHomePage;
