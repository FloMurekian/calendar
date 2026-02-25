import EventItem from "../eventitem/EventItem";


export default function EventList({ events, setEvents }) {

function deleteHandler(id) {
  const isConfirmed = window.confirm("Are you sure you want to delete this event?");
  if (isConfirmed) {
   setEvents (events.filter(event => event.id !== id));
}
}
  return (
    <div>
     {events.map(event => (
       <EventItem 
       key={event.id} 
       event={event} 
       deleteHandler={deleteHandler} />
      )) }
    </div>
  );

}