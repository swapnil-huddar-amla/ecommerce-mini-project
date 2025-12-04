import React from "react";
import { Typography } from "antd";

import { TagsOutlined } from "@ant-design/icons";
import { IProductDiscount } from "../../interfaces/ClientInterface/IProduct";
const { Text } = Typography;

const ProductDiscount = (props: IProductDiscount) => {
  const { discountLabel, discountValue } = props;
  return (
    <div className="discount">
      <Text className="discount-value">
        <TagsOutlined /> <strong>{discountLabel}:</strong>{" "}
        {discountValue}%
      </Text>
    </div>
  );
};

export default ProductDiscount;
