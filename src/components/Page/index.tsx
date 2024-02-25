import { ReactNode } from "react";
import classNames from "classnames";

import style from "./index.module.scss";

interface Props {
  className?: string,
  children: ReactNode
}

export default function Page({ className, children }: Props) {
  return (
    <div className={classNames(style.page, className)}>
      {children}
    </div>
  );
}