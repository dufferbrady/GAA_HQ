import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Sidebar = props => {
    return (
        <Drawer
        anchor="right"
        open={ props.open }
        onClick={ () => props.close(false) }>

            <List>
                <ListItem>
                    Homepage
                </ListItem>

                <ListItem>
                    All Ireland Info
                </ListItem>

                <ListItem>
                    Highlights
                </ListItem>

                <ListItem>
                    Pricing
                </ListItem>

                <ListItem>
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default Sidebar;