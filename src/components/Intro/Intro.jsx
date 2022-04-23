import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import { useContext } from "react";
import {motion } from 'framer-motion'

const Intro = () => {
const transition ={ duration: 2,type: 'spring'}

  const  theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="Intro">
        <div className="I-left">
            <div className="I-name">
                <span style={{color:darkMode? 'white':'' }}  >Hy! I Am </span>
                <span>M-Aurangzaib</span>
                <span>I am a professional laboratory 
                    technologist providing the best
                     facilities to our costumers<br/> and 
                     best discounts with lot of our team
                      effort .Thank you!</span>
            </div>
            <button className="button I-button"> test</button>
            <div className="I-icons">
                <a href=''>
                <img src={Github} alt="" />
                </a>
                <a href=''>
                <img src={Linkedin} alt="" />
                </a>
                <a href=''>
                <img src={Instagram} alt="" />
                </a>
                
            </div>
        </div>

        <div className="I-right"> 
        <img src={Vector1 } alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{ left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt="" />
        <motion.div
         initial={{top:'-4%',left:'74%'}}
         whileInView={{ left:'68%'}}
         transition={transition}
        
        
        style={{top: '-4%', left:'68%' }}
      className='floating-div'
        
        >
          <FloatingDiv image={crown}  txt1='Blood test' txt2='Sugar test'   /></motion.div>
       
       <motion.div
        initial={{top:'18rem',left:'9rem'}}
        whileInView={{ left:'0rem'}}
        transition={transition}
       
       style={{top: '18rem', left:'0rem' }}
       className='floating-div'>
       <FloatingDiv image={thumbup}  txt1='Best report' txt2='Best results'   />
       </motion.div>
       {/* blur divs */}
       <div className='blur' style={{ background:"rgb(238 210 255)"            }}   ></div>
       <div className='blur' style={{ 
           background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'}}   ></div>
      
        </div>
    </div>
  )
}

export default Intro
