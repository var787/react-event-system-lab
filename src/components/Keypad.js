import React from "react";

export default class Keypad extends React.Component {
    
    eventPassword = () => console.log('Entering password...')
    
    render(){
        return <div><input onKeyUp={this.eventPassword} type="password"/>
        </div>
    }
}