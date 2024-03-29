"use client";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = 0;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <>
      <h1 className="mt-[120px]">timer</h1>
      <div className="mb-[120px]">
        <h1>{time}</h1>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button
          onClick={() => {
            setStart(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
