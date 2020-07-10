import React, { useState, useEffect, useRef } from "react";

import bountyAudio from "./audio/bounty.ogg";
import runesAudio from "./audio/runes.ogg";
import stackOrPullAudio from "./audio/stackOrPull.ogg";
// import neutrailItemsAudio from "./audio/neutralItems.ogg";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [timerRuning, toggleTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const bountiesRef = useRef(null);
  const runesRef = useRef(null);
  const stackPullRef = useRef(null);
  // const neutralItemsRef = useRef(null);

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

  useEffect(() => {
    if (seconds === 38) {
      stackPullRef.current.play();
    }

    if (seconds === 45 && minutes % 5 === 4) {
      bountiesRef.current.play();
    }

    if(seconds === 48 && minutes % 2 === 1) {
      runesRef.current.play();
    }
  }, [seconds, minutes]);

  function startTimer() {
    toggleTimer(true);
  }

  function resetTimer() {
    toggleTimer(false);
    setSeconds(0);
    setMinutes(0);
  }

  function pauseTimer() {
    toggleTimer(false);
  }

  // function subSeconds() {}

  // function addSeconds() {}

  function updateMinutes(e) {
    e.persist();
    setMinutes(parseInt(e.target.value, 10));
  }

  function updateSeconds(e) {
    e.persist();
    setSeconds(parseInt(e.target.value, 10));
  }

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

      <div style={{ width: "100px", margin: "0 auto", display: "flex" }}>
        <input
          type="number"
          name="minutes"
          value={minutes}
          onFocus={pauseTimer}
          onChange={updateMinutes}
          style={{ width: "50px", fontSize: "20px" }}
        />
        <input
          type="number"
          name="seconds"
          value={seconds}
          onFocus={pauseTimer}
          onChange={updateSeconds}
          style={{ width: "50px", fontSize: "20px" }}
        />
      </div>

      <br />

      {/* <button type="button" onClick={subSeconds}>
        -1 SEC
      </button> */}

      <button type="button" onClick={startTimer}>
        START
      </button>

      <button type="button" onClick={pauseTimer}>
        PAUSE
      </button>

      <button type="button" onClick={resetTimer}>
        RESET
      </button>

      {/* <button type="button" onClick={addSeconds}>
        +1 SEC
      </button> */}

      <br />
      <br />
      <br />

      <p>BOUNTIES</p>
      <audio controls ref={bountiesRef} style={{ marginBottom: "30px" }}>
        <source src={bountyAudio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <p>RUNES</p>
      <audio controls ref={runesRef} style={{ marginBottom: "30px" }}>
        <source src={runesAudio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <p>STACK/PULL</p>
      <audio controls ref={stackPullRef} style={{ marginBottom: "30px" }}>
        <source src={stackOrPullAudio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* <p>NETUTRAL ITEMS</p>
      <audio controls ref={neutralItemsRef} style={{ marginBottom: "30px" }}>
        <source src={neutrailItemsAudio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
}

export default App;
