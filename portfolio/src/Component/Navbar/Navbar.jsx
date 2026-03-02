import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const [menu, setMenu] = useState('Home')



  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })

  }, []);

  return (
    <div className={`nav-container ${sticky ? 'white-nav' : ''}`}>

      <ul className="nav-holder">
        <li >
          <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            duration={500}
           
          >

             HOME
          </Link>
        </li>
        <li >
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
           
          >

             ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
           
          >

             SKILLS
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            duration={500}
           
          >

            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
           
          >

             CONTACT
          </Link>
        </li>
      </ul>

    </div>
  )
}
