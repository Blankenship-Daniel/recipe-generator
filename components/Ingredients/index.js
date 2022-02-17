import { useEffect, useState } from "react";
import IngredientsInput from "../IngredientsInput";
import IngredientsList from "../IngredientsList";
import { v4 } from "uuid";
import styles from "./styles.module.css";

export default function Ingredients({ onUpdate }) {
  const [ingredients, setIngredients] = useState([]);
  return (
    <>
      <IngredientsInput
        onSubmit={(ingredient) => {
          const updated = [...ingredients, { id: v4(), value: ingredient }];
          setIngredients(updated);
          onUpdate(updated);
        }}
      />

      <div className={styles.grid}>
        <IngredientsList
          onRemove={(ingredientId) => {
            const updated = ingredients.filter((i) => i.id !== ingredientId);
            setIngredients(updated);
            onUpdate(updated);
          }}
          ingredients={ingredients}
        />
      </div>
    </>
  );
}
