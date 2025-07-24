import React, { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
import "./MiniCart.css";
import { useNavigate } from "react-router-dom";


const MiniCart = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const itemCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className={`mini-cart ${open ? 'open' : ''}`}>
      <div className="mini-cart-icon" onClick={() => setOpen(!open)}>
        🛒 {itemCount}
      </div>

      {open && (
        <div className="mini-cart-preview">
          <h4>Your Cart</h4>
          {itemCount === 0 ? (
            <p>No items yet.</p>
          ) : (
            <ul>
              {Object.entries(cartItems).map(([id, qty]) => {
                const item = food_list.find(f => f._id === id);
                if (!item) return null;
                return (
                  <li key={id}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name} × {qty}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <button onClick={() => navigate('/cart')}>Go to Cart</button>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
