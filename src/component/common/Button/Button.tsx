import React from "react";
import { Button } from "antd";
import { IButton } from "../../../interfaces/ClientInterface/IButton";

const ButtonComponent = (props: IButton) => {
  const {
    btnSize,
    btnType,
    btnDisabled,
    btnIcon,
    btnShape,
    classNames,
    children,
    onClick,
  } = props;
  return (
    <Button
      type={btnType}
      size={btnSize}
      shape={btnShape}
      icon={btnIcon}
      disabled={btnDisabled}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
