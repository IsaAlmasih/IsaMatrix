"use client";

import React from "react";

import "./page.css";

import useStore from "../../../stores/cart";
import { useState } from "react";

const page = () => {

const product = {
  id: 2,
  name: "Папирус 3",
  imag: "/",
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
              Период полураспада папируса составляет несколько тысяч лет. Вашему
              вниманию мы, открываем новую страницу этого растения. Вопрос к
              вам! Вы когда-нибудь задумывались как сохранить свои знания для
              грядущих поколений? Как повлиять на ход развития цивилизации и
              войти в историю? Задумывались ли вы как можно создать летопись для
              всей семьи, сохранить наследие для потомков, или ваши знания,
              труды? Думаю, задумывались, во всяком случае, моё послание тем,
              кто меня слышит и разделяет мои интересы. Я предлагаю в этой
              карточке следующее. Четыре листа. Если вы писатель или учёный или
              вам нужно для мероприятий в школе, закажите три товара, я положу в
              двое больше листов. Листы А3 формата я опрыскиваю водой через
              приспособление которым распыляют воду при глажке билья. Лист лежит
              около минуты и становится как ткань, очень мягким, после я его
              складываю и зажимаю в пресс на несколько часов, количество часов
              под прессом интуитивно. Идеально подойдёт для подарков, или в
              тубусах. Идеально подойдёт для школьных мероприятий от
              благотворительных фондов в виде проведения диктантов. Идеально
              подойдёт для создания книг разных размеров и форм. На что
              собственно я ставлю упор. Друзья писатели и художники, а также
              рукодельники и затейники. Папирус Египетский сохраняет ваши
              творения сотни лет и на данном этапе единственное, что при
              бережном отношении может радовать ваших потомков и далее сохраняя
              ваше наследие на сотни лет и тысячи. Бумага, вам такого не
              позволит. Папирус — путешествие в прошлое, формируя будущее в
              настоящем. Если вы хотите оставить после себя память, если вы
              хотите сделать послание для потомков, папирус — достойны и
              единственный выбор!
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
