import classes from "classnames";
import "./Button.scss";

export interface ButtonProps {
  type?: "primary" | "default";
  label: string;
}

const Button = (props: ButtonProps) => {
  const classname = `custom-button-${props.type || "default"}`;
  return (
    <button className={classes("custom-button", classname)}>
      {props.label}
    </button>
  );
};

export default Button;
