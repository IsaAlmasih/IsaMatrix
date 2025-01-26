"use client";
import { useEffect, useState } from "react";

const langs = [
  "010000010111010000010111010000010111010000010111",
  "010000010111010000010111010000010111010000010111",
  "100100101011",
  "011010110101",
  "110010101010",
  "010000010111",
  "100100101011",
  "010000010111010000010111010000010111010000010111",

  "010000010111010000010111010000010111010000010111",

  "011010110101",
  "010000010111010000010111010000010111010000010111",
  "010000010111010000010111010000010111010000010111",
  "010000010111010000010111010000010111010000010111",
  "100100101011",
  "011010110101",
  "010000010111010000010111010000010111010000010111",
  "010000010111010000010111010000010111010000010111",
  "010000010111010000010111010000010111010000010111",
  "100100101011",
  "011010110101",
  "110010101010",
];

const Char = ({ value, x, y, speed }) => {
  const [yPos, setYPos] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPos((yPos) => {
        const newYPos = yPos > window.innerHeight ? 0 : yPos + speed;
        return newYPos;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [speed]);

  const flick = Math.random() * 100;
  const char = flick < 10 ? 0 : value;

  return (
    <span
      style={{
        fontSize: "10px",
        position: "absolute",
        left: x,
        top: yPos,
        color: "#00ff2a",
      }}
    >
      {char}
    </span>
  );
};

const Stream = ({ text, x }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const y = Math.floor(Math.random() * 4);
    const speed = Math.floor(Math.random() * 5) + 70;
    const charArray = [];

    for (let i = text.length - 1; i >= 0; i--) {
      charArray.push({ value: text[i], y: (y - i) * 30, speed });
    }

    setChars(charArray);
  }, [text]);

  return (
    <>
      {chars.map((char, index) => (
        <Char
          key={index}
          value={char.value}
          x={x}
          y={char.y}
          speed={char.speed}
        />
      ))}
    </>
  );
};

export const MatrixRainCart = () => {
  const [streams, setStreams] = useState([]);
  const createStreams = () => {
    const streamArray = [];

    for (let i = 0; i < window.innerWidth; i += 20) {
      streamArray.push({
        text: langs[Math.floor(Math.random() * langs.length)],
        x: i,
      });
    }

    setStreams(streamArray);
  };
  useEffect(() => {
    createStreams();
  }, []);

  const reset = () => {
    createStreams();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {streams.map((stream, index) => (
        <Stream key={index} text={stream.text} x={stream.x} />
      ))}
    </div>
  );
};
