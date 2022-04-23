import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from "../../img/sidebar.png"
import Ecommerece from "../../img/ecommerce.png"
import Hoc from "../../img/hoc.png"
import Musicapp from "../../img/musicapp.png"
import {themeContext} from '../../Context'
import { useContext } from "react";


const Portfolio = () => {
    const  theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  
return (
<div className="portfolio" id='Portfolio'  >
<span style={{color: darkMode? "white": ''          }}    >Recent Projects</span>
<span>Portfolio</span>
<Swiper 
spaceBetween={10}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'
> 
    <SwiperSlide>
        <img src={Sidebar} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Ecommerece} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Hoc } alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Musicapp } alt="" />
    </SwiperSlide>



</Swiper>
</div>
  )
}

export default Portfolio
