import { useEffect, useState } from "react";

interface TimerProps {
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  breakTime: number;
  setBreak: React.Dispatch<React.SetStateAction<number>>;
  sessionTime: number;
  setSession: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = (props: TimerProps) => {
  const { paused, breakTime, sessionTime } = props;
  const { setPaused, setBreak, setSession } = props;
  const [label, setLabel] = useState("Session");
  const [timer, setTimer] = useState("25:00");

  const getDeadLine = () => {
    const deadLine = new Date();
    deadLine.setMinutes(
      deadLine.getMinutes() + (label == "Session" ? sessionTime : breakTime)
    );
    return deadLine;
  };

  const timeRemaining = (deadline: Date) => {
    const total = Date.parse(deadline.toUTCString()) - Date.now();
    const minutes = Math.floor(total / 1000 / 60) % 60;
    const seconds = Math.floor(total / 1000) % 60;
    return { total, minutes, seconds };
  };

  useEffect(() => {
    console.log(timeRemaining(getDeadLine()));
  }, []);

  const startTimer = (deadLine: Date) => {
    const { total, minutes, seconds } = timeRemaining(deadLine);
    if (total > 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  return (
    <>
      <div className="timer">
        <h3 id="timer-label">{label}</h3>
        <div id="time-left">{timer}</div>
      </div>
      <div className="timer-control">
        <button id="start_stop">
          <i className={"fa fa-" + (paused ? "play" : "pause")} />
        </button>
        <button id="reset">
          <i className="fa fa-refresh" />
        </button>
      </div>
    </>
  );
};

export default Timer;
