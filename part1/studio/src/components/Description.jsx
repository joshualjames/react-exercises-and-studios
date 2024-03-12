import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://thewoodandspoon.com/the-best-salted-chocolate-chip-cookies/";
    const authorPhoto = "https://thewoodandspoon.com/wp-content/uploads/2020/01/Headshot_1500x1490@2x.png";
    const authorName = "Kate Wood";
    return (
        <div className={StyleSheet.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="A photo of Kate Wood" style={{ height: '200px' }} className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Wood and Spoon</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>The Best Salted Chocolate Chip Cookies</h1>
                    <p>No joke, easily the best chocolate chip cookies you have ever had.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;