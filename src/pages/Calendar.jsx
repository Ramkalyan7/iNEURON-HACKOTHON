import React from "react";

const Calendar = () => {
    return (
        <div className="container">
            <iframe
                src="https://calendar.google.com/calendar/embed?src=rk212300%40gmail.com&ctz=Asia%2FKolkata"
                style={{ border: 0, width: 800, height: 600 }}
                frameBorder="2"
                scrolling="no"
            ></iframe>
        </div>
    );
};

export default Calendar;
