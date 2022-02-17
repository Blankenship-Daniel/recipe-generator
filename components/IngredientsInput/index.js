import { useState } from "react";
import styles from "./styles.module.css";

export default function IngredientsInput({
  onSubmit,
  placeholder = "Enter ingredients here...",
}) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInputSubmit = (e) => {
    if (e.key === "Enter") {
      setInputValue("");
      onSubmit(inputValue);
    }
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        onChange={onInputChange}
        onKeyDown={onInputSubmit}
        placeholder={placeholder}
        value={inputValue}
      />
    </>
  );
}
