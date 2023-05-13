import { useState } from 'react';
//basic crud operation edit delete update create
//file in javascript
function MyComponent2() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleAdd = (event) => {
    event.preventDefault();
    const newItem = { name: event.target.name.value, price: event.target.price.value };
    setItems([...items, newItem]);
  }

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditFormVisible(true);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedItem = { ...selectedItem, name: event.target.name.value, price: event.target.price.value };
    const updatedItems = items.map((item) =>
      item === selectedItem ? updatedItem : item
    );
    setItems(updatedItems);
    setSelectedItem(null);
    setIsEditFormVisible(false);
  }

  const handleDelete = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" name="name" />
        <input type="number" name="price" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
      {isEditFormVisible && (
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" defaultValue={selectedItem.name} />
          <input type="number" name="price" defaultValue={selectedItem.price} />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}
export default MyComponent2;