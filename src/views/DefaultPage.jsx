import '../App.css'
import old from '../assets/old.png'
import EventList from '../event/EventList'
import Searchfield from '../components/Searchfiled'
import Footer from '../components/Footer'
import Header from '../components/Header'
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

const events = [
        {
          id: 1,
          title: 'Meeting',
          date: '2026-02-22',
          description: "About party in Aarhus",
        },
      
        {
          id: 2,
          title: 'Workshop',
          date: '2026-01-26',
          description: "Designing a new app",
        },

        {
          id: 3,
          title: 'This',
          date: '2026-01-30',
          description: "Birthday",
        },

        {
          id: 4,
          title: 'Workshop',
          date: '2026-05-14',
          description: "Else",
        },

         {
          id: 5,
          title: 'Workshop',
          date: '2026-02-18',
          description: "Designing a new app",
        }

      ];

  const sortedEvents = events.toSorted((a, b) => 
        a.date.localeCompare(b.date, "en", { sensitivity: "base" })
      );


// fitler events based on user input

const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(filterText.toLowerCase())
  );

const filteredEventsdesc = sortedEvents.filter(event =>
    event.description.toLowerCase().includes(filterText.toLowerCase())
  );

  function handleFilterChange(event) {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <img src={old} alt="Old" />
      <Header />
      <Searchfield handleinput={handleFilterChange} filter={filterText} />
      <EventList events={filteredEvents} />
      <Footer />
    </div>
  )
}

export default DefaultPage;
