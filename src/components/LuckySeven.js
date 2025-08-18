import React from "react";

let winnigGif = 'https://media4.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif'
let loosingGif = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZjZGJreWNhM2VmdWVkYXdiNGFqaGkwcmYwYmhxMHBuMmEyaWUxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NT2jEihXL5HhshCk3W/giphy.gif'

const LuckySeven = () => {
    let randomNumber = Math.floor(Math.random() *10 + 1)
  return <div>
    <h3>LuckySeven</h3>
    <div>Random Number: {randomNumber}</div>
    {randomNumber === 7 && <img src={winnigGif} />} 
    {randomNumber !== 7 &&  <img src={loosingGif} />} 
  </div>;
};

export default LuckySeven;
