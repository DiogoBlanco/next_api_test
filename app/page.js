"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setCourses(data); // Assuming the response is an array of courses
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Cursos</h1>
      {courses.map((comment) => (
        <div key={comment.id}>
          <p>Título: {comment.name}</p>
          <p>URL: {comment.email}</p>
          <p>Criação: {comment.body}</p>
        </div>
      ))}
    </main>
  );
}
