import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Works for All </span>
        <span>CLients</span>
        <span>
          We have best deals with patients and <br />
          have best staff which deals
          <br /> in a manner and fast way our best <br />
          teams are working every time for <br />
          for providing facilities
        </span>

        <button className="button S-button">Order Me</button>

        <div className="blur S-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="w-write">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: '0' }}
          viewport={{ margin: '45px' }}
          Transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-seccircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-seccircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
