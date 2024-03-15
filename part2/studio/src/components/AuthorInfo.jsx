import "./styling.css";
import recipe from "./recipe.json"

function AuthorInfo() {
  const recipeAuthor = recipe.map((recipe =>
    <div key={recipe.name}>{recipe.author}</div>
  ))
  const recipeAuthorImg = recipe.map((recipe =>
    <img key={recipe.name} src={recipe.authorImage} alt={recipe.author} class="authorImage"/>
  ))
  const recipeURL = recipe.map((recipe => 
    <a href={recipe.website}>{recipe.website}</a>
    ))
  return (
    <div>
      {recipeAuthor}
      {recipeAuthorImg}
      {recipeURL}
    </div>
  )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 