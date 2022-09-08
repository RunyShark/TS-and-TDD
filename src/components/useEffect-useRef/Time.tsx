import React, { useEffect, useRef, useState } from 'react';

type TimeArgs = {
  time: number;
  sec?: number;
};

export const Time: React.FC<TimeArgs> = ({ time, sec }: TimeArgs) => {
  const [timer, setTimer] = useState<number>(0);

  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setTimer((v) => v + 1), time);
  }, [time]);

  return (
    <>
      <h4>
        Timer: <small>{timer}</small>
      </h4>
    </>
  );
};
