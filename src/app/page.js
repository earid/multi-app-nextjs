import Link from "next/link";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>NectJs এর প্র্যাকটিস  </h1>
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>🏠 Home</h2>
          <p>Go back to the main page</p>
        </Link>

        <Link href="/random-user" className={styles.card}>
          <h2>🗣 Random USer</h2>
          <p>Fetch random USer</p>
        </Link>

        <Link href="/data-fetch" className={styles.card}>
          <h2>🧮 Data Fetch </h2>
          <p>useEffect uses on simple ApI fetch</p>
        </Link>

        <Link href="/counter" className={styles.card}>
          <h2>ℹ️ Counter</h2>
          <p>Simple Counter To learn useState</p>
        </Link>

      </div>
      <div className={styles.grid}>
        <Link href="/weather" className={styles.card}>
          <h2>⛅ Weather</h2>
          <p>Weather App</p>
        </Link>

        <Link href="/random-user" className={styles.card}>
          <h2>🗣 Random USer</h2>
          <p>Fetch random USer</p>
        </Link>

        <Link href="/data-fetch" className={styles.card}>
          <h2>🧮 Data Fetch </h2>
          <p>useEffect uses on simple ApI fetch</p>
        </Link>

        <Link href="/counter" className={styles.card}>
          <h2>ℹ️ Counter</h2>
          <p>Simple Counter To learn useState</p>
        </Link>

      </div>
    </div>
  );
}
