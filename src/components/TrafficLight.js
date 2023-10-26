import React, { Component } from "react";
import './bulb.css';
import classNames from "classnames";

const RED = 1
const GREEN = 2
const YELLOW = 3

class TrafficLight extends Component {
    render() {
        console.log('Rendering...')
        return(
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {active: this.props.currentLight === RED})}></div>
                <div className={classNames('bulb', 'green', {active: this.props.currentLight === GREEN})}></div>
                <div className={classNames('bulb', 'yellow', {active: this.props.currentLight === YELLOW})}></div>
            </div>
        )
    }
}

export default TrafficLight;