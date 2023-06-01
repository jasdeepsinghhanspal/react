//changecolor.js
import React, { useState } from 'react';

function BackgroundColorChanger() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const getBackgroundColor = () => {
    if (clickCount < 5) {
      return 'white';
    } else if (clickCount < 10) {
      return 'lightblue';
    } else if (clickCount < 15) {
      return 'lightgreen';
    } else {
      return 'lightpink';
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        width: '100%',
        height: '100vh',
      }}
      onClick={handleClick}
    >
      <h1>Click Count: {clickCount}</h1>
    </div>
  );
}

export default BackgroundColorChanger;
