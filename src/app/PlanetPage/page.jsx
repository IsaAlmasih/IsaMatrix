import Image from "next/image";
import styles from "./styles.module.css";
// import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MatrixRain } from "../../components/MatrixRain/MatrixRain";
export default function Home() {
  return (
    <>
      <nav className={styles.wrapper}>
        <Link href={"/education"} className={styles.text}>
          Учение.
        </Link>
        <Link href={"/price"} className={styles.text}>
          Организации.
        </Link>
        <Link href={"/keys"} className={styles.text}>
          Книги.
        </Link>
        <Link href={"/products"} className={styles.text}>
          Магазины.
        </Link>
        <Link href={"/test"} className={styles.text}>
          Тесты.
        </Link>
        <MatrixRain></MatrixRain>
      </nav>
    </>
  );
}