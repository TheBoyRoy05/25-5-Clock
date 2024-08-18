import { useState } from "react";
import Control from "./Control";
import Timer from "./Timer";
import audio from "../assets/Sounds_Of_Hell.mp3";
import "../Styles/App.css";

const App = () => {
  const [paused, setPaused] = useState(true);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [sessionTime, setSessionTime] = useState<number>(25);

  return (
    <div className="container">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="controls">
        <Control
          paused={paused}
          value={breakTime}
          setValue={setBreakTime}
          name="Break"
        />
        <Control
          paused={paused}
          value={sessionTime}
          setValue={setSessionTime}
          name="Session"
        />
      </div>
      <Timer
        paused={paused}
        setPaused={setPaused}
        breakTime={breakTime}
        setBreak={setBreakTime}
        sessionTime={sessionTime}
        setSession={setSessionTime}
      />
      <audio src={audio} id="beep" />
      <h4 className="author">By Issac Roy</h4>
    </div>
  );
};

export default App;
