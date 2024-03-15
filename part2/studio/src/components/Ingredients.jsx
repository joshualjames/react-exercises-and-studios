import recipeData from "./recipe.json";

function IngredientList() {

  const listItems = recipeData[0].ingredients

  return (
    <div>
      <h3>Ingredients</h3>{listItems.map((ingredient)=>
      <li id={ingredient}>{ingredient}</li>
      )}
     </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 