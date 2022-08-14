import React from "react";
import memesData from "../memesData";
import {useState} from "react";

function Meme() {

  const [memeUrl, setMemeUrl] = useState(() => "" );
  const [memeHeight, setMemeHeight] = useState(() => "" );
  const [memeWidth, setMemeWidth] = useState(() => "" );

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeUrl(() => memesArray[randomNumber].url)
    setMemeHeight(() => memesArray[randomNumber].height)
    setMemeWidth(() => memesArray[randomNumber].width)
    event.preventDefault()
    console.log(randomNumber)
  }

  const memeStyle = {
    height: memeHeight,
    width: memeWidth,
    "object-fit": "contain"
  }

  return (
    <main>
      <div className="container">
        <form className="form">
          <input type="text" className="form--input" placeholder="Top text"/>
          <input type="text" className="form--input" placeholder="Buttom text"/>
          <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
        </form>
        <div className="meme--container">
          <img src={memeUrl} alt="meme" style={memeStyle} className="meme--image"/>

        </div>

      </div>
    </main>
  )
}

export default Meme;