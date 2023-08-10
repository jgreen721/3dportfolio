import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-column">
    {/* jgdev721 logo */}
<h1 className="nav-logo-h1">
    <span className="nav-logo-letter">J</span>
    <span className="nav-logo-letter">G</span>
    <span className="nav-logo-letter">D</span>
    <span className="nav-logo-letter">E</span>
    <span className="nav-logo-letter">V</span>
</h1>
        </div>
        <div className="nav-column">
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#about" className="nav-link">
                        <h4>About </h4>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#samples" className="nav-link">
                        <h4>Samples</h4>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className="nav-link">
                        <h4>Skills</h4>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        <h4>Contact</h4>
                    </a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar