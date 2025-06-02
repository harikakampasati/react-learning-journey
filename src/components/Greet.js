import React from "react";
const Great = props =>{
    console.log(props)
    return (
        <div>
            <h1>hello {props.name} This is {props.as}</h1>
            {props.children} 
        </div>
    )
}

export default Great