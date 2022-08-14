import React from "react";
import memesData from "../memesData";
import { useState } from "react";

function Meme() {
    const [memeUrl, setMemeUrl] = useState(()=> "");
    let url
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        setMemeUrl(() => memesArray[randomNumber].url)
    }
    const memeContainerStyle = {
      backgroundImage: `url(${memeUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borer: "1px solid red",
      width: "100%",
      height: "450px",
      border: "1px solid red",
    }

    return (
        <main>
            <div className="container">
            <form className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Buttom text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </form>
              <div className="meme--container" style={memeContainerStyle}>

              </div>

            </div>
        </main>
    )
}

export default Meme;