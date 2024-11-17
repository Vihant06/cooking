import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
//import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const Api_Key = "282347f7e0854c52941f024e48964b6e";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${Api_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" srcset="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕛{food.readyInMinutes}</strong>
          </span>
          <span>
            <strong>👪Serves{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥬Vegeterian" : "🥩Non-Vegeterian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : "Non-Vegan"}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {food.extendedIngredients.map((item) => (
          <div>
            <h3>{item.name}</h3>
          </div>
        ))}
        {/* <ItemList food={food} /> isLoading={isLoading} */}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>Loading..</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
