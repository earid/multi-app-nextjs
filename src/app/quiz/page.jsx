"use client";
import { useState } from "react";
import styles from "./quiz.module.css";

export default function Quiz() {
  const questions = [
    {
      question: "বাংলাদেশের রাজধানী কোথায়?",
      options: ["ঢাকা", "চট্টগ্রাম", "খুলনা", "রাজশাহী"],
      answer: "ঢাকা",
    },
    {
      question: "React কে তৈরি করেছে?",
      options: ["গুগল", "ফেসবুক", "মাইক্রোসফট", "নেটফ্লিক্স"],
      answer: "ফেসবুক",
    },
    {
      question: "Next.js কোন ফ্রেমওয়ার্কের উপর ভিত্তি করে?",
      options: ["Vue", "React", "Angular", "Svelte"],
      answer: "React",
    },
    {
      question: "বাংলাদেশ স্বাধীনতা লাভ করে কবে?",
      options: ["১৯৪৭", "১৯৭১", "১৯৫২", "১৯৬৫"],
      answer: "১৯৭১",
    },
    {
      question: "JavaScript কোন ধরনের ভাষা?",
      options: ["Compiled", "Markup", "Scripting", "Assembly"],
      answer: "Scripting",
    },
    {
      question: "HTML এর পূর্ণরূপ কী?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Tool Multi Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "CSS-এ 'color' প্রোপার্টি কী নিয়ন্ত্রণ করে?",
      options: ["ব্যাকগ্রাউন্ড", "ফন্টের রং", "বর্ডার", "মার্জিন"],
      answer: "ফন্টের রং",
    },
    {
      question: "বাংলাদেশের মুদ্রার নাম কী?",
      options: ["টাকা", "রুপি", "ডলার", "দিনার"],
      answer: "টাকা",
    },
    {
      question: "২ + ২ × ২ এর মান কত?",
      options: ["৬", "৮", "৪", "২"],
      answer: "৬",
    },
    {
      question: "Next.js-এ ডিফল্ট ফোল্ডার স্ট্রাকচার কোথায় থাকে?",
      options: ["src/", "pages/ বা app/", "public/", "config/"],
      answer: "pages/ বা app/",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]); // ইউজারের উত্তরগুলো সেভ হবে

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setAnswers([
      ...answers,
      {
        question: questions[current].question,
        selected: option,
        correct: questions[current].answer,
      },
    ]);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎯 Quiz App</h1>
      {finished ? (
        <div className={styles.result}>
          <h2>
            তোমার স্কোর: {score} / {questions.length}
          </h2>

          <div className={styles.answerReview}>
            {answers.map((ans, idx) => (
              <div key={idx} className={styles.answerItem}>
                <p>
                  <strong>
                    {idx + 1}. {ans.question}
                  </strong>
                </p>
                <p>
                  ✅ সঠিক উত্তর:{" "}
                  <span className={styles.correct}>{ans.correct}</span>
                </p>
                <p>
                  📝 তোমার উত্তর:
                  <span
                    className={
                      ans.selected === ans.correct
                        ? styles.correct
                        : styles.wrong
                    }
                  >
                    {ans.selected}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setAnswers([]);
              setFinished(false);
            }}
          >
            আবার খেলো
          </button>
        </div>
      ) : (
        <div className={styles.card}>
          <h2>
            {current + 1}. {questions[current].question}
          </h2>
          <ul>
            {questions[current].options.map((option, idx) => (
              <li key={idx}>
                <button
                  className={styles.optionBtn}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <p className={styles.progress}>
            প্রশ্ন {current + 1} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
