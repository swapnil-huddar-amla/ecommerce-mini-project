import { Table, InputNumber, Space, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useCart } from "../Context/CartContextProvider";
import "./CartComponent.scss";

const { Column } = Table;
const { Title } = Typography;

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useCart();
console.log("Cart data:", cart);
  return (
    <div className="cart-page-wrapper">
      <Title level={2} className="mt-0">
        Your Cart
      </Title>

      <Table dataSource={cart} rowKey="id" pagination={false}>
        <Column
          title="Image"
          render={(_, record) => <img src={record.images[0]} width={60} />}
        />

        <Column title="Product" dataIndex="title" />
        <Column title="Price" render={(_, r) => `$${r.price}`} />

        <Column
          title="Qty"
          render={(_, record) => (
            <InputNumber
              min={1}
              value={record.qty}
              onChange={(value) => updateQty(record.id, Number(value))}
            />
          )}
        />

        <Column title="Total" render={(_, r) => `$${r.price * r.qty}`} />

        <Column
          title="Action"
          render={(_, record) => (
            <Space>
              <DeleteOutlined
                onClick={() => removeFromCart(record.id)}
                className="cursor-pointer"
              />
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default CartPage;
