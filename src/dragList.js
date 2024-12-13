import React, { useState } from "react";
import "./App.css"; // Optional: Add styles for better visuals

function DragAndDrop() {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => {
    if (index !== placeholderIndex) {
      setPlaceholderIndex(index);
    }
  };

  const handleDrop = () => {
    if (draggedIndex !== null && placeholderIndex !== null) {
      const updatedList = [...list];
      const [draggedItem] = updatedList.splice(draggedIndex, 1); // Remove dragged item
      updatedList.splice(placeholderIndex, 0, draggedItem); // Insert at new position
      setList(updatedList);
    }
    setDraggedIndex(null); // Reset
    setPlaceholderIndex(null);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {list.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault(); // Allow drop
              handleDragOver(index);
            }}
            onDrop={handleDrop}
            style={{
              padding: "10px",
              margin: "5px auto",
              backgroundColor: index === placeholderIndex ? "#f0f0f0" : "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "grab",
              width:"50%"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDrop;
