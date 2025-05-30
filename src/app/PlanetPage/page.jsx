import Image from "next/image";
import styles from "./styles.module.css";
// import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MatrixRain } from "../../components/MatrixRain/MatrixRain";
export default function Home() {
  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.text}>
          <Link href={"/education"}>Учение.</Link>
          <Link href={"/price"}>Организации.</Link>
          <Link href={"/keys"}>Книги.</Link>
          <Link href={"/products"}>Магазины.</Link>
          <Link href={"/test"}>Тесты.</Link>
        </div>
        <MatrixRain></MatrixRain>
      </nav>
    </>
  );
}