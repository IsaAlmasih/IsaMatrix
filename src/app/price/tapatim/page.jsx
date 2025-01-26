"use client";
import Link from "next/link";

import styles from "./styles.module.css";

import React from "react";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>Название.</Link>
      <a href={"/Реквизиты.docx"}>Политика.</a>
      <Link href={"/price"}>Реквизиты.</Link>
      <Link href={"/price"}>Пользовательское..</Link>
    </div>
  );
};

export default page;
