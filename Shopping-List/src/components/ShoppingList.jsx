import { useState } from "react";
import '../styles/ShoppingList.css'

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (newItem !== "") {
      const newItems = [...items];
      newItems.push({ text: newItem });
      setItems(newItems);
      setNewItem("");
    }
  };

  const removeItem = (id) => {
    const newItems = [];
    items.forEach(item => {
      if (item.id !== id) {
        newItems.push(item);
      }
    });
    setItems(newItems);
  };

  const startEdit = (id, text) => {
    setEditing(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    const newItems = [...items];
    newItems.forEach(item => {
      if (item.id === id) {
        item.text = editText;
      }
    });
    setItems(newItems);
    setEditing(null);
  };

  return (
    <div className="shopping-container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem} className="add-btn">Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>
              {editing === item.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                item.text
              )}
            </span>
            {editing === item.id ? (
              <button onClick={() => saveEdit(item.id)} className="save-btn">Save</button>
            ) : (
              <>
                <div className="button-group">
                  <button onClick={() => startEdit(item.id, item.text)} className="edit-btn">Edit</button>
                  <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
