import React, { useState } from 'react';
import './Circle.css';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>animuj</button>
      {show && (
        <div
          className="Circle"
        />
      )}
    </div>
  );
}

export default App;
