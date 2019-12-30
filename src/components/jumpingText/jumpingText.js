import React from 'react';
import './jumpingText.js';

const JumpingText = (props) => {
    const letters = props.text.split('');
    const letterItems = letters.map(t=>{
    return <span class="wish-letter">{t}</span>
    })
    return (
        <>
            {letterItems}
        </>
    )
}

export default JumpingText
