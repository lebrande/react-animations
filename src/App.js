import React, { useState } from 'react';
import './Circle.css';

function App() {
  const [animated, setAnimated] = useState(false)
  const [show, setShow] = useState(true);

  const animate = () => {
    setAnimated(!animated)
    setTimeout(() => {
      setShow(!show)
    }, 1000)
  }

  return (
    <div>
      <button onClick={() => animate()}>animuj</button>
      {show && (
        <div className={
          `Circle ${animated ? 'Circle--animated' : ''}`
        } />
      )}
    </div>
  );
}

export default App;
