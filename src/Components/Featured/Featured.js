import React from 'react';

import classes from './Featured.css'
import Carousel from '../Carousel/Carousel'
import Countdown from '../Countdown/Countdown'

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carousel />

            <div className={ classes.Event_Name }>
                <div className={ classes.Wrapper }>
                    All Ireland Final 2019
                </div>
            </div>

            <Countdown />
            
        </div>
    );
};

export default Featured;