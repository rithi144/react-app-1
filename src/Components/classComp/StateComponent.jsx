import React from "react"
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "RITHIKA",
            course : "MERN"
        }
    }
    changeState = (params) => {
        console.log("RITHI") //usState should be used
        
    }
    render(){
        return (
            <div>
                <h1>
                    This is State Component.
                </h1>
                <h2>
                    Hello, {this.state.name}<br></br> This is {this.state.course} class
                </h2>
                <h3>
                    I am changing the state of the name {this.state.name} to {this.changeState}
                </h3>
                <button onMouseOver={this.changeState}>Click me to change the state</button>
            </div>
        )
    }
}

export default StateComponent;