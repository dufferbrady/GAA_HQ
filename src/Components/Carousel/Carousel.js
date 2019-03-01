import React from 'react';
import Slider from 'react-slick'

import classes from './Carousel.css';
import Slide1 from '../../resources/images/slide_one.jpg';
import Slide2 from '../../resources/images/slide_two.jpg';
import Slide3 from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    let slideImages = [Slide1, Slide2, Slide3];
    
    slideImages = slideImages.map((slide, index) => (
        <div key={ index }>
            <div
                className={classes.Carousel_Image}
                style={{
                    background: `url(${slide})`,
                    height: `${window.innerHeight}px`
                }}></div>
        </div>
    ))
    return (
        <div
            className={classes.Carousel_Wrapper}
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}>

            <Slider {...settings}>
                { slideImages }
            </Slider>

        </div>
    );
};

export default Carousel;