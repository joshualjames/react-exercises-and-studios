import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1 cup unsalted butter at room temp", "½ cup sugar",
        "1–1/2 cups light brown sugar", "2 large eggs",
        "2 teaspoons pure vanilla extract"];
    
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}