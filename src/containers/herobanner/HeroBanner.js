import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import slide1 from "../../assets/images/banner1.jpeg"
// import slide2 from "../../assets/images/banner2.jpeg"
import slide3 from "../../assets/images/banner4.png"
export default function HeroBanner() {

    return (
        <div style={{position: "relative", top: "64px"}}>
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={false} useKeyboardArrows={true} swipeable={true} >
                <div>
                    <img src={slide3} alt="slide1" />
                </div>
                <div>
                    <img src={slide3} alt="slide2" />
                </div>
                <div>
                    {/* <img src={slide3} alt="slide4" /> */}
                </div>
            </Carousel>
        </div>
    )
} 