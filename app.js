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

// Triggering for current location
currentLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    fetchWeatherCurrentData(`${latitude},${longitude}`);
  }),
    () => showError("Unable to fetch your location. Please try again.");
});

// Fetch current data function form api
async function fetchWeatherCurrentData(location) {
  try {
    removeError(); //Remove previous error
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=6&`
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

  //Show weather UI by removing hidden class
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

// Update Forecast UI
function updateForecastUI(forecastData) {
  const forecastContainer = document.getElementById("forecast-cards");
  forecastContainer.innerHTML = ""; // Clear existing cards

  forecastData.slice(1).forEach((day) => {
    //Scliced the current day forecast
    const forecastCard = document.createElement("div");
    forecastCard.className =
      "bg-white/20 backdrop-blur-md rounded-xl p-4 text-center text-white shadow-lg";

    forecastCard.innerHTML = `
        <p class="text-lg font-medium">${new Date(
          day.date
        ).toLocaleDateString()}</p>
        <img
          src="https:${day.day.condition.icon}"
          alt="${day.day.condition.text}"
          class="w-16 h-16 mx-auto my-2"
        />
        <p class="text-2xl font-bold">${day.day.avgtemp_c}°C</p>
        <p class="text-gray-300">Wind: ${day.day.maxwind_kph} km/h</p>
        <p class="text-gray-300">Humidity: ${day.day.avghumidity}%</p>
      `;

    forecastContainer.appendChild(forecastCard);
  });
}

// Show Error Messages
function showError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}
// Removes Error Message
function removeError() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.classList.add("hidden");
}

// Update recent city
function updateRecentCity(city) {
  if (!recentCities.includes(city)) {
    if (recentCities.length >= 5) {
      recentCities.shift();
    }
    recentCities.push(city);
    localStorage.setItem("cities", JSON.stringify(recentCities));
    renderRecentCities();
  }
}

// Display Recent city
function renderRecentCities() {
  const dropdown = document.getElementById("recent-cities-dropdown");
  dropdown.innerHTML = "";

  if (!recentCities.length) {
    dropdown.classList.add("hidden");
    return;
  } else {
    dropdown.classList.remove("hidden");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "Recent Cities";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    recentCities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.innerText = city;
      dropdown.appendChild(option);
    });

    dropdown.onchange = (e) => {
      const selectedCity = e.target.value;
      if (selectedCity) {
        fetchWeatherCurrentData(selectedCity);
      }
    };
  }
}

renderRecentCities(); //Render cities on load
