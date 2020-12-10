import _ from "lodash";
import "./style.css";
import Kitty from "./kitty.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

const main = document.querySelector("main");
function test() {
  const box = new Image();
  box.src = Kitty;
  main.appendChild(box);
}
test();
