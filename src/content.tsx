import React from "react";
import ReactDOM from "react-dom";

const Main = () => {
  return (
    <div style={{ backgroundColor: "red", height: "200px" }}>This is React</div>
  );
};

// const ad = document.querySelectorAll("path");
// console.log(ad);
// console.log("test");

const app = document.createElement("div");

const frameset = document.body;

const left = frameset.querySelector("frame:nth-child(1)");
const right = frameset.querySelector("frame:nth-child(2)");

const frameDocument = left?.contentDocument;

ReactDOM.render(<Main />, app);
frameset.prepend(app);

console.log(frameset);
console.log(left);
console.log(right);
console.log(frameDocument);
