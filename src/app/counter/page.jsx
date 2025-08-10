"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>Simple Counter</h1>
      <div className={styles.counterBox}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
