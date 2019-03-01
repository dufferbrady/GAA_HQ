import React, { Component } from 'react';

import classes from './Header.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Sidebar from '../Sidebar/Sidebar'

class Header extends Component {
    state = {
        showSidebar: false,
        showHeader: true
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.showHeaderHandler )
    }

    showHeaderHandler = () => {
        if(window.scrollY > 0) {
            this.setState({
                showHeader: false
            })
        } else {
            this.setState({
                showHeader: true
            })
        }
    }

    toggleDrawerHandler = val => {
        this.setState({
          showSidebar: val,
        });
    };

    render() {
        return (
            <AppBar 
            className={ classes.Header }
            style={{
                backgroundColor: this.state.showHeader ? '#004A67' : 'transparent',
                boxShadow: 'none'
            }}>

                <Toolbar className={ classes.Toolbar }>

                    <div className={ classes.Header_logo_GAAHQ }>GAA HQ</div>

                    <IconButton>

                        <MenuIcon 
                        className={ classes.IconBtn }
                        onClick={ () => this.toggleDrawerHandler(true) }/>

                    </IconButton>

                    <Sidebar 
                    open={ this.state.showSidebar }
                    close={ this.toggleDrawerHandler }/>
                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;
