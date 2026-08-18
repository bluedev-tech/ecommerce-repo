import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div className="cart">
        <i style={{ color: "red" }}>
          your cart is empty.. <br />
          please, place a request
        </i>
      </div>
    </div>
  );
};

export default Cart;
