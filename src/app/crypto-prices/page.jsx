// apps/crypto-prices/page.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./crypto.module.css";

export default function CryptoPrices() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,bdt,eur"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Crypto Prices</h1>
      <div className={styles.card}>
        <h2>Bitcoin</h2>
        <p>USD: ${data.bitcoin.usd}</p>
        <p>BDT: ৳{data.bitcoin.bdt}</p>
        <p>EUR: €{data.bitcoin.eur}</p>
      </div>
      <div className={styles.card}>
        <h2>Ethereum</h2>
        <p>USD: ${data.ethereum.usd}</p>
        <p>BDT: ৳{data.ethereum.bdt}</p>
        <p>EUR: €{data.ethereum.eur}</p>
      </div>
    </div>
  );
}
