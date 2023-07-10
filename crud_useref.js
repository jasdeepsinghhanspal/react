import React, { useState, useRef } from 'react';
//crud using useRef
function MyComponent() {
  const [items, setItems] = useState([]);
  const newItemRef = useRef('');
  const selectedItemRef = useRef(null);

  const handleNewItemSubmit = () => {
    const newItem = newItemRef.current.value;
    setItems([...items, newItem]);
    newItemRef.current.value = '';
  };

  const handleEditItemSubmit = () => {
    const editedItem = selectedItemRef.current.value;
    const editedIndex = items.findIndex((item) => item === selectedItemRef.current.oldValue);
    // Perform API call or database operation to update the edited item
    // After successful update, update the state with the modified item
    const updatedItems = [...items];
    updatedItems[editedIndex] = editedItem;
    setItems(updatedItems);
    selectedItemRef.current = null;
  };

  const handleDeleteItem = (itemToDelete) => {
    // Perform API call or database operation to delete the item
    // After successful deletion, update the state by removing the item from the items array
    setItems(items.filter((item) => item !== itemToDelete));
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleDeleteItem(item)}>Delete</button>
            <button
              onClick={() => {
                selectedItemRef.current = { value: item, oldValue: item };
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <h2>Create Item</h2>
      <input type="text" ref={newItemRef} />
      <button onClick={handleNewItemSubmit}>Submit</button>
      {selectedItemRef.current && (
        <div>
          <h2>Edit Item</h2>
          <input type="text" ref={selectedItemRef} defaultValue={selectedItemRef.current.value} />
          <button onClick={handleEditItemSubmit}>Save</button>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
