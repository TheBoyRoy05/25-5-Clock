import { useState } from "react";
import "../Styles/App.css";
import Control from "./Control";
import Timer from "./Timer";

const App = () => {
  const [paused, setPaused] = useState(true);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [sessionTime, setSessionTime] = useState<number>(25);

  return (
    <div className="container">
      <h1>25 + 5 Clock</h1>
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
      <Timer
        paused={paused}
        setPaused={setPaused}
        breakTime={breakTime}
        setBreak={setBreakTime}
        sessionTime={sessionTime}
        setSession={setSessionTime}
      />
    </div>
  );
};

export default App;
