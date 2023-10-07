import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Golden Shrimp",
    description:
      "Classic honey-walnut shrimp with a tasty hidden surprise: Holy Basil!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Toru Curry",
    description:
      "Japanese chicken curry with rice, fried egg, and golden potatoes",
    price: 16.99,
  },
  {
    id: "m3",
    name: "Cheese Sandwiches Deluxe",
    description:
      "A variety of crispy fried cheese sandwiches served bite-size on a platter with apples. Please inform if you don't eat meat, because I like to get creative here...",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Mole a la Nutella",
    description:
      "THE infamous cult favorite...a rich smokey-spicy chicken mole with a dark secret",
    price: 24.99,
  },
  {
    id: "m5",
    name: "Golden Ale",
    description:
      "1/2 pint pour of The Golden Bow Ale, you are required to sing the tune for the beer should you order more than one.",
    price: 8.99,
  },
  {
    id: "m6",
    name: "Ruby Kombucha",
    description:
      "Beat, Grape, and Lilikoi with white tea base. A local tribute to the all-time classic brew by Cafe Gratitude.",
    price: 12.99,
  },
];

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal: Meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
