import "./styling.css";
import recipeData from "./recipe.json"

function AuthorInfo() {
  const recipeAuthor = recipeData.map((recipe =>
    <div key={recipe.name}>{recipe.author}</div>
  ))
  const recipeAuthorImg = recipeData.map((recipe =>
    <img key={recipe.name} src={recipe.authorImage} alt={recipe.author} className="authorImage"/>
  ))
  const recipeURL = recipeData.map((recipe => 
    <a href={recipe.website} key={recipe.name}>{recipe.website}</a>
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
 