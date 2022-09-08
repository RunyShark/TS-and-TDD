import React, { useState } from 'react';
import { Time } from './';

export const TimerFather: React.FC = () => {
  const [sects, setSects] = useState<number>(1000);
  console.log(sects);

  return (
    <>
      <span>millisecond</span>

      <br />

      <button onClick={() => setSects(100)}>1000</button>
      <button onClick={() => setSects(2000)}>2000</button>

      <Time time={sects} />
    </>
  );
};
