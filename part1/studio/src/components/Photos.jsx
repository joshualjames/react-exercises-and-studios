import styles from './Description.module.css';

export default function RecipePhoto() {
    
    return (
        <img src="https://thewoodandspoon.com/wp-content/uploads/2022/08/IMG_7757.jpg"
            alt="delicious salted chocolate chip cookies" style={{ height: '220px' }} className={styles.imageUpdates} />
    )
}