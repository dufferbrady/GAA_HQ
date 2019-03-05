import React from 'react';
import Button from '@material-ui/core/Button'

import TicketIcon from '../../../resources/images/icons/ticket.png';
import classes from './Button.css'

const CustomButton = props => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <img 
                src={TicketIcon}  
                className={ classes.IconImage }
                alt="icon_button"
            />  
            {props.text}
        </Button>
    );
};

export default CustomButton;