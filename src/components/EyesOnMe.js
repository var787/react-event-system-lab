import React from "react";

export default class EyesOnMe extends React.Component {
    eventFocus = () => console.log('Good!')
    eventBlur = () => console.log('Hey! Eyes on me!')
    render(){
        return <div>
            <button 
            onFocus={this.eventFocus} onBlur={this.eventBlur}>
            </button>

        </div>
}
}
