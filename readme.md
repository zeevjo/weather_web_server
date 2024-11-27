# Weather App Proxy Server

This server acts as a secure intermediary to fetch weather data from the OpenWeatherMap API.
It abstracts the need to use an API key in an unsecured manner due to the limitations of the vanilla front-end project.

## Table of Contents

- [BASE URL](#base-url)
- [Endpoints](#endpoints)

  - [1. Get Current Weather](#1-get-current-weather)
  - [2. Get Weather Forecast](#2-get-weather-forecast)
  - [3. Get Current Weather by Coordinates](#3-get-current-weather-by-coordinates)
  - [4. Get Weather Forecast by Coordinates](#4-get-weather-forecast-by-coordinates)
  - [5. Get Weather icon (image) representing the weather condition](#5-get-weather-icon-image-representing-the-weather-condition)


- [Example](#example)
- [Usage Notes](#usage-notes)
  <br>

## Tech Used

- **Node.js**: Server runtime to handle requests and manage the API.
- **Express.js**: Simplifies API routing and server setup.
- **OpenWeatherMap API**: Provides weather data and forecasts.
- **Render**: Hosting platform for deploying the server.
  <br>

## BASE URL

The server is live and can be accessed at:

`https://weather-web-server-7xqe.onrender.com`
<br>

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
<br>

# Language options

<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Code</th>
      <th>Language</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>English</td>
      <td>en</td>
      <td>German</td>
      <td>de</td>
    </tr>
    <tr>
      <td>Spanish</td>
      <td>es</td>
      <td>Hebrew</td>
      <td>he</td>
    </tr>
    <tr>
      <td>French</td>
      <td>fr</td>
      <td>Portuguese</td>
      <td>pt</td>
    </tr>
    <tr>
      <td>Italian</td>
      <td>it</td>
      <td>Dutch</td>
      <td>nl</td>
    </tr>
    <tr>
      <td>Russian</td>
      <td>ru</td>
      <td>Arabic</td>
      <td>ar</td>
    </tr>
    <tr>
      <td>Chinese (Simplified)</td>
      <td>zh_cn</td>
      <td>Chinese (Traditional)</td>
      <td>zh_tw</td>
    </tr>
    <tr>
      <td>Japanese</td>
      <td>ja</td>
      <td>Korean</td>
      <td>kr</td>
    </tr>
    <tr>
      <td>Swedish</td>
      <td>se</td>
      <td>Turkish</td>
      <td>tr</td>
    </tr>
  </tbody>
</table>

<br>

### 2. Get Weather Forecast

Fetch a 5-day weather forecast for a specific location.

- **Endpoint:**  
  `GET /api/forecast`

- **Query Parameters:**
- `location` (required): The name of the city or location (e.g., `New York`).

- **Example Request:**

`https://weather-web-server-7xqe.onrender.com/api/forecast?location=<location>&lang=<Language>`
<br>

### 3. Get Current Weather by Coordinates

Fetch the current weather details using latitude and longitude.

- **Endpoint:**  
  `GET /api/weather/coordinates`

- **Query Parameters:**

  - lat (required): Latitude of the location (e.g., 51.5074).
  - lon (required): Longitude of the location (e.g., -0.1278).
  - lang (optional): Language code for localized weather descriptions. Default is en (English).

- **Example Request:**

`https://weather-web-server-7xqe.onrender.com/api/weather/coordinates?lat=<latitude>&lon=<longitude>&lang=<Language>`
<br>

### 4. Get Weather Forecast by Coordinates

Fetch a 5-day weather forecast using latitude and longitude.

- **Endpoint:**  
  `GET /api/weather/coordinates`

- **Query Parameters:**

  - lat (required): Latitude of the location (e.g., 40.7128).
  - lon (required): Longitude of the location (e.g., -74.0060).
  - lang (optional): Language code for localized weather descriptions. Default is en (English).

- **Example Request:**

  `https://weather-web-server-7xqe.onrender.com/api/forecast/coordinates?lat=<latitude>&lon=<longitude>&lang=<Language>`
  <br>

### 5. Get Weather icon (image) representing the weather condition

- Use the `weather` object's `icon` value in the response to fetch weather icons from OpenWeatherMap.
  For example:

- **Example Request:**
  `https://openweathermap.org/img/wn/<icon>@2x.png`


## Usage Notes

1. Ensure you provide a valid `location` query parameter when making requests to the endpoints.
2. The optional lang query parameter allows for localized weather descriptions. If not provided,
   the default language is English (en).
3. The API responses are directly fetched from OpenWeatherMap, including real-time weather data and forecasts.

<br>

## Disclaimer

This project is for educational purposes and aims to provide a solution for students.  
It is not a commercial product, and there is no permission for those who did not receive the repository to use it.  
Unauthorized use of this code or project is prohibit

### Author: Ze`ev Joseph