import { Col, Row, Typography } from "antd";
import React from "react";
import { getFooterText } from "../../../utils";
import "./Footer.scss";

const { Text } = Typography;

const FooterComponent = () => {
  const copyrightText = getFooterText();
  return (
    <footer className="footer-container">
      <Row>
        <Col span={24} className="footer-style">
          <Text>{copyrightText}</Text>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
