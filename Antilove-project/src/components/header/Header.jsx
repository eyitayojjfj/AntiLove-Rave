import './Header.css'
import { IoMenu } from "react-icons/io5"
import { useState } from "react"

const Header = () => {
   const handleGetTickets = () => {
    window.location.href = "https://popouttickets.com/events/antilove"; // replace with your ticket link
  };
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo"> <img src="/images/logo.png" alt="Antilove Rave" /></div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li onClick={handleGetTickets}>Tickets</li>
        <li>Info</li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenu size={24} />
      </div>
    </nav>
  )
}

export default Header
