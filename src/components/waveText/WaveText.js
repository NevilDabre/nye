import React from 'react';
import './WaveText.scss';
import { times } from 'lodash';

const WaveText = (props) => {
    return (
        <div class="wave-text-stage">
            {
              times(15, i => <div class="wave-text-layer" data-newline="&#xa;" data-firstline={props.greetings} data-secondline="Happy New Year!" data-thirdline="2020"></div>)            
            }
        </div>
    )
}

export default WaveText;