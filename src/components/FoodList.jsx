import FoodItem from "./Fooditem";
import styles from "./fooditem.module.css";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
