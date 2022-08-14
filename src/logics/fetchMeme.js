// fetch meme from api imgflip
import fetch from "node-fetch";
import fs from "fs";

const apiUrl = 'https://api.imgflip.com/get_memes';
const fetchMeme = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data.memes;
}

// a function that write to a file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
    );
}

const file = "./memes.json";

fetchMeme().then(memes => {
  writeToFile(file, JSON.stringify(memes));
}).catch(err => {
  console.log(err);
});