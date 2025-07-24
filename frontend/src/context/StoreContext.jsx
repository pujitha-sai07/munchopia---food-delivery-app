import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const addToCartSound = new Audio("/sounds/add-to-cart.mp3");
const removeFromCartSound = new Audio("/sounds/remove-from-cart.mp3");

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [lastRemovedItem, setLastRemovedItem] = useState(null);
  const [undoTimeout, setUndoTimeout] = useState(null);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    addToCartSound.currentTime = 0;
    addToCartSound.volume = 0.2;

    addToCartSound.play();
  };

  const removeFromCart = (itemId) => {
    const quantity = cartItems[itemId];
    if (!quantity) return;

    removeFromCartSound.currentTime = 0;
    removeFromCartSound.volume = 0.5;
    removeFromCartSound.play();

    setLastRemovedItem({ id: itemId, quantity });

    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });

    const timeout = setTimeout(() => {
      setLastRemovedItem(null);
    }, 5000);
    setUndoTimeout(timeout);
  };

  const undoRemove = () => {
    if (lastRemovedItem) {
        setCartItems((prev) => ({
            ...prev,
            [lastRemovedItem.id]: lastRemovedItem.quantity,
        }));
        clearTimeout(undoTimeout);
        setLastRemovedItem(null);
    }
};


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    undoRemove,
    lastRemovedItem
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
