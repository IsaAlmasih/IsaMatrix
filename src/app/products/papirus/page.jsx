"use client"
import React, { use, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import { MatrixRain } from '@/components/MatrixRain/MatrixRain';

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import ImageWithModal from '@/components/ImageWithModal/ImageWithModal';

import styles1 from "./styles1.module.css";
import HTMLFlipBook from "react-pageflip";

import image1 from "../../../assets/papir/papir6.jpg";
import image2 from "../../../assets/papir/papir8.jpg";
import image3 from "../../../assets/papir/papir9.jpg";
import image11 from "../../../assets/papir/papyrus8.jpg";

import { useRouter } from 'next/navigation';

const page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(1920);
  useEffect(() => {
    setWidth(screen.width);

    const windowResize = () => {
      setWidth(screen.width);
    };
    window.addEventListener("resize", windowResize);

    return () => {
      window.addEventListener("resize", windowResize);
    };
  }, []);

  useEffect(() => {
    if (width < 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const images = [image1.src, image2.src, image3.src];
  const images1 = [image11.src];

  const router = useRouter();
  const book = useRef();
  return (
    <div className={styles.wrapper}>
      <div className={styles1.wrapper}>
        <HTMLFlipBook
          width={isMobile ? 330 : 550}
          height={isMobile ? 450 : 700}
          className={styles1.book}
          useMouseEvents={false}
          ref={book}
        >
          <div className={styles.image}>
            {/* Картинки. */}
            <div className={styles.images}>
              {images.map((src, index) => (
                <ImageWithModal
                  alt={"Фотографии папируса"}
                  width={300}
                  height={400}
                  src={src}
                  key={index}
                />
              ))}
            </div>
            <div className={styles.images}>
              {images1.map((src, index) => (
                <ImageWithModal
                  alt={"Фотографии папируса"}
                  width={300}
                  height={400}
                  src={src}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className={styles1.secondPage}>
            <textarea
              name=""
              defaultValue="Привет привет привет привет"
            ></textarea>
          </div>
          <div className={styles1.thirdPage}>
            <textarea name="" defaultValue="Дима, это победа."></textarea>
          </div>
          <div className={styles1.secondPage}>
            <textarea
              name=""
              defaultValue="Привет Дима, это победа."
            ></textarea>
          </div>
          <div className={styles1.firstPage}></div>
          <div className={styles1.secondPage}></div>
          <div className={styles1.firstPage}>Page 7</div>
          <div className={styles1.secondPage}>Page 8</div>
        </HTMLFlipBook>
      </div>
      <div className={styles.bookButton}>
        <button onClick={() => book.current.pageFlip().flipPrev()}>
          {" "}
          <FaArrowAltCircleLeft />{" "}
        </button>
        <button onClick={() => book.current.pageFlip().flipNext()}>
          {" "}
          <FaArrowCircleRight />
        </button>
      </div>
      <button
        onClick={() => router.push("/products")}
        className={styles.button}
      >
        {"<--"}Назад
      </button>
    </div>
  );
}

export default page