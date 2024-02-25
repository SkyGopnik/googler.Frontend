import classNames from "classnames";

import { ButtonProps } from "./types";

import style from "./index.module.scss";

export default function Button({ type = "primary", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        style.button,
        style[`buttonType_${type}`]
      )}
      type={props.htmlType}
    />
  );
}