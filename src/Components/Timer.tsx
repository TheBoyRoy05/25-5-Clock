import { useEffect, useState } from "react";
import "../Styles/Timer.css"

interface TimerProps {
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  breakTime: number;
  setBreak: React.Dispatch<React.SetStateAction<number>>;
  sessionTime: number;
  setSession: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = (props: TimerProps) => {
  const audio = document.getElementById("beep") as HTMLAudioElement;
  const { paused, breakTime, sessionTime } = props;
  const { setPaused, setBreak, setSession } = props;
  const [label, setLabel] = useState("Session");
  const [time, setTime] = useState(25 * 60);

  const displayTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time) % 60;
    if (time >= 0) {
      return (
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      audio.play().catch(console.error);
      setTime((label == "Session" ? breakTime : sessionTime) * 60);
      setLabel(label == "Session" ? "Break" : "Session");
    }
  };

  const startStopTimer = () => {
    setPaused((prev) => !prev);
  };

  const resetTimer = () => {
    setBreak(5);
    setSession(25);
    setTime(25 * 60);
    setLabel("Session");
    audio.pause();
    audio.currentTime = 0;
    if (!paused) startStopTimer();
  };

  useEffect(() => {
    let interval: number | undefined;

    if (!paused) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [paused]);

  useEffect(() => {
    setTime((label == "Session" ? sessionTime : breakTime) * 60);
  }, [sessionTime, breakTime]);

  return (
    <>
      <div className="timer">
        <h3 id="timer-label">{label}</h3>
        <div id="time-left">{displayTime()}</div>
      </div>
      <div className="timer-control">
        <button id="start_stop" onClick={startStopTimer}>
          <i className={"fa fa-" + (paused ? "play" : "pause")} />
        </button>
        <button id="reset" onClick={resetTimer}>
          <i className="fa fa-refresh" />
        </button>
      </div>
    </>
  );
};

export default Timer;
