import React from "react";
import { Typography } from "antd";
import { IHeading } from "../../../interfaces/ClientInterface/IHeading";

const { Title } = Typography;

const Heading = (props: IHeading) => {
  const { titleClass, titleText, textFontLevel } = props;
  return (
    <Title level={textFontLevel} className={titleClass}>
      {titleText}
    </Title>
  );
};

export default Heading;
