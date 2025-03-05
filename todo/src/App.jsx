import React, { useState } from "react";
import "./ToDoList";
import ToDoList from "./ToDoList";

const App = () => {

  const [inputList, setinput] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setinput(e.target.value);
  }

  const listOfitem = () => {
    setItems((eOld) => {
      return [...eOld, inputList];
    })

    setinput("");
  }

  const deleteItem = (id) => {
    console.log("clicked on delete");
    setItems((eOld) => {
      return eOld.filter((element, index) => index !== id)
    })
  }

  return (
    <>
      <div className="outerScerren">
        <div className="mainDiv">
          <br />
          <h3> To Do List</h3>
          <br />
          <input type="text" placeholder="add a item" onChange={itemEvent} value={inputList} />
          <button onClick={listOfitem}> + </button>


          <ol>
            {items.map((itemVal, i) => {
              return <ToDoList
                key={i}
                id={i}
                text={itemVal}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
