import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); 
const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(express.json());

app.get("/api/weather", async (req, res) => {
    const { location } = req.query;
    
    if (!location) return res.status(400).json({ error: "Location is required" });

    try {
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );

        if (!weatherResponse.ok)
            return res.status(404).json({ error: "Location not found" });

        const weatherData = await weatherResponse.json();
        res.json(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.get("/api/forecast", async (req, res) => {
    const { location } = req.query;
    if (!location) return res.status(400).json({ error: "Location is required" });

    try {
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
        );

        if (!forecastResponse.ok)
            return res.status(404).json({ error: "Location not found" });

        const forecastData = await forecastResponse.json();
        res.json(forecastData);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        res.status(500).json({ error: "Failed to fetch forecast data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
