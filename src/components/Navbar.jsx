import { logo } from '../assets';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../styles/Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  console.log(showLinks);

  useEffect(() => {
    if (screen.width >= 672) {
      setShowLinks(false);
    }
  }, [screen.width]);

  return (
    <nav>
      <div className="container">
        <a href="" className="logo">
          <img src={logo} alt="" />
        </a>
        <div className={`nav-links-container ${showLinks ? 'show-links' : ''}`}>
          <ul role="list" className='links'>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <ul className="login">
            <li>
              <a href="#">login</a>
            </li>
            <li className="sign-up">
              <a href="#">Sign up</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="bars"
          onClick={() => setShowLinks((oldState) => !oldState)}
        >
          {showLinks ? <FaTimes /> : <FaBars />}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
