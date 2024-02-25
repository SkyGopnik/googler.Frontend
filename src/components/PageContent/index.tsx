import { ReactNode } from "react";

import style from "./index.module.scss";

interface Props {
  children: ReactNode
}

export default function PageContent({ children }: Props) {
  return (
    <div className={style.content}>
      {children}
    </div>
  );
}