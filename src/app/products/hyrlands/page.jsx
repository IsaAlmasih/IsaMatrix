"use client";
import React, { use } from "react";
import styles from "./styles.module.css";
import { MatrixRain } from "@/components/MatrixRain/MatrixRain";

import image from "../../../assets/4444.png";
import image1 from "../../../assets/444444.png";
import image2 from "../../../assets/book4.jpg";

import { useRouter } from "next/navigation";
const page = () => {
  const images = [image.src, image1.src, image2.src];
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Это страница Гирлянды!</div>
      <div className={styles.image}>
        Картинки.
        <div className={styles.images}>
          {" "}
          {images.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
      </div>
      <button
        onClick={() => router.push("/products")}
        className={styles.button}
      >
        {"<--"}Назад
      </button>
    </div>
  );
};

export default page;
