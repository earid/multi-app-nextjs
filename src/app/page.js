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
          <h2>👔 Random USer</h2>
          <p>Fetch random USer</p>
        </Link>

        <Link href="/data-fetch" className={styles.card}>
          <h2>📈 Data Fetch </h2>
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

        <Link href="/crypto-prices" className={styles.card}>
          <h2>💲 Crypto Price </h2>
          <p>Crypto Prices Fetch from API</p>
        </Link>

        <Link href="/quiz" className={styles.card}>
          <h2>🧩 Small Quiz App</h2>
          <p>small quiz app for practicce</p>
        </Link>

        <Link href="/building-quote" className={styles.card}>
          <h2>🛠 Quote Form</h2>
          <p>Building quote based on user input</p>
        </Link>

      </div>
      <div className={styles.grid}>
        <Link href="/loancalculator" className={styles.card}>
          <h2>🧮 Loan Calculetor</h2>
          <p> Simple Loan Calculetor </p>
        </Link>

        <Link href="/crypto-prices" className={styles.card}>
          <h2>💲 Crypto Price </h2>
          <p>Crypto Prices Fetch from API</p>
        </Link>

        <Link href="/quiz" className={styles.card}>
          <h2>🧩 Small Quiz App</h2>
          <p>small quiz app for practicce</p>
        </Link>

        <Link href="/building-quote" className={styles.card}>
          <h2>🛠 Quote Form</h2>
          <p>Building quote based on user input</p>
        </Link>

      </div>
    </div>
  );
}
