import React, { forwardRef, Ref } from "react";
import classes from "./Input.module.css";

interface InputProps {
  label: string;
  className?: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
}

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
};

export default React.forwardRef(Input);
