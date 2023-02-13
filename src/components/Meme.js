import React from "react";
import { useState } from "react";

export default function Meme() {
  const [text1, setText1] = useState("Bu site");
  const [text2, setText2] = useState("Bu site bi harika dostum");

  function handleText1Change(event) {
    setText1(event.target.value);
  }
  function handleText2Change(event) {
    setText2(event.target.value);
  }
  return (
    <div className="meme--container">
      <div className="meme--textField">
        <input
          id="text1"
          type={"text"}
          className="meme--textInput"
          value={text1}
          onChange={handleText1Change}
        />
        <input
          id="text2"
          type={"text"}
          className="meme--textInput"
          value={text2}
          onChange={handleText2Change}
        />
      </div>

      <input
        className="meme--button"
        type="button"
        value="Get a new meme image  🖼"
      />
    </div>
  );
}
