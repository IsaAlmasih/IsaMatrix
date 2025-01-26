'use client'
// pages/cart.js
import React from "react";
import useStore from "../../stores/cart"; // Импортируйте ваш Zustand store
import Head from "next/head";
import styles from "./styles.module.css";
import{useRouter} from "next/navigation"

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  const router=useRouter()

  const handleIncrease = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecrease = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className={styles.wrapper}>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ margin: "10px 0" }}>
                <span>
                  {item.name} (x{item.quantity}) - {item.price}₽
                </span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrease(item.id)}
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClear}
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              color: "white",
              padding: "10px",
            }}
          >
            Очистить корзину
          </button>
        </div>
      )}
      <button onClick={() => router.push("/products")} className={styles.button}>
        {"<--"}Назад
      </button>
    </div>
  );
};

export default CartPage;
