"use client";

import { useState, useEffect } from "react";
import styles from "./Weather.module.css";

export default function WeatherPage() {
  const [city, setCity] = useState("Dhaka"); // ডিফল্ট শহর
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "6cecc7206f744d28853154643251808";

  const fetchWeather = async (selectedCity = city) => {
    if (!selectedCity) return;

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${selectedCity}&aqi=no`
      );

      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather({
          city: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          desc: data.current.condition.text,
          icon: data.current.condition.icon,
          humidity: data.current.humidity,
        });
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data");
      setWeather(null);
    }
  };

  // ✅ কম্পোনেন্ট লোড হলেই ডিফল্ট শহরের ডেটা দেখাবে
  useEffect(() => {
    fetchWeather("Dhaka");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={styles.button} onClick={() => fetchWeather(city)}>
          Get Weather
        </button>
      </div>

      {error && <p>{error}</p>}

      {weather && (
        <div className={styles.weatherBox}>
          <h2>
            {weather.city}, {weather.country}
          </h2>
          <img src={weather.icon} alt={weather.desc} />
          <p>Temperature: {weather.temp}°C</p>
          <p>Description: {weather.desc}</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}
