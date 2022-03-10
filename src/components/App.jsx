import React, { useState } from "react";

function App() {

  const [content, setContent] = useState("")
  const [listItem, setListItem] = useState("")

  function handleChange(event){
    const value = event.target.value
    setContent(value)

  }
  function handleClick() {
     setListItem(preValue => {
      return[
         ...preValue,
         <li>{content}</li>
      ] 
  })}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>

          {listItem}

        </ul>
      </div>
    </div>
  );
}

export default App;
