import { ButtonPropsWithoutRef } from "react-html-props";

type ButtonType = "primary" | "outline" | "ghost";

export interface ButtonProps extends Omit<ButtonPropsWithoutRef, "type"> {
  type?: ButtonType,
  htmlType?: ButtonPropsWithoutRef["type"]
}