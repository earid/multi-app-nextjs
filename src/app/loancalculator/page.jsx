"use client";
import { useState } from "react";
import styles from "./LoanCalculator.module.css";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Dummy fixed interest rate
  const interestRate = 8; // 8% annual

  const calculateLoan = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount);
    const time = parseInt(years) * 12; // total months
    const monthlyRate = interestRate / 100 / 12;

    // Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n – 1]
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) /
      (Math.pow(1 + monthlyRate, time) - 1);

    setMonthlyPayment(emi.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Loan Calculator</h1>
      <form onSubmit={calculateLoan} className={styles.form}>
        <div className={styles.field}>
          <label>Loan Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label>Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </form>

      {monthlyPayment && (
        <div className={styles.result}>
          <p>
            Monthly Payment: <strong>${monthlyPayment}</strong>
          </p>
          <p>Interest Rate: {interestRate}%</p>
        </div>
      )}
    </div>
  );
}
