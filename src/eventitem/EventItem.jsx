export default function EventItem({ event }) {
 
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
    <h3>{event.date === today ? "Today: " : event.date > today ? "Upcoming: " : "Past: "}
      {event.title}</h3>
    <p>{event.date}</p>
    <p>{event.description}</p>
    </>
  );
}
