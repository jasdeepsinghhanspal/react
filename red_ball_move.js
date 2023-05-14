import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === 500) {
        setDirection('left');
      } else if (position === 0) {
        setDirection('right');
      }

      if (direction === 'right') {
        setPosition(position + 10);
      } else {
        setPosition(position - 10);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [position, direction]);

  return (
    <div style={{ position: 'relative', height: '500px' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${position}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          borderRadius: '50%',
          animation: 'bounce 0.5s ease-in-out infinite',
        }}
      />
    </div>
  );
}

export default App;
