import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Create() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  } , [events]);
  
  function createHandler(e) {
  e.preventDefault();
  const highestId = events.length > 0 ? Math.max(...events.map(event => event.id)) : -1;
  const newEvent = {
    id: highestId + 1,
    title: title,
    date: date,
    description: description
  };
  setEvents([...events, newEvent]);
  navigate("/");
  
}
  return (
    <>
      <form onSubmit={createHandler}>
        <h2>Create Event</h2>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" name="title" value={title} required onChange={e => setTitle(e.target.value)} />
        </label>
        <label htmlFor="date">
          Date:
          <input type="date" id="date" name="date" value={date} required onChange={e => setDate(e.target.value)} />
        </label>
        <label htmlFor="description">
          Description:
          <textarea id="description" name="description" value={description} required onChange={e => setDescription(e.target.value)}></textarea>
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}

