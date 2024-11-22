
# 🌤️ Weather Forecast Application

## 📝 Overview
**Weather Update** is a user-friendly weather forecast application that provides accurate, real-time weather updates, extended forecasts, and location-based weather data. Built with **WeatherAPI**, **Tailwind CSS**, and **JavaScript**, this application is responsive and designed to offer an intuitive user experience.

---

## 🌐 Live Demo
View the live application here: [Weather Forecast App](https://weather-update-api.vercel.app/)

---

## ✨ Features
- 🌡️ **Real-Time Weather Updates**:
  - Current temperature, humidity, wind speed, and weather conditions.
- 📅 **5-Day Weather Forecast**:
  - Extended daily forecasts, excluding the current day.
- 📍 **Location-Based Weather**:
  - Fetch weather using the device's current location.
- 🔍 **Search by City**:
  - Type and search for weather data by city name.
- 🕘 **Recent Searches**:
  - Dropdown menu displaying up to 5 recent city searches.
- ⚠️ **Error Handling**:
  - User-friendly error messages for invalid inputs or failed API calls.
- 📱 **Responsive Design**:
  - Optimized for desktop and mobile devices using **Tailwind CSS**.

---

## 🛠️ Technologies Used
- 💻 **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- 🎨 **Styling**: Tailwind CSS
- 🌐 **Weather API**: [WeatherAPI](https://www.weatherapi.com/)
- 🖼️ **Icons**: Weather condition icons provided by WeatherAPI
- 📂 **Storage**: LocalStorage for saving recent searches

---

## 🚀 Installation and Setup

### Prerequisites
- 🌍 Modern web browser (Chrome, Firefox, Edge, etc.)
- 📝 Text editor (e.g., VS Code) for development
- 🔥 Live server for local development (optional)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/prasanthkumarjha/Weather-Update
   ```
2. Navigate to the project folder:
   ```bash
   cd weather-forecast-app
   ```
3. Open `index.html` in a browser or run with a live server.

---

## 📁 File Structure
```
project-root/
│
├── index.html        # Main HTML file
├── style.css         # Tailwind CSS for styling
├── app.js            # Main JavaScript file
├── README.md         # Project documentation
```

---

## 💡 Usage

### 1. 🔍 Search for Weather
- Type a city name in the search box and click "Search."
- The app will fetch and display current weather and a 5-day forecast.

### 2. 📍 Use Current Location
- Click the "Use Current Location" button to fetch weather based on your geolocation.

### 3. 🕘 View Recent Searches
- Recent cities are displayed in a dropdown for quick access.
- Select a city from the dropdown to view its weather details.

---

## 🔗 API Integration
This project fetches weather data from the [WeatherAPI](https://www.weatherapi.com/). Ensure you replace the `apiKey` in `app.js` with your personal API key:
```javascript
const apiKey = "your-api-key-here";
```

---

## 🛠️ Features Breakdown

| 🏷️ **Feature**            | 📝 **Description**                                                                 |
|----------------------------|-----------------------------------------------------------------------------------|
| 🌡️ **Real-Time Weather**    | Displays current weather data such as temperature, humidity, wind speed, and conditions. |
| 📅 **Extended Forecast**    | Shows a 5-day forecast, excluding the current day.                               |
| 📍 **Location-Based Search**| Uses geolocation to fetch weather for the user's current location.               |
| 🕘 **Recent Searches Dropdown** | Lists up to 5 recently searched cities, stored using LocalStorage.               |
| ⚠️ **Error Handling**       | Displays errors for invalid city names or network issues.                        |


---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/9c2644a9-bdec-450b-814e-aee497bba818)
![{8AC43A05-EB29-4B8D-8C5E-FEDB5E2ADB60}](https://github.com/user-attachments/assets/775e8691-2877-4f2e-a647-3e53dd0ed543)



---
