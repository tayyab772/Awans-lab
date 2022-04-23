import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'
const Services = () => {
  const transition = { duration: 1, type: 'spring' }


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left div */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          We have best deals with patients and have best staff
          <br />
          which deals in a manner and fast way
        </span>

        <a href={Resume} download>
          <button className="button S-button">Download report</button>
        </a>

        <div className="blur S-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right div */}
      <div className="Cards">
        <motion.div
          initial={{ left: '14rem' }}
          whileInView={{ left: '25rem' }}
          transition={transition}

          style={{ left: "14rem " }}>
          <Card
            emoji={HeartEmoji}
            heading={"Facilities"}
            detail={"Test, Reports,Print Report,Copies"}
          />
        </motion.div>

        <div style={{ top: "12rem", left: "-4rem " }}>
          <Card
            emoji={Glasses}
            heading={"Facilities"}
            detail={"Test, Reports,Print Report,Copies"}
          />
        </div>

        <motion.div

          initial={{ left: '14rem' }}
          whileInView={{ left: '17rem' }}
          transition={transition}


          style={{ top: "19rem", left: "12rem " }}>
          <Card
            emoji={Humble}
            heading={"Facilities"}
            detail={"Test, Reports,Print Report,Copies"}
          />
        </motion.div>
        <div className="blur S-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  );
};

export default Services;
