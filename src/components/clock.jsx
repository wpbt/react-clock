import { useState, useEffect } from 'react';
import '../clock.css';

function Clock(props) {

    const [time, setTime] = useState(get_time());

    function get_time(){
        const date    = new Date();
        return {
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        };
    }

    function clock(){
        const time = get_time();
        setTime(time);
    }

    useEffect(() => {
        setInterval(clock, 1000);
    });

    return (
        <div className="clock">
          <div className="bg">
              <h2 id="h">{time.hour % 12 || 12}</h2>
          </div>
          <h2>:</h2>
          <div className="bg">
              <h2 id="m">{time.minutes}</h2>
          </div>
          <h2>:</h2>
          <div className="bg">
              <h2 id="s">{time.seconds}</h2>
          </div>
          <div className="bg">
              <h2 id="ap">{time.hours > 12 ? 'AM' : 'PM'}</h2>
          </div>
        </div>
    );

}
export default Clock;