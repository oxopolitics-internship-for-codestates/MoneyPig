import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

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
  useEffect(() => {
    d3.select('.data')
      .attr('width', '100%')
      .attr('height', 30)
      .attr('fill', 'green')
      .transition()
      .duration(seconds === 0 ? 9999999 : seconds * 1000)
      .ease(d3.easeLinear)
      .attr('width', '1%');
  }, []);

  return (
    <div className="relative">
      <svg className="svg" height="40px" width="100%">
        <rect rx="15" width="100%" height="30" y="0" fill="#E9E7E7"></rect>
        <rect rx="15" className="data"></rect>
      </svg>
      <h2>{seconds}</h2>
    </div>
  );
};

export default Timer;
