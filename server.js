import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

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

app.use(cors());
app.use(express.json());

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
  const { location, lang, units } = req.query;
  try {
    const weatherData = await fetchWeatherData(
      "weather",
      location,
      lang || "en",
      units || "metric"
    );
    res.json({ success: true, data: weatherData });
  } catch (error) {
    next(error);
  }
});

app.get("/api/forecast", validateLocationQuery, async (req, res, next) => {
  const { location, lang, units } = req.query;
  try {
    const forecastData = await fetchWeatherData(
      "forecast",
      location,
      lang || "en",
      units || "metric"
    );
    res.json({ success: true, data: forecastData });
  } catch (error) {
    next(error);
  }
});

app.get("/api/weather/coordinates", async (req, res, next) => {
  const { lat, lon, lang, units } = req.query;
  try {
    const weatherData = await fetchWeatherDataByCoordinates(
      "weather",
      lat,
      lon,
      lang || "en",
      units || "metric"
    );
    res.json({ success: true, data: weatherData });
  } catch (error) {
    next(error);
  }
});

app.get("/api/forecast/coordinates", async (req, res, next) => {
  const { lat, lon, lang, units } = req.query;
  try {
    const forecastData = await fetchWeatherDataByCoordinates(
      "forecast",
      lat,
      lon,
      lang || "en",
      units || "metric"
    );
    res.json({ success: true, data: forecastData });
  } catch (error) {
    next(error);
  }
});

app.get("/api/cronjob", async (req, res) => {
  res.send("Cron job executed successfully!");
});

app.use((error, req, res, next) => {
  console.error("Error:", error.message);

  res.status(error.status || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
});

const fetchWeatherData = async (
  endpoint,
  location,
  lang = "en",
  units = "metric"
) => {
  const url = `${BASE_URL}/${endpoint}?q=${location}&appid=${API_KEY}&units=${units}&lang=${lang}`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`API Error: ${response.status} - ${errorText}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
};

const fetchWeatherDataByCoordinates = async (
  endpoint,
  lat,
  lon,
  lang = "en",
  units = "metric"
) => {
  if (!lat || !lon) {
    throw new Error("Latitude (lat) and Longitude (lon) are required.");
  }

  const url = `${BASE_URL}/${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}&lang=${lang}`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`API Error: ${response.status} - ${errorText}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
