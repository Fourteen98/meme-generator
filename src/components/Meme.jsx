import React from "react";
import memesData from "../memesData";
import {useState} from "react";

function Meme() {

  const [meme, setMeme] = useState(
    {
      height: "",
      width: "",
      topText: "",
      bottomText: "",
      image: "https://i.imgflip.com/1g8my4.jpg"
    });

  const [allMemesImages, setAllMemesImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMeme(() => ({
      ...meme,
      image: memesArray[randomNumber].url
    }))

    event.preventDefault()
    console.log(randomNumber)
  }

  const memeStyle = {
    height: meme.height,
    width: meme.width,
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
          <img src={meme.image} alt="meme" style={memeStyle} className="meme--image"/>
        </div>

      </div>
    </main>
  )
}

export default Meme;