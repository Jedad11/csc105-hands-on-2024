import React from "react"; //You can safely remove this line
import { z } from "zod";
import { useState } from "react";

const FavPage = () => {
  const [select,setSelect] = useState("");
  const handleChange = (e) => {
    setSelect(e.target.value)
  }
 
  return <div>
    This is the Favorites Page
    <form action="">
      <input 
      type="number"
      min={1}
      max={100}
      />
      <select value={select} onChange={handleChange}>
        <option value="love">love</option>
        <option value="like">like</option>
      </select>
    </form>
  </div>;
};

export default FavPage;