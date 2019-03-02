import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import classes from './Discount.css';

class Discount extends Component {
    state = {
        DiscountStart: 0,
        DiscountEnd: 30
    }

    DiscountPercentageHandler = () => {
        if(this.state.DiscountStart < this.state.DiscountEnd) {
            this.setState({
                DiscountStart: this.state.DiscountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setInterval(() => {
            this.DiscountPercentageHandler()
        }, 50)
    }

    render() {
        return (
            <div className={classes.Center_Wrapper}>
                <div className={classes.Discount_Wrapper}>

                    <Fade onReveal={() => this.DiscountPercentageHandler() } >
                        <div className={ classes.Discount_Percentage }>
                            <span>{ this.state.DiscountStart }%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide>
                        <div className={ classes.Discount_Description }>
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            {/* <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            /> */}

                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;