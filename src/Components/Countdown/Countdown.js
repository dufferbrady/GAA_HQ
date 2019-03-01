import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import classes from './Countdown.css'

class CountDown extends Component {

    state = {
        deadline: 'Sept, 01, 2019',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount = () => {
        setInterval( () => this.getCountdownTimeHandler(this.state.deadline), 1000 )
    }

    getCountdownTimeHandler = deadline => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            alert("Time has already passed")
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    render() {
        return (
            <Slide left delay={ 1000 }>
                <div className={ classes.Countdown_wrapper }>
                    <div className={ classes.Countdown_top }>
                        The final starts in 
                    </div>
                    <div className={ classes.Countdown_bottom }>
                        <div className={ classes.Countdown_item }>
                            <div className={ classes.Countdown_time }>
                                { this.state.days }
                            </div>
                            <div className={ classes.Countdown_tag }>
                                days
                            </div>
                        </div>
                        <div className={ classes.Countdown_item }>
                            <div className={ classes.Countdown_time }>
                                { this.state.hours }
                            </div>
                            <div className={ classes.Countdown_tag }>
                                hours
                            </div>
                        </div>
                        <div className={ classes.Countdown_item }>
                            <div className={ classes.Countdown_time }>
                                { this.state.minutes }
                            </div>
                            <div className={ classes.Countdown_tag }>
                                mins
                            </div>
                        </div>
                        <div className={ classes.Countdown_item }>
                            <div className={ classes.Countdown_time }>
                               { this.state.seconds }
                            </div>
                            <div className={ classes.Countdown_tag }>
                                seconds
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default CountDown;