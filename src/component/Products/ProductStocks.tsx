import React from "react";
import { Typography } from "antd";
import { IProductStocks } from "../../interfaces/ClientInterface/IProduct";

import {
  ProductOutlined,
} from "@ant-design/icons";
const {Text} = Typography;

const ProductStocks = (props: IProductStocks) =>{
    const {stockLabel, stockValue} = props;
    return (
      <div className="stock">
        <Text className="stock-value">
          <ProductOutlined /> <strong>{stockLabel}:</strong> {stockValue}
        </Text>
      </div>
    );
};

export default ProductStocks;