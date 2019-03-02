import React from 'react';
import Fade from 'react-reveal/Fade'

import classes from './Description.css'

const Description = () => {
    return (
        <Fade>
            <div className={ classes.Center_Wrapper }>
                <h2>Highlights</h2>
                <div className={classes.Highlight_Description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente inventore consequuntur amet exercitationem expedita facilis fugiat enim? Incidunt voluptatem harum officia nihil tempore soluta sit doloribus perferendis numquam voluptatibus.
                </div>
            </div>
        </Fade>
    );
};

export default Description;