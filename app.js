// Variables declaration
const apiKey = "c3ce0e9d594f462f9b9124241242111";
const searchForm = document.getElementById("search-form");
const currentLocation = document.getElementById("current-location-btn");
const recentCities = JSON.parse(localStorage.getItem("cities")) || [];


// Form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  removeError();
  const locationInput = document.getElementById("city-search").value.trim();

  if (locationInput) {
    fetchWeatherCurrentData(locationInput);
  } else {
    showError("Please enter a valid city name.");
  }
});

// Fetch current data function form api
async function fetchWeatherCurrentData(location) {
  try {
    removeError();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data. Please try again.");
    }
    const data = await response.json();
    updateWeatherUI(data);
    updateForecastUI(data.forecast.forecastday);
    document.getElementById("city-search").value = "";
  } catch (error) {
    showError(error.message);
  }
}

// Update Weather UI

function updateWeatherUI(data) {
  // Access required elements
  const locationName = document.getElementById("location-name");
  const currentDate = document.getElementById("current-date");
  const weatherIcon = document.getElementById("weather-icon");
  const temperature = document.getElementById("temperature");
  const condition = document.getElementById("condition");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const weatherCard = document.getElementById("weather-card");
  const foreCast = document.getElementById("forecast");

  weatherCard.classList.remove("hidden");
  foreCast.classList.remove("hidden");

  // Update recent city
  updateRecentCity(data.location.name);

  // Update elements with API data
  locationName.textContent = data.location.name + ", " + data.location.country;
  currentDate.textContent = new Date(data.location.localtime).toLocaleString();
  weatherIcon.src = `https://${data.current.condition.icon}`;
  weatherIcon.alt = data.current.condition.text;
  temperature.textContent = `${data.current.temp_c}°C`;
  condition.textContent = data.current.condition.text;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  windSpeed.textContent = `Wind: ${data.current.wind_kph} km/h`;
}


// Show Error Messages
function showError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}
function removeError() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.classList.add("hidden");
}

