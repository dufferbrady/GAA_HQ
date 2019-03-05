import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import classes from './Pricing.css'
import Button from '../../Components/UI/Button/Button'

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className={ classes.Pricing_item }>
                    <div className={ classes.Pricing_inner_wrapper }>
                        <div className={ classes.Pricing_title }>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className={ classes.Pricing_description }>
                            {this.state.desc[i]}
                        </div>
                        <div className={ classes.Pricing_buttons }>
                            <Button
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div>
                <div className={ [classes.Center_wrapper, classes.Pricing_section].join(' ') }>
                    <h2>Pricing</h2>

                    <div className={ classes.Pricing_wrapper }>
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;