import { ReactNode } from "react";
import { H1Props } from "react-html-props";
import classNames from "classnames";

import style from "./index.module.scss";

interface Props extends H1Props {
  children: ReactNode
}

export default function Title({ children, ...props }: Props) {
  return (
    <h1
      {...props}
      className={classNames(
        style.title,
        props.className
      )}
    >
      {children}
    </h1>
  );
}