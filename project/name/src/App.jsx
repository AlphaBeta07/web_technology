import React, { useState, useRef } from "react";
import "./App.css";
import html2canvas from "html2canvas";

const letterMap = {
  A: 5,
  B: 2,
  C: 3,
  D: 2,
  E: 4,
  F: 2,
  G: 1,
  H: 2,
  I: 5,
  J: 2,
  K: 2,
  L: 4,
  M: 2,
  N: 3,
  O: 2,
  P: 2,
  Q: 2,
  R: 3,
  S: 3,
  T: 2,
  U: 2,
  V: 2,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1,
};

const getRandomImage = (char) => {
  const max = letterMap[char] || 1;
  const index = Math.floor(Math.random() * max);
  return `/landsat/${char.toLowerCase()}_${index}.jpg`;
};

const App = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const outputRef = useRef(null); // 👈 important

  const generateName = () => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, "");

    const result = cleanName.split("").map((char) => {
      return getRandomImage(char);
    });

    setImages(result);
  };

  // 🔥 Download function
  const downloadImage = async () => {
    const canvas = await html2canvas(outputRef.current);
    const link = document.createElement("a");
    link.download = "landsat-name.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="app">
      <h1>Your Name in Landsat</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generateName}>Generate</button>
      </div>

      {/* 👇 THIS AREA WILL BE CAPTURED */}
      <div className="output" ref={outputRef}>
        {images.length > 0 ? (
          images.map((img, index) => (
            <img key={index} src={img} alt={`letter-${index}`} />
          ))
        ) : (
          <p>Enter a name to generate Landsat letters</p>
        )}
      </div>

      {/* 👇 DOWNLOAD BUTTON */}
      {images.length > 0 && (
        <button className="download-btn" onClick={downloadImage}>
          Download Image
        </button>
      )}
    </div>
  );
};

export default App;