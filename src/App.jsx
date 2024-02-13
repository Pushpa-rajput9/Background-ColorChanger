import { useState } from "react";
import Button from "./Button";

function App() {
  let [color, setcolor] = useState("olive");

  let red = () => {
    setcolor("red");
  };
  let yellow = () => {
    setcolor("yellow");
  };
  let blue = () => {
    setcolor("blue");
  };
  let green = () => {
    setcolor("green");
  };
  let orange = () => {
    setcolor("orange");
  };
  let purple = () => {
    setcolor("purple");
  };
  let black = () => {
    setcolor("black");
  };
  let grey = () => {
    setcolor("grey");
  };
  let brown = () => {
    setcolor("brown");
  };
  let aqua = () => {
    setcolor("aqua");
  };
  return (
    <div
      className="w-full h-screen duration-200 justifyItem-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="font-extrabold ml-72 " style={{ fontSize: "35px" }}>
        Choose Color to change me
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-4 rounded inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2 mb-1">
          <Button colour="red" click={red} />
          <Button colour="yellow" click={yellow} />
          <Button colour="blue" click={blue} />
          <Button colour="green" click={green} />
          <Button colour="orange" click={orange} />
          <Button colour="purple" click={purple} />
          <Button colour="black" click={black} />
          <Button colour="grey" click={grey} />
          <Button colour="brown" click={brown} />
          <Button colour="aqua" click={aqua} />
        </div>
      </div>
    </div>
  );
}

export default App;
