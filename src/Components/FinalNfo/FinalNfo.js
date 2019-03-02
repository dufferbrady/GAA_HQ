import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import classes from './FinalNfo.css'

const FinalNfo = () => {
    return (
        <div className={classes.bck_gaa_dark}>
            <div className={classes.center_wrapper}>
                <div className={classes.gaa_wrapper}>

                    <Zoom duration={500}>
                        <div className={classes.gaa_item}>
                            <div className={classes.gaa_outer}>
                                <div className={classes.gaa_inner}>
                                    <div className={[classes.gaa_icon_square, classes.bck_gaa_med].join(' ')}></div>
                                    <div 
                                        className={[classes.gaa_icon, classes.bck_gaa_light].join(' ')}
                                        style={{
                                            background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className={classes.gaa_title}>
                                        Event Date & Time
                                    </div>
                                    <div className={classes.gaa_desc}>
                                        1 Sept 2019 @10.00 pm
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>
                    
                    <Zoom duration={500} delay={500}>
                        <div className={classes.gaa_item}>
                            <div className={classes.gaa_outer}>
                                <div className={classes.gaa_inner}>
                                    <div className={[classes.gaa_icon_square, classes.bck_gaa_med].join(' ')}></div>
                                    <div 
                                        className={[classes.gaa_icon, classes.bck_gaa_light].join(' ')}
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className={classes.gaa_title}>
                                        Event Location
                                    </div>
                                    <div className={classes.gaa_desc}>
                                        Croke Park, <br/> Dublin
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        </div>
    );
};

export default FinalNfo;