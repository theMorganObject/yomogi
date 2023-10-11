import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { cinzelDecorative } from "@/components/utils/fonts";

export interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

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

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={cinzelDecorative.className}>
        <Input
          ref={amountInputRef}
          label="Amount"
          className={cinzelDecorative.className}
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </div>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
