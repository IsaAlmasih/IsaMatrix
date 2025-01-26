"use client";
import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

const page = () => {
    const [res, setRes] = useState(null);
    // const fetchBlocks = async () => {
    //   try {
    //     // Отправляем GET запрос
    //     const response = await axios.get(
    //       "http://localhost:8000/survey/api/blocks/"
    //     );

    //     // Выводим данные из ответа
    //     console.log("Response Data:", response.data);
    //     setRes(response.data)
    //   } catch (error) {
    //     // Обрабатываем ошибки
    //     console.error("Error fetching blocks:", error);
    //   }
    // };
useEffect(()=>{
      const fetchBlocks = async (blockData) => {
        try {
          // Отправляем POST запрос
          const response = await fetch(
            "http://localhost:8000/survey/api/blocks/",
            {
              method: "GET", // Указываем метод GET
              headers: {
                "Content-Type": "application/json", // Указываем, что данные отправляются как JSON
              },
              body: JSON.stringify(blockData), // Преобразуем объект в строку JSON
            }
          );

          // Проверяем, успешен ли запрос
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Парсим JSON-ответ
          const data = await response.json();
          setRes(data)

          // Выводим данные из ответа
          console.log("Block created:", data);
        } catch (error) {
          // Обрабатываем ошибки
          console.error("Error creating block:", error);
        }
      };
      fetchBlocks()
},[])
  return (
    <div className={styles.wrapper}>{res?res.map((item,index)=>(<div key={index}>{item.text}</div>)):""}</div>
  )
}

export default page