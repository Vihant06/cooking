import React, { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const Api_Key = "282347f7e0854c52941f024e48964b6e";
import styles from "./search.module.css";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${Api_Key}`);
      const data = await res.json();

      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
