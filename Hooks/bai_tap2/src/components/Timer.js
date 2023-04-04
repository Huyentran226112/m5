import React, { useState, useEffect } from 'react';
function Timer() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const intervalId = setInterval(() => {
         setCountdown(previousCountdown => previousCountdown - 1);
      }, 1000);

      return () =>clearInterval(intervalId);
    } else {
      alert("Time's up");
    }
  }, [countdown]);

  return <div>Count down from : {countdown}</div>;
}


export default Timer;

