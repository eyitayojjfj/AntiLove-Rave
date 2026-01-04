import './Header.css'
import { IoMenu } from "react-icons/io5"
import { useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">ANTILOVE RAVE</div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Tickets</li>
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
