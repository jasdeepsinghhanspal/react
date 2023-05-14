import React, { useState } from "react";
import myImage from "./Image2.jpg";

function MovingImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveImage = (direction) => {
    if (direction === "up") {
      setPosition((prevState) => ({ ...prevState, y: prevState.y - 10 }));
    } else if (direction === "down") {
      setPosition((prevState) => ({ ...prevState, y: prevState.y + 10 }));
    } else if (direction === "left") {
      setPosition((prevState) => ({ ...prevState, x: prevState.x - 10 }));
    } else if (direction === "right") {
      setPosition((prevState) => ({ ...prevState, x: prevState.x + 10 }));
    }
  };

  return (
    <img
      src={myImage}
      alt="Moving game"
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      onMouseDown={(e) => {
        const startX = e.pageX - position.x;
        const startY = e.pageY - position.y;

        const handleMouseMove = (e) => {
          setPosition({ x: e.pageX - startX, y: e.pageY - startY });
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }}
    />
  );
}
//Image2.jpg is a image which is pasted in src folder and the pic when clicked then on mouse hover 
export default MovingImage;
