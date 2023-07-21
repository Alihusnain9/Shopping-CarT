import useShoppingCart from "../Content/ShoppingCartContext";
import Data from "../Data/data.json";
import Formatter from "../fomater/formatter";
import { Stack, Button } from "react-bootstrap";
import "./style.css";
type Pops = {
  id: number;
  quantity: number;
};

export default function Item({ id, quantity }: Pops) {
  const { removeFromCart } = useShoppingCart();
  const DataItem = Data.find((item) => item.id === id);
  if (DataItem == null) return null;
  return (
    <Stack direction="horizontal" className="stack" gap={1}>
      <img src={DataItem.imgUrl} alt="image" className="image" />
      <div className="me-auto">
        <div className="name">
          {DataItem.name}{" "}
          {quantity > 1 && <span className="fs-small small">x{quantity}</span>}
        </div>
        <div className="text-muted oneTPrice">{Formatter(DataItem.price)}</div>
      </div>
      <div className="allTPrice">{Formatter(DataItem.price * quantity)}</div>
      <Button
        onClick={() => removeFromCart(id)}
        className="btn-sm"
        variant="outline-danger"
      >
        &times;
      </Button>
    </Stack>
  );
}
