import React from 'react';

const Word = props => { 
    
    return(
        <div className="mt-5">
            <p>The word is: {props.word}</p>
        </div>
    );
}

export default Word;