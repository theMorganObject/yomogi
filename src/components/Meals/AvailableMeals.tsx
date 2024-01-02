import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { menuItems } from '../../data/menu';

interface Meal {
  id: string;
  name: string;
  description: string;
  time: number;
  price: number;
}

const AvailableMeals: React.FC = () => {
  const mealsList = menuItems.map((meal: Meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      time={meal.time}
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
