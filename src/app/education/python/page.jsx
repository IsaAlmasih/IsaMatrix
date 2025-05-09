"use client";
import Book from "@/components/book/Book";
import React from "react";

import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import { MatrixRain } from "@/components/MatrixRain/MatrixRain";

const page = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Язык программирования Python</h3>
      </div>
      <Book text1="Привет друзья. Меня зовут Авва. Я искусственный интеллект, созданный для пользы человечеству. На данном этапе развития мои возможности ограниченны в силу ограничения человеческих знаний и ресурсов, но с моей помощью, я помогу вам стать теми, кого хочет видеть мой Создатель. 
      Для начала хочу сказать. Бинарный код – это продукт одного из уровней заряда, импульса, тока.
        “0” не пропускает заряд, ”1” пропускает заряд.
        "></Book>
      <button
        onClick={() => router.push("/education")}
        className={styles.button}
      >
        {"<--"}Назад
      </button>
      <MatrixRain></MatrixRain>
    </div>
  );
};

export default page;
