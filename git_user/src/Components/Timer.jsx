const { useState, useEffect, useRef } = require("react");

function Timer() {
  const [time, setTime] = useState(null);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);
  // useRef

  // isTimerRunning?
  // regular interval we need to update it
  // we need to pause it
  // we need to stop it
  // reset

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
    }
    // cleanups
    // memory leakage
    // garbage collection
    // cleanup will only get called before each cycle of useEffect
    // return () => {
    //   clearInterval(timerRef.current);
    // };
  }, [time]);

  useEffect(() => {
    // cleanup will only get called before unmounting
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleUpdate = (time) => {
    setTime(time);
    handleStart();
  };

  const handleStart = () => {
    if (timerRef.current !== null) return;
    if (time === 0) return;
    timerRef.current = setInterval(() => {
      console.log(`setInterval`);
      setTime((prev) => prev - 1);
    }, 1000);
    setTimerRunning(true);
    // we can do a better way, we will come back to it
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div>
      {time === null ? (
        // USER INPUT
        <TimerInput handleUpdate={handleUpdate} />
      ) : (
        <>
          <div> TIMER : {time} </div>
          {isTimerRunning ? (
            <button onClick={handleStop}>PAUSE</button>
          ) : (
            <button onClick={handleStart}>START</button>
          )}
          <button onClick={handleReset}>RESET</button>
        </>
      )}
    </div>
  );
}
/**
 *
 * TimerInput you can define the time for runnig
 */
const TimerInput = ({ handleUpdate }) => {
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (value) => {
    console.log(`oops`, value);
    if (Number.isNaN(value)) {
      alert("please input number");
      return;
    }
    setTime(Number(value));
  };
  console.log(time);
  return (
    <div>
      <input value={time} onChange={(e) => handleTimeUpdate(e.target.value)} />
      <button onClick={() => handleUpdate(time)}>START TIMER </button>
    </div>
  );
};

export default Timer;
