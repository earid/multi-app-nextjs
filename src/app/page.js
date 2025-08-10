import Link from "next/link";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to My Multi-App Project</h1>
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>🏠 Home</h2>
          <p>Go back to the main page</p>
        </Link>

        <Link href="/todo" className={styles.card}>
          <h2>📝 To-Do App</h2>
          <p>Manage your daily tasks</p>
        </Link>

        <Link href="/calculator" className={styles.card}>
          <h2>🧮 Calculator</h2>
          <p>Perform quick calculations</p>
        </Link>

        <Link href="/counter" className={styles.card}>
          <h2>ℹ️ Counter</h2>
          <p>Simple Counter To learn useState</p>
        </Link>

      </div>
    </div>
  );
}
