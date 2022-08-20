import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🎉": "Party popper",
  "🎐": "Wind Chime",
  "🪄": "Magic Wand",
  "💣": "Bomb",
  "🪀": "Yo - Yo",
  "🧮": "Abacus",
  "🔦": "Flashlight",
  "🏺": "Amphora",
  "⏰": "Alarm Clock",
  "🎊": "Confetti Ball",
  "🪧": "Placard",
  "🩺": "Stethoscope",
  "🪁": "Kite",
  "🔖": "Bookmark",
  "🪙": "Coin",
  "📝": "Memo",
  "🧹": "Broom",
  "📻": "Radio",
  "🧭": "Compass",
  "🌡️": "Thermometer",
  "🎀": "Ribbon"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't know this emoji 🤔";
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
