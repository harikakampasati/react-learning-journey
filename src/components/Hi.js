import React from "react";
const Hi = () => {
    // return(
    //     <div>
    //         <h1>i love you </h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        null,
        React.createElement('h1', null, 'i love u'))
}
export default Hi