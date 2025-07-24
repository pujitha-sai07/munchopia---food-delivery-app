

import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    undoRemove,
    lastRemovedItem,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const [removingItemId, setRemovingItemId] = useState(null);

  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);

  const handleRemove = (itemId) => {
    setRemovingItemId(itemId);
    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItemId(null);
    }, 400);
  };

  return isCartEmpty ? (
    <div className="cart-empty">
      <h2>Your cart is empty 🛒</h2>
      <p>
        Back to <a href="/">Home</a> and add some delicious food!
      </p>
      <p className="cart-empty-suggestion">Maybe try 🍕 or 🍣 or 🥗?</p>
    </div>
  ) : (
    <>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        <DragDropContext
          onDragEnd={(result) => {
            const itemId = result?.draggableId;
            if (result.destination == null && itemId) {
              removeFromCart(itemId); 
            }
          }}
        >
          <Droppable droppableId="cart">
            {(provided) => (
              <div
                className="cart-items-droppable"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {food_list.map((item, index) => {
                  const inCart = cartItems[item._id] > 0;
                  if (!inCart) return null;

                  return (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className={`cart-items-wrapper ${
                            snapshot.isDragging ? "dragging" : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>{item.price * cartItems[item._id]}</p>
                            <p
                              onClick={() => handleRemove(item._id)}
                              className="cross"
                            >
                              x
                            </p>
                          </div>
                          <hr />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {lastRemovedItem && (
        <div className="undo-bar">
          <span>Item removed.</span>
          <button onClick={undoRemove}>Undo</button>
        </div>
      )}

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
