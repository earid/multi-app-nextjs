"use client";

import { useState, useEffect } from "react";
import styles from "./RandomUser.module.css";

export default function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <h2 className={styles.loading}>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Random User</h2>
      <img
        src={user.picture.large}
        alt={user.name.first}
        className={styles.avatar}
      />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
      <button className={styles.button} onClick={fetchUser}>
        Get Another User
      </button>
    </div>
  );
}
