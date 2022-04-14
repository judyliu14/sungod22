import React from 'react'

const CountDownTimer = ({daysHoursMinSecs}) => {
   
    const { days = 0, hours = 0, minutes = 0, seconds = 60 } = daysHoursMinSecs;
    const [[d, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);
    
    const tick = () => {
   
        if (d === 0, hrs === 0 && mins === 0 && secs === 0) 
            setTime([0, 0, 0, 0])
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([d - 1, 23, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([d, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([d, hrs, mins - 1, 59]);
        } else {
            setTime([d, hrs, mins, secs - 1]);
        }
    };
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${d.toString().padStart(2, '0')} days
            ${hrs.toString().padStart(2, '0')} hrs
            ${mins.toString().padStart(2, '0')} mins
            ${secs.toString().padStart(2, '0')} secs`}</p> 
        </div>
    );
}

export default CountDownTimer;