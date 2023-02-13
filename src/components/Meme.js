import React from "react";
import { useState } from "react";
import memesData from "../data/memesData.js";

export default function Meme() {
  const [text1, setText1] = useState("Bu site");
  const [text2, setText2] = useState("Bu site bi harika dostum");

  function handleText1Change(event) {
    setText1(event.target.value);
  }
  function handleText2Change(event) {
    setText2(event.target.value);
  }
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[randomNum]);
  }
  return (
    <main>
      <div className="form">
        <input
          // id="text1"
          type={"text"}
          placeholder="Top text"
          className="form--input"
          // value={text1}
          // onChange={handleText1Change}
        />
        <input
          // id="text2"
          type={"text"}
          placeholder="Bottom text"
          className="form--input"
          // value={text2}
          // onChange={handleText2Change}
        />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
