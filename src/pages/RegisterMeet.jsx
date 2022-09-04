import { useState } from "react";
import axios from "axios";
import InputEl from "../components/Input/InputEl";
import { useNavigate, useParams } from "react-router-dom";

const RegisterMeet = () => {
  const { meetId } = useParams();
  const [formData, setFormData] = useState({
    meetId: meetId,
    username: JSON.parse(localStorage.getItem("username")),
    name: "",
    userId: JSON.parse(localStorage.getItem("userId")),
    email: "",
    notes: "",
  });

  var CLIENT_ID =
    "124696705822-jimuh3dnf0uodm4iofvnce3cup19pdqp.apps.googleusercontent.com";
  var API_KEY = "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";
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  const DISCOVERY_DOCS =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const data = await axios.post(
        "http://localhost:5000/registermeet",
        formData
      );
      console.log(data);

      setFormData({
        meetId: meetId,
        username: JSON.parse(localStorage.getItem("username")),
        name: "",
        userId: JSON.parse(localStorage.getItem("userId")),
        email: "",
        notes: "",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //   const itemStr = localStorage.getItem(key);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));
      /* global gapi */

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: "Awesome Event!",
            location: "800 Howard St., San Francisco, CA 94103",
            description: "Really great refreshments",
            start: {
              dateTime: "2020-06-28T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2020-06-28T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });

          /*
            Uncomment the following block to get events
        */

          //get events
          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: "startTime",
            })
            .then((response) => {
              const events = response.result.items;
              console.log("EVENTS: ", events);
            });
        });
    });
  };
  return (
    <>
      <div className="container w-50">
        <h1 className="text-4xl font-bold my-4 text-center">
          Register for a Meet
        </h1>
      </div>
      <form className="container w-25" onSubmit={handleSubmit}>
        <InputEl
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputEl
          placeholder="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputEl
          placeholder="Notes"
          type="text"
          onChange={handleChange}
          name="notes"
          value={formData.notes}
        />
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 w-75 bg-blue-900"
            onClick={handleClick}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterMeet;
