import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
   <div className="footer">
<img src={Wave} alt=""  style={{width:'100%'}}/>
<div className="f-content">
    <span >shahzaibali7513@gmail.com</span>
    <div className="f-icons">
<Insta color='red' size='3rem'     />
<Facebook color='blue' size='3rem'/>
<Twitter color='skyblue' size='3rem'/>
    </div>
</div>

   </div>
  )
}

export default Footer
