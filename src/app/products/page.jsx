"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./styles.module.css";

import Imag1 from "../../assets/cat.jpg";
import Imag2 from "../../assets/book4.jpg";
import Imag3 from "../../assets/papir.png";
import Imag5 from "../../assets/2015.jpg";

import Image from "next/image";
import Imag4 from "../../assets/мкм.jpg";

import { MatrixRain } from "@/components/MatrixRain/MatrixRain";
import ProductCard from "@/components/productCard/productCard";
import Category from "@/components/Category/Category";

const products = [
  {
    id: 10,
    name: "Услуги",
    image: Imag1,
    link: "/products/services",
  },
  {
    id: 20,
    name: "Папирус",
    image: Imag3,
    link: "/products/papirus",
  },
  {
    id: 30,
    name: "Книги",
    image: Imag2,
    link: "/products/books",
  },
  {
    id: 40,
    name: "Гирлянды",
    image: Imag5,
    link: "/products/hyrlands",
  },
];

const page = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapp}>
      <div>
        <Link href={"/cart"} className={styles.cart}>
          <Image src={Imag4} height={50} width={50} alt="Корзина" />
        </Link>
      </div>
      <div className="category-list">
        {products.map((category, id) => (
          <Category
            key={id}
            id={category.id}
            categoryName={category.name}
            image={category.image}
            href={category.link}
          />
        ))}
      </div>
      <button onClick={() => router.push("/")} className={styles.button}>
        {"<--"}Назад
      </button>
      <MatrixRain></MatrixRain>
    </div>
  );
};

export default page;
