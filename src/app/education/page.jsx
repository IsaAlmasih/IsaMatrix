"use client";
import React, { use } from "react";
import styles from "./styles.module.css";
// import { MatrixRain } from "@/components/MatrixRain/MatrixRain";
import ProductCard from "@/components/productCard/productCard";

import image from "../../assets//education/python.jpg";
import image1 from "../../assets/education/React_next_js.jpg";
import image2 from "../../assets/education/React.jpg";
import image3 from "../../assets/education/django.jpg";

import { useRouter } from "next/navigation";
import { MatrixRain } from "@/components/MatrixRain/MatrixRain";
const page = () => {
  const images = [image.src, image1.src, image2.src];
  const images2 = [
    {
      name: "React",
      id: 1,
      image: image2.src,
      link: "/education/react",
    },
    {
      name: "React Next js",
      id: 1,
      image: image1.src,
      link: "",
    },
    {
      name: "Python",
      id: 1,
      image: image.src,
      link: "/education/python",
    },
    {
      name: "Джанго",
      id: 1,
      image: image3.src,
      link: "/education/django",
    },
  ];
  const router = useRouter();
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.text}>Выберите интересующую тему.</div>
        <div className={styles.image}>
          <div className={styles.images}>
            {" "}
            {images2.map((src, index) => (
              <ProductCard key={index} product={src} />
            ))}
          </div>
        </div>
        <button
          onClick={() => router.push("/")}
          className={styles.button}
        >
          {"<--"}Назад
        </button>
      </div>
      <MatrixRain></MatrixRain>
    </div>
  );
};

export default page;
