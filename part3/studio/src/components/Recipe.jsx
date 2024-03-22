import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://thewoodandspoon.com/the-best-salted-chocolate-chip-cookies/";
   let authorPhoto = "https://thewoodandspoon.com/wp-content/uploads/2020/01/Headshot_1500x1490@2x.png";
   let authorName = "Kate Wood";

   return (
      <div>
         <img src={authorPhoto} alt = "photo of author Kate Wood" style={{objectFit: "contain", borderRadius: "50%", height:"200px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 cup unsalted butter", "1/2 cup sugar", "2 large eggs", "2 tsp vanilla extract", "1 tsp baking soda"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Salted Chocolate Chip Cookies</h1>
            <p>Some super amazing cookies</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thewoodandspoon.com/wp-content/uploads/2022/08/IMG_7732.jpg" alt="stack of cookies"
         style={{ height: "200px" }} className="imageUpdates" />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
