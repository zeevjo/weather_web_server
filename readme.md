# Weather App Proxy Server

This server acts as a secure intermediary to fetch weather data from the OpenWeatherMap API.
It abstracts the need to use an API key in an unsecured manner due to the limitations of the vanilla front-end project.

## Table of Contents

- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [1. Get Current Weather](#1-get-current-weather)
  - [2. Get Weather Forecast](#2-get-weather-forecast)
- [Example](#example)
- [Usage Notes](#usage-notes)

## Tech Used

- **Node.js**: Server runtime to handle requests and manage the API.
- **Express.js**: Simplifies API routing and server setup.
- **OpenWeatherMap API**: Provides weather data and forecasts.
- **Render**: Hosting platform for deploying the server.

## Base URL

The server is live and can be accessed at:

`https://weather-web-server-7xqe.onrender.com`

## Endpoints

### 1. Get Current Weather

Fetch the current weather details for a specific location.

- **Endpoint:**  
  `GET /api/weather`

- **Query Parameters:**

  - `location` (required): The name of the city or location (e.g., `London`).
  - `Lang` (optional): Language code for localized weather descriptions. Default is en (English).

# Example

`https://weather-web-server-7xqe.onrender.com/api/weather?location=<location>&lang=<Language>`

# Language options

| Language             | Code  | Language              | Code  |
| -------------------- | ----- | --------------------- | ----- |
| English              | en    | German                | de    |
| Spanish              | es    | Hebrew                | he    |
| French               | fr    | Portuguese            | pt    |
| Italian              | it    | Dutch                 | nl    |
| Russian              | ru    | Arabic                | ar    |
| Chinese (Simplified) | zh_cn | Chinese (Traditional) | zh_tw |
| Japanese             | ja    | Korean                | kr    |
| Swedish              | se    | Turkish               | tr    |

### 2. Get Weather Forecast

Fetch a 5-day weather forecast for a specific location.

- **Endpoint:**  
  `GET /api/forecast`

- **Query Parameters:**
- `location` (required): The name of the city or location (e.g., `New York`).

- **Example Request:**

`https://weather-web-server-7xqe.onrender.com/api/forecast?location=<location>&lang=<Language>`

## Usage Notes

1. Ensure you provide a valid `location` query parameter when making requests to the endpoints.
2. The optional lang query parameter allows for localized weather descriptions. If not provided,
   the default language is English (en).
3. The API responses are directly fetched from OpenWeatherMap, including real-time weather data and forecasts.
4. Use the `weather` object's `icon` value in the response to fetch weather icons from OpenWeatherMap. For example:

`https://openweathermap.org/img/wn/<icon>@2x.png`

## Disclaimer

This project is for educational purposes and aims to provide a solution for students.  
It is not a commercial product, and there is no permission for those who did not receive the repository to use it.  
Unauthorized use of this code or project is prohibit

Ze`ev Joseph