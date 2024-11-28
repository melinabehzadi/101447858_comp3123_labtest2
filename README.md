
# Weather App

A weather application built using **React**, **OpenWeatherMap API**, and styled with **CSS**. The app fetches and displays current weather, weather details, and a 2-day forecast for a specified city. 

---

## Features

- Search for weather information by city.
- Display current weather details, including temperature, weather condition, and an icon.
- Show additional weather details like humidity, wind speed, pressure, and max/min temperatures.
- Display a 2-day weather forecast with daily temperatures and weather icons.
- Fully responsive and visually appealing UI with a dynamic background.

---

## Screenshots

### Home Screen
<img width="1470" alt="Screenshot of the app 1" src="https://github.com/user-attachments/assets/46c5debf-1679-4aea-88bf-f007e86e0a20">
<img width="1470" alt="Screenshot of the app 2" src="https://github.com/user-attachments/assets/fd7b8b41-e311-4f61-8019-0e13d4504cd0">



**App Setup:**
<img width="1123" alt="App Setup" src="https://github.com/user-attachments/assets/34756ba0-696a-4b0e-aded-7349ca7a16f2">


**Postman Test:**
<img width="1470" alt="Postman Test" src="https://github.com/user-attachments/assets/0a2d0656-719d-4c44-b8be-61e1f483b882">


---

## Technologies Used

- **Frontend**: React
- **API**: OpenWeatherMap API
- **Styling**: CSS (with gradients and responsive layout)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) for weather details

---

## Prerequisites

Before running the project, ensure you have the following:

1. **Node.js**: Installed on your system.
2. **npm or yarn**: Installed to manage dependencies.
3. **API Key**: Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/api).
4. Open http://localhost:3000 to view it in your browser.

---


## API Usage

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

---

## Testing

### Postman
1. Test the API endpoint by sending a `GET` request to:
   ```
   https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=b9c35c1a74b88ea5d260e6d5444473c2
   ```
