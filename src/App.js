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
            initial={{
              y: 250,
              scale: 0,
            }}
            animate={{
              y: 50,
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            exit={{
              y: 250,
              scale: 0,
              transition: {
                duration: 1,
              },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
