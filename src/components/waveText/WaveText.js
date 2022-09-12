import React from 'react';
import './WaveText.scss';
import { times } from 'lodash';

const WaveText = (props) => {
    const [year, setYear] = useState();
    
    useEffect(()=>{
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const month = currentDate.getMonth();
        month>5?setYear(currentYear+1): setYear(currentYear);
    }, []);

    
    return (
        <div className="wave-text-stage">logo
            {
              times(15, i => <div className="wave-text-layer" key={i} data-newline="&#xa;" data-firstline={props.greetings} data-secondline="A Happy New Year!" data-thirdline={year}></div>)            
            }
        </div>
    )
}

export default WaveText;
