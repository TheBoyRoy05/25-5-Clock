import "../Styles/Control.css"

interface ControlProps {
  paused: boolean;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  name: string;
}

const Control = ({ paused, value, setValue, name }: ControlProps) => {
  const decrement = () =>
    setValue((prev: number) => Math.min(Math.max(prev - 1, 1), 60));
  const increment = () =>
    setValue((prev: number) => Math.min(Math.max(prev + 1, 1), 60));

  return (
    <div className={"control"}>
      <h3
        className="control-label"
        id={`${name.toLowerCase()}-label`}
      >{`${name} Length`}</h3>
      <div className="controller">
        <button
          className="control-btn decrement"
          onClick={decrement}
          id={`${name.toLowerCase()}-decrement`}
          disabled={!paused}
        >
          {"-"}
        </button>
        <input
          type="number"
          className="control-input"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          id={`${name.toLowerCase()}-length`}
          disabled={!paused}
        />
        <button
          className="control-btn increment"
          onClick={increment}
          id={`${name.toLowerCase()}-increment`}
          disabled={!paused}
        >
          {"+"}
        </button>
      </div>
    </div>
  );
};

export default Control;
