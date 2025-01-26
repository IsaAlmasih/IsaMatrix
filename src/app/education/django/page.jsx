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
        <h3>Язык программирования Django</h3>
      </div>
      <Book text1="Привет Савва" text2="Это вторая страница"></Book>
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
