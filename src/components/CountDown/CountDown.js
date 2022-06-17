import {useState, useEffect} from 'react';
import './CountDownStyle.css';
import {getRemainingTimeUntilMsTimestamp} from '../../utils/CountDownUtil';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Countdown = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <>
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
        </div>
        <div  className="countdown-timer-label mt-1">         
            <span>Gün</span>
            <span>Saat</span>
            <span>Dəq</span>
            <span>San</span>
        </div>
        </>
    );
}

export default Countdown;