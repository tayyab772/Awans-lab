import React from 'react'
import '../Navbar.css'
import Toogle from '../Toogle/Toogle'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="n-wrapper">
<div className="n-left">
<div className="n-name">Awan'sLab</div>
<Toogle/>

</div>


<div className="n-right"></div>
<div className="n-list">
    <ul style={{listStyleType:'none'}}>

      <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
        <li>Home</li>
        </Link>
        <Link spy={true} to='Services' smooth={true} >
        <li>Services</li>
        </Link>
        <Link spy={true} to='Experience' smooth={true} >

        <li>Experience</li>
        </Link>
        <Link spy={true} to='Portfolio' smooth={true} >
        <li>Portfolio</li>
        </Link>
        <Link spy={true} to='Testimonials' smooth={true} >
        <li>Testimonials</li>
        </Link>
    </ul>
    
</div>
<button className="button n-button">contact</button>
    </div >
  )
}

export default Navbar
