import React, { useState } from 'react';
import { useInterval } from './../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';
interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTimer={mainTime} />
      <Button
        text="Start"
        className="start"
        onClick={() => console.log('Olá')}
      ></Button>
    </div>
  );
}
