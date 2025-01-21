import React, { useState, useEffect } from "react";

export function StatePractice() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState();

  useEffect(() => {
    console.log("render");
  }, [ ])
  

  return (
    <div className="card-3">
      <h1>StatePractice</h1>
      <h3>Count: {counter}</h3>
      <button
        className="btn-style"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        className="btn-style"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
      <button
        className="btn-style"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <br />
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button
        className="btn-style"
        onClick={() => {
          alert("El mensaje escrito es: " + message);
        }}
      >
        Send
      </button>
    </div>
  );
}
