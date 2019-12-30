import React from 'react'
import logo from './logo.svg' 

// IF CONTROLLED COMPONENT
// function ImageFrame(props)
// {

// }

class ImageFrame extends React.Component {
    state = {
        picture: logo,
        size:100
    }

    /* Arrow function */
    makeSmaller = () => {
        /* In the arrow function, the "this" will ALWAYS refer to the class */
        this.setState({
            size: this.state.size - 10 // correct way to change variable in the state 
        })
    }

    render() {
        return (
            <div>
                {/* To access props inside uncontrolled component, use "this.props.<propname>"*/}
                <img src={this.props.picture} style={
                    {
                        width: this.state.size + "%"
                    }

                }/>
                <br/>
                <button onClick={this.makeSmaller}>Scale smaller</button>
            </div>
        )
    }
}
export default ImageFrame;