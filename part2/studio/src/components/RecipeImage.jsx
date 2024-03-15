import recipeData from "./recipe.json"

function RecipeImage() {
  const recipeImg = recipeData.map(recipe =>
    <div key={recipe.name}>
      <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage"></img>
    </div>)
  return (
    <div>
      {recipeImg}
    </div>
   )
 }
 
export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 