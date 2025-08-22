"use client";

import { useState } from "react";
import styles from "./building-quote.module.css";

export default function BuildingQuote() {
  const questions = [
    {
      id: 1,
      text: "ভবনের ধরন নির্বাচন করুন",
      options: [
        { label: "আবাসিক বাড়ি", price: 2000000 },
        { label: "ছোট অফিস", price: 3000000 },
        { label: "গুদামঘর", price: 5000000 },
      ],
    },
    {
      id: 2,
      text: "ফাউন্ডেশনের ধরণ",
      options: [
        { label: "কংক্রিট স্ল্যাব", price: 800000 },
        { label: "পাইল ফাউন্ডেশন", price: 1200000 },
        { label: "উঁচু কাঠের বেস", price: 500000 },
      ],
    },
    {
      id: 3,
      text: "দেয়ালের উপাদান",
      options: [
        { label: "ইট", price: 1500000 },
        { label: "সিমেন্ট ব্লক", price: 1800000 },
        { label: "প্রিফ্যাব প্যানেল", price: 1200000 },
      ],
    },
    {
      id: 4,
      text: "ছাদের ধরন",
      options: [
        { label: "ফ্ল্যাট কংক্রিট", price: 1000000 },
        { label: "ঢালু টিন/মেটাল শীট", price: 800000 },
        { label: "ঢালু টালি", price: 1200000 },
      ],
    },
    {
      id: 5,
      text: "জানালার ফ্রেম",
      options: [
        { label: "কাঠ", price: 2000 },
        { label: "অ্যালুমিনিয়াম", price: 3500 },
        { label: "স্টিল", price: 5000 },
      ],
    },
    {
      id: 6,
      text: "প্রতিটি দেয়ালে জানালার সংখ্যা",
      options: [
        { label: "১টি জানালা", priceMultiplier: 1 },
        { label: "২টি জানালা", priceMultiplier: 2 },
        { label: "৩ বা তার বেশি", priceMultiplier: 3 },
      ],
    },
    {
      id: 7,
      text: "ফ্লোর সংখ্যা",
      options: [
        { label: "একতলা", price: 1000000 },
        { label: "দোতলা", price: 2000000 },
        { label: "তিনতলা বা বেশি", price: 4000000 },
      ],
    },
    {
      id: 8,
      text: "অতিরিক্ত সুবিধা",
      options: [
        { label: "বেসিক ইলেকট্রিক ও প্লাম্বিং", price: 500000 },
        { label: "মডার্ন ইন্টেরিয়র ফিনিশিং", price: 1500000 },
        { label: "সোলার সিস্টেম", price: 800000 },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const calculateTotal = () => {
    let total = 0;
    questions.forEach((q) => {
      const ans = answers[q.id];
      if (ans) {
        if (ans.priceMultiplier) {
          const framePrice = answers[5]?.price || 0;
          total += framePrice * ans.priceMultiplier;
        } else {
          total += ans.price;
        }
      }
    });
    return total;
  };

  if (currentStep === questions.length) {
    // Final Quote
    return (
      <div className={styles.container}>
        <div className={styles.stepNumber}>ফাইনাল কোট</div>
        <div className={styles.total}>
          মোট আনুমানিক খরচ: ৳{calculateTotal().toLocaleString()}
        </div>
        <div className={styles.selectedOptions}>
          <div>আপনার নির্বাচিত অপশনগুলো:</div>
          <ul>
            {Object.values(answers).map((ans, idx) => (
              <li key={idx}>{ans.label}</li>
            ))}
          </ul>
        </div>
        <button className={styles.btn} onClick={() => setCurrentStep(0)}>
          আবার শুরু করুন
        </button>
      </div>
    );
  }

  const question = questions[currentStep];
  const progressPercent = (currentStep / questions.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.title}>বিল্ডিং কোট ফর্ম</div>

      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className={styles.stepNumber}>
        Step {currentStep + 1} of {questions.length}
      </div>

      <div className={styles.question}>
        <div>{question.text}</div>
        {question.options.map((opt, idx) => (
          <div key={idx} className={styles.option}>
            <label>
              <input
                type="radio"
                name={`q${question.id}`}
                value={opt.label}
                checked={answers[question.id]?.label === opt.label}
                onChange={() => handleSelect(question.id, opt)}
              />{" "}
              {opt.label} {opt.price ? `(৳${opt.price.toLocaleString()})` : ""}
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          className={styles.btn}
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          পূর্ববর্তী
        </button>
        <button
          className={styles.btn}
          onClick={nextStep}
          disabled={!answers[question.id]}
        >
          পরবর্তী
        </button>
      </div>
    </div>
  );
}
