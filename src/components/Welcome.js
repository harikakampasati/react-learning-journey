import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} this was {this.props.as}</h1>
    }

}

export default Welcome