import React from 'react';
import Description from './Description/Description';
import Discount from './Discount/Discount'

import classes from './Highlights.css'

const Highlights = () => {
    return (
        <div className={ classes.Highlight_Wrapper }>
            <Description />
            <Discount />
        </div>
    );
};

export default Highlights;