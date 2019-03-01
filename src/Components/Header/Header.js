import React, { Component } from 'react';

import classes from './Header.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <AppBar className={ classes.AppBar }>

                <Toolbar className={ classes.Header }>

                    <div className={ classes.Header_logo_GAAHQ }>GAA HQ</div>

                    <IconButton>

                        <MenuIcon className={ classes.IconBtn }/>

                    </IconButton>

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;
