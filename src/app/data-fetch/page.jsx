"use client";
import { useState, useEffect } from "react";
import styles from "./DataFetch.module.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className={styles.container}>
      <h2>User List</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
