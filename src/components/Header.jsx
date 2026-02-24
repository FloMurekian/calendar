import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Event</Link>
      </nav>
    </header>
  )
}
