import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "Party popper",
  "๐": "Wind Chime",
  "๐ช": "Magic Wand",
  "๐ฃ": "Bomb",
  "๐ช": "Yo - Yo",
  "๐งฎ": "Abacus",
  "๐ฆ": "Flashlight",
  "๐บ": "Amphora",
  "โฐ": "Alarm Clock",
  "๐": "Confetti Ball",
  "๐ชง": "Placard",
  "๐ฉบ": "Stethoscope",
  "๐ช": "Kite",
  "๐": "Bookmark",
  "๐ช": "Coin",
  "๐": "Memo",
  "๐งน": "Broom",
  "๐ป": "Radio",
  "๐งญ": "Compass",
  "๐ก๏ธ": "Thermometer",
  "๐": "Ribbon"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't know this emoji ๐ค";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Objects around us</h1>
      <input
        placeholder="Enter the emoji here"
        onChange={emojiInputHandler}
      ></input>
      <p>
        <strong> {meaning} </strong>
      </p>

      <h3> Object emojis we know </h3>
      <div id="emojiContainer">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
