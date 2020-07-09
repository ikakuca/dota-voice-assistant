import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [timerRuning, toggleTimer] = useState(false);
  const [seconds, setSeconds] = useState(58);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (timerRuning) {
      const timout = setTimeout(() => {
        if (seconds >= 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        } else {
          setSeconds((prev) => prev + 1);
        }
      }, 1000);

      return () => clearTimeout(timout);
    }
  }, [seconds, timerRuning]);

  function startTimer() {
    toggleTimer(true)
  }

  function resetTimer() {
    toggleTimer(false);
    setSeconds(0);
    setMinutes(0);
  }

  function pauseTimer() {
    toggleTimer(false);
  }

  function subSeconds() {}

  function addSeconds() {}

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <br />
      <br />
      <br />

      <input value={minutes} onFocus={pauseTimer} />
      <input value={seconds} onFocus={pauseTimer} />

      <br />
      <br />

      <button type="button" onClick={subSeconds}>
        SUB 1
      </button>

      <button type="button" onClick={startTimer}>
        START
      </button>

      <button type="button" onClick={pauseTimer}>
        PAUSE
      </button>

      <button type="button" onClick={resetTimer}>
        RESET
      </button>

      <button type="button" onClick={addSeconds}>
        ADD 1
      </button>
    </div>
  );
}

export default App;
