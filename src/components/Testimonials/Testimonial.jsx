import React from 'react';
import './Testimonial.css';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
const Testimonial = () => {
    const clients = [
        {
            img: profilepic1,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            img: profilepic2,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            img: profilepic3,

            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."

        },
        {
            img: profilepic4,

            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."

        },
    ]
    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Client always get</span>
                <span>Exceptional work</span>
                <span>from me...</span>
                <div className="blur S-blur" style={{ background: "#ABF1FF94" }}></div>
                <div className="blur S-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial" id='Testimonials'>
                                <img src={client.img} alt="" />
                                <span>{client.review} </span>
                            </div>
                        </SwiperSlide>
                    )

                })}

            </Swiper>
        </div>
    );
};

export default Testimonial
