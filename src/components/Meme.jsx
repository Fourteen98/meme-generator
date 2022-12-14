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

  const [allMemes, setAllMemes] = useState([])

  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json()
    setAllMemes(data.data.memes)
  },[])

  console.log( allMemes)

  function getMemeImage() {

    const randomNumber = Math.floor(Math.random() * allMemes.length)
    setMeme(() => ({
      ...meme,
      height: allMemes[randomNumber].height,
      width: allMemes[randomNumber].width,
      image: allMemes[randomNumber].url
    }))

    event.preventDefault()
  }

  function handleChange(event){
    const {name,value} = event.target
    setMeme(() => ({
      ...meme,
      [name] : value
    }))
  }



  const memeStyle = {
    height: meme.height + "px",
    width: meme.width + "px",
    "objectFit": "contain"
  }

  return (
    <main>
      <div className="container">
        <form className="form">
          <input
            type="text"
            name="topText"
            className="form--input"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            className="form--input"
            placeholder="Buttom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
        </form>
        <div className="meme--container">
          <img src={meme.image} alt="meme" style={memeStyle} className="meme--image"/>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

      </div>
    </main>
  )
}

export default Meme;