import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const decrementHandler = () => changeAmountHandler(-1);
  const incrementHandler = () => changeAmountHandler(1);

  const changeAmountHandler = (amountChange: number) => {
    if (amountInputRef.current) {
      const enteredAmount = +amountInputRef.current.value + amountChange;

      if (enteredAmount < 1 || enteredAmount > 5) {
        setAmountIsValid(false);
        return;
      }

      setAmountIsValid(true);
      amountInputRef.current.value = enteredAmount.toString();
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        onDecrement={decrementHandler}
        onIncrement={incrementHandler}
      />
      <button className={classes.submitBtn}>+ Add</button>
      {!amountIsValid && <p>Please choose 1-5 per order.</p>}
    </form>
  );
};

export default MealItemForm;
