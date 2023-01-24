import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "reactdatepicker/dist/reactdatepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 0, 24),
    end: new Date(2023, 0, 24),
  },
  {
    title: "Vacation",
    start: new Date(2023, 0, 7),
    end: new Date(2023, 0, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 0, 20),
    end: new Date(2023, 0, 23),
  },
  
];
function calendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Calendar 📅 </h1>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, margin: "50px" }}
      />
      <div>
        <h2>Add New Event</h2>
        <div className="!w-full rounded-full flex items-center flex-col">
          <input
            type="text"
            placeholder="Add Title"
            style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            className="p-2 my-4 rounded-full w-full"
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
            className="p-2 my-4 rounded-full w-full"
          />
          <DatePicker
            placeholderText="End Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
            className="p-2 my-4 rounded-full w-full"
          />
          <button
            style={{ marginTop: "10px" }}
            onClick={() => handleAddEvent()}
            className="p-2 my-4 border rounded-full w-full"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default calendar;
