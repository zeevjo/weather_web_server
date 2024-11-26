import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.API_KEY || !process.env.BASE_URL) {
  throw new Error(
    "Environment variables missing: API_KEY and/or BASE_URL are not set."
  );
}

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

app.use(express.json());

const fetchWeatherData = async (endpoint, location) => {
  const url = `${BASE_URL}/${endpoint}?q=${location}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }
  return response.json();
};

const validateLocationQuery = (req, res, next) => {
  const { location } = req.query;
  if (!location) {
    return res
      .status(400)
      .json({ success: false, error: "Location is required." });
  }
  next();
};

app.get("/api/weather", validateLocationQuery, async (req, res, next) => {
  const { location } = req.query;

  try {
    const weatherData = await fetchWeatherData("weather", location);
    res.json({ success: true, data: weatherData });
  } catch (error) {
    next(error);
  }
});

app.get("/api/forecast", validateLocationQuery, async (req, res, next) => {
  const { location } = req.query;

  try {
    const forecastData = await fetchWeatherData("forecast", location);
    res.json({ success: true, data: forecastData });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error("Error:", error.message);
  res
    .status(500)
    .json({ success: false, error: error.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
