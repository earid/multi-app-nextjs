import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Text Logo */}
      <Link href="/" className={styles.logo}>
        MyApps
      </Link>

      {/* Menu */}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/data-fetch">Data Fetch</Link>
        <Link href="/random-user">Random User</Link>
      </div>
    </nav>
  );
}
