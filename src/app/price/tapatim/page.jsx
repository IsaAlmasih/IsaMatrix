"use client";
import Link from "next/link";

import styles from "./styles.module.css";

import React from "react";

const page = () => {
  return (
    <Link href={"/price"} className={styles.wrapper}>
      Тапатим.
    </Link>
  );
};

export default page;
