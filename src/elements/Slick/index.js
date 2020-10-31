import React, { Component } from 'react'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gmbr1 from "assets/images/1.png"
import gmbr2 from "assets/images/2.png"
import gmbr3 from "assets/images/3.png"
import gmbr4 from "assets/images/4.png"
import gmbr5 from "assets/images/5.jpg"
import gmbr6 from "assets/images/6.jpg"
import gmbr7 from "assets/images/7.jpg"

export default class Slick extends Component {
    render() {

        const slick = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <section className="container">
                <Slider {...slick}>
                    <img className="img-slider" src={gmbr1} alt="Credit to Joshua Earle on Unsplash" />
                    <img className="img-slider" src={gmbr2} alt="Credit to Alisa Anton on Unsplash" />
                    <img className="img-slider" src={gmbr3} alt="Credit to Igor Ovsyannykov on Unsplash" />
                    <img className="img-slider" src={gmbr4} alt="Credit to Pierre Châtel-Innocenti on Unsplash" />
                    <img className="img-slider" src={gmbr5} alt="Credit to Richard Nolan on Unsplash" />
                    <img className="img-slider" src={gmbr6} alt="Credit to Cristina Gottardi on Unsplash" />
                    <img className="img-slider" src={gmbr7} alt="Credit to Cristina Gottardi on Unsplash" />
                </Slider>
            </section>
        )
    }
}
