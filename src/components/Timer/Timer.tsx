import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <div className="relative">
      <div className="bg-grey w-full h-8 rounded-full"></div>
      <div
        className={`animation_linear bg-pink w-full h-8 rounded-full absolute top-0 `}
      ></div>
      <h2>{seconds}</h2>
    </div>
  );
};

export default Timer;
