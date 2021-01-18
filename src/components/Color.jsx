import React from 'react';

const Color = props => {

    return(
        <div className="mt-5">
            <p style={ {color: props.fontColor, backgroundColor: props.backgColor} }>The word is: {props.word}</p>
        </div>
    );
}

export default Color;