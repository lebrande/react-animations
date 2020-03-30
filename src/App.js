import React, { useState } from "react";
import "./Circle.css";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Orange",
    "Kiwi",
    "Pear"
  ]);

  const addNewItem = (e) => {
    setItems([
      ...items,
      newItem,
    ]);
  };

  const deleteItem = (itemToDelete) => {
    setItems(items.filter(
      (item) => item !== itemToDelete,
    ));
  };

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        addNewItem();
      }}>
        <input
          value={newItem}
          className="input App__input"
          type="text"
          placeholder="Dodaj nowy owoc..."
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
      </form>
      <AnimatePresence>
        {items.map((item) => {
          return (
            <motion.div
              key={item}
              className="notification is-info"
              positionTransition
              initial={{
                x: 50,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: .4,
                }
              }}
              exit={{
                x: 50,
                opacity: 0,
                transition: {
                  duration: .4,
                }
              }}
            >
              <button
                className="delete"
                onClick={() => {
                  deleteItem(item);
                }}
              />
              {item}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default App;
