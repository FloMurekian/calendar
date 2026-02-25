import '../App.css'
import old from '../assets/old.png'
import EventList from '../event/EventList'
import Searchfield from '../components/Searchfiled'

import { useEffect, useState } from 'react'

function DefaultPage() {

  //looks for info in storage if there is some
  // filterText is equal to the savedFilter else it is an empty string
const [filterText, setFilterText] = useState(() => {
  const savedFilter = localStorage.getItem('filterTextinStorage');
  return savedFilter ? savedFilter : "";
});

// every time filterText changes the info is saved to webstorage
//with key "filterTextinStorage"

useEffect(() => {
  localStorage.setItem('filterTextinStorage', filterText);
}, [filterText]);



  const sortedEvents = events.toSorted((a, b) => 
        a.date.localeCompare(b.date, "en", { sensitivity: "base" })
      );


// fitler events based on user input

const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(filterText.toLowerCase())
  );


const [events, setEvents] = useState(() => {
  const savedEvents = localStorage.getItem('events');
  return savedEvents ? JSON.parse(savedEvents) : [];
});

useEffect(() => {
  localStorage.setItem('events', JSON.stringify(events));
}, 
[events]);

const handleInputChange = (event) => {
  setFilterText(event.target.value);
};

  return (
   <>
      <img src={old} alt="Old" />

{filteredEvents.length > 0 ? (
<div>
      <Searchfield handleInput={handleInputChange} filter={filterText} />
      <EventList events={filteredEvents} setEvents={setEvents} />
</div>
) : (
    <p>No events found.</p>
  )}
  </>
  );
  }


export default DefaultPage;
