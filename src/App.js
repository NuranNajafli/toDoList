import React, { useState } from "react";

function App() {
  const [values, setValues] = useState("");
  const [listItem, setListItem] = useState([]);

  const addItem = () => {
    if (!values) {
      alert("please enter something");
    }

    const item = {
      id: listItem.length + 1,
      value: values,
    };
    setListItem((pre) => [...pre, item]);
    setValues("");
  };

  const deleteItem = (id) => {
    const newList = listItem.filter((a) => a.id !== id);
    setListItem(newList);
  };
  return (
    <div className="main">
      <h1>To do List</h1>
      <div className="event">
        <input
          type="text"
          placeholder="write something"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {listItem.map((e, i) => (
          <li key={i}>
            {e.value} <button onClick={() => deleteItem(e.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
