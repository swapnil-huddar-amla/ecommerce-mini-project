export interface IButton {
  btnType: "primary" | "dashed" | "link" | "text" | "default";
  btnSize: "large" | "middle" | "small";
  btnShape?: "default" | "circle" | "round";
  btnIcon?: React.ReactNode;
  btnDisabled?: boolean;
  classNames?: string;
  children?: React.ReactNode;
  onClick?: any;
}
