import React, { forwardRef, Ref } from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
  onDecrement: () => void;
  onIncrement: () => void;
}

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <button
        type="button"
        className={classes.inputBtn}
        onClick={props.onDecrement}
      >
        -
      </button>
      <input ref={ref} {...props.input} />
      <button
        type="button"
        className={classes.inputBtn}
        onClick={props.onIncrement}
      >
        +
      </button>
    </div>
  );
};

export default React.forwardRef(Input);
