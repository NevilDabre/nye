import React from 'react';
import './WaveText.scss';
import { times } from 'lodash';

const WaveText = (props) => {
    return (
        <div className="wave-text-stage">logo
            {
              times(15, i => <div className="wave-text-layer" key={i} data-newline="&#xa;" data-firstline={props.greetings} data-secondline="A Happy New Year!" data-thirdline="2020"></div>)            
            }
        </div>
    )
}

export default WaveText;