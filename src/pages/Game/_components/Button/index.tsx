import classNames from "classnames";
import { ButtonProps } from "react-html-props";

import SpinnerIcon from "./_assets/spinner.svg";

import style from "./index.module.scss";

interface Props extends Omit<ButtonProps, "type"> {
  type: "less" | "more",
  htmlType?: ButtonProps["type"],
  loading?: boolean
}

export default function Button({ type, loading, ...props }: Props) {
  return (
    <button
      {...props}
      className={classNames(
        style.button,
        type === "less" ? style.buttonLess : style.buttonMore,
        props.className
      )}
      disabled={props.disabled || loading}
    >
      {loading ? (
        <img
          className={style.button__icon}
          src={SpinnerIcon}
          alt="Иконка спиннера"
        />
      ) : props.children}
    </button>
  );
}