import { Offcanvas, Stack } from "react-bootstrap";
import useShoppingCart from "../Content/ShoppingCartContext";
import Item from "./Item";
import Formatter from "../fomater/formatter";
import Data from "../Data/data.json";
import { useState, useEffect } from "react";
import "./style.css";
type Pops = {
  isopen: boolean;
};

export default function ShoppingCart({ isopen }: Pops) {
  const [clas, setClas] = useState("p-3");

  useEffect(() => {
    const updateclass = () => {
      const a = window.innerWidth;
      if (a < 400) {
        setClas("p-2");
      } else if (a < 300) {
        setClas("p-1");
      } else {
        setClas("p-3");
      }
    };
    window.addEventListener("resize", updateclass);
    updateclass();

    return () => window.removeEventListener("resize", updateclass);
  }, []);

  const { cartItems, closeCart } = useShoppingCart();

  return (
    <Offcanvas
      show={isopen}
      onHide={closeCart}
      className="offcanvas p-0"
      style={{ padding: "16px 0px" }}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-3">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={`${clas}`}>
        <Stack gap={2}>
          {cartItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-4">
            Total{" "}
            {Formatter(
              cartItems.reduce((total, Item) => {
                const DataItem = Data.find((item) => item.id === Item.id);
                return total + (DataItem?.price || 0) * Item.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
