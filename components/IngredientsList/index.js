import styles from "./styles.module.css";

export default function IngredientsList({ ingredients, onRemove }) {
  return (
    <>
      {ingredients.map(({ id, value }) => (
        <div key={id} className={styles.card}>
          <h2>{value}</h2>
          <p>
            <a onClick={() => onRemove(id)}>Remove</a>
          </p>
        </div>
      ))}
    </>
  );
}
