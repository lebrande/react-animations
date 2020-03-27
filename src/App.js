import React, { useState } from 'react';
import './Circle.css';
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>animuj</button>
      <AnimatePresence>
        {show && (
          <motion.div
            className="Circle"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
