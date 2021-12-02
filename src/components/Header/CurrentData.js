import React from 'react';
//  class component works almost the same thing as functional components - local state
class Clock extends React.Component {
    // LOCAL state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //  START of the lifcycle 
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // END of the lifcycle 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    // REPLAY!
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p> {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;