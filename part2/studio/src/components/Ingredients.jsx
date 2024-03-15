import recipeData from "./recipe.json";

function IngredientList() {

  const listItems = recipeData.map(recipe =>
    recipe.ingredients.map((ingredient) =>
      <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <div>
      <h3>Ingredients</h3>
        <ul>{
        listItems}
        </ul>
     </div>
   )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 