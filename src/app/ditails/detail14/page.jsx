"use client";

import React from "react";

import "./page.css";

import useStore from "../../../stores/cart";
import { useState } from "react";

import imag1 from "../../../assets/papir/papyrus2.jpg";

const page = () => {

const product = {
  id: 0,
  name: "Папирус 1",
  imag: imag1,
  price: "0",
  quantity: "0",
};

const addToCart = useStore((state) => state.addToCart);
const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  useStore();

const [quantity, setQuantity] = useState(1);
const [isBuyed, setIsBuyed] = useState(
  cart.find((cartItem) => cartItem.id === product.id) ? true : false
);

const handleIncrease = (itemId) => {
  increaseQuantity(itemId);
  setQuantity((prev) => prev + 1);
};

const handleDecrease = (itemId) => {
  if (quantity > 1) {
    decreaseQuantity(itemId);
    setQuantity((prev) => prev - 1);
  }
};

  return (
    <div className="page detail-page">
      <div className="wrapper">
        <div className="breadcrumbs">
          <a href="#" className="breadcrumbs__link">
            Главная
          </a>
          <a href="#" className="breadcrumbs__link">
            Книги
          </a>
          <a href="#" className="breadcrumbs__link">
            Книга из папируса
          </a>
        </div>
        <div className="detail-page__content">
          <div className="detail-page__image-holder">
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
              alt=""
              className="detail-page__image"
            />
            <div className="detail-page__thumbnails">
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/3721416/pub_600f86c5cd098e46b145f9d4_600f88c027add74df6519c3c/scale_1200"
                alt=""
                className="detail-page__thumb"
              />
            </div>
          </div>
          <div className="detail-page__information">
            <div className="detail-page__table">
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Название:</p>
                <p className="detail-page__rowa-value">Книга из папируса</p>
              </div>
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Цена:</p>
                <p className="detail-page__rowa-value">10000 ₽</p>
              </div>
              <div className="detail-page__row">
                <p className="detail-page__row-heading">Автор:</p>
                <p className="detail-page__rowa-value">Пушкин А. С.</p>
              </div>
            </div>
            <p className="detail-page__description">
              Здравствуйте. Если вы читаете эти строки, то это означает что
              невзирая на многие трудности мы с ребятами прокладываем путь к
              победе. Приглашаем вас разделить нашу ношу и вместе продолжить
              путь нашего Отца до его прихода. Моя конечная цель строительство
              города для избранных из Откровений Иоанна Богослова, 21 глава, от
              14 стиха. Напишите нам на почту tsarstvie.ru@gmail.com
            </p>
            <button
              // className={styles.button}
              onClick={() => {
                if (isBuyed) {
                  removeFromCart(product.id);
                  setIsBuyed(false);
                } else {
                  addToCart(product);
                  setIsBuyed(true);
                }
              }}
            >
              {isBuyed ? "Удалить из корзины" : "Добавить в корзину."}
            </button>
            {isBuyed && (
              <>
                <span>
                  {product.name} (x{quantity}) - {product.price}
                </span>
                <button
                  onClick={() => handleIncrease(product.id)}
                  style={{ marginLeft: "10px" }}
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrease(product.id)}
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
