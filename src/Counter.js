import React from 'react'
// Uncontrolled component
class Counter extends React.Component {
   
    /* state variable always be named 'state' */
    state = {
        count: 0
    }

    // arrow function
    increase = () => {
        // change the state using the special function setState
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                Value: {this.state.count}
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default Counter;