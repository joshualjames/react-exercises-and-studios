import { useState } from 'react';
import "../App.css"

export default function BoardAssignment () {
   const boards = [{ "label": "Desserts", "value": "desserts" }, { "label": "Appetizers", "value": "appetizers" },
      { "label": "Cocktails", "value": "cocktails" }];
   const [boardName, setName] = useState("No boards yet!");
 
      const recipeDropdownList = (props) => {
         return props.map((type) => <option value={type.value}>{type.label}</option>)
      }
   
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {recipeDropdownList(boards)}
         </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
