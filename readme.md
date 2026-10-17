# 🌦️ Weather App

A simple and responsive weather application built with **JavaScript, HTML, and CSS**. It allows users to check current weather conditions for any city and view essential weather information through a clean, user-friendly interface.

## ✨ Features

- 🌍 **City-Based Search** — Search for weather conditions in any city.
- 🌡️ **Live Weather Data** — Get current temperature and weather conditions.
- 💧 **Humidity Information** — View the current humidity level.
- 💨 **Wind Speed** — Check the current wind speed.
- ☁️ **Weather Conditions** — View conditions such as sunny, cloudy, rainy, or snowy.
- 📱 **Responsive Design** — Works across desktop and mobile devices.
- ⚡ **Dynamic UI** — Updates weather information based on the selected location.

## 🛠️ Tech Stack

- **HTML5** — Application structure
- **CSS3** — Styling and responsive layout
- **JavaScript (ES6+)** — Application logic and API integration
- **Weather API** — Fetching real-time weather data

## 📂 Project Structure

```text
weather-app/
├── index.html      # Main HTML file
├── style.css       # Application styling
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd weather-app
```

### 3. Configure the Weather API

Get an API key from your chosen weather service, such as [OpenWeather](https://openweathermap.org/api).

Add your API key to the appropriate location in `script.js`.

```javascript
const API_KEY = "YOUR_API_KEY";
```

**Security note:** This approach is suitable for local learning projects. For a publicly deployed application, avoid exposing a secret API key in client-side JavaScript if your provider requires it to remain private. Use a backend proxy instead.

### 4. Run the Application

Open `index.html` in your browser, or use the **Live Server** extension in Visual Studio Code for local development.

## 📸 Screenshots

Add screenshots of your application here.

```markdown
![Weather App Screenshot](./screenshots/weather-app.png)
```

## 🔮 Future Improvements

- [ ] Add a 5-day weather forecast.
- [ ] Display weather icons and animations.
- [ ] Add current-location weather detection.
- [ ] Support Celsius and Fahrenheit conversion.
- [ ] Show sunrise and sunset times.
- [ ] Add loading indicators and error handling.
- [ ] Save recently searched cities.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a pull request.

## 📄 License

This project is available under the MIT License. Add a `LICENSE` file to the repository if you intend to distribute it under that license.

---

**Built with ❤️ using JavaScript.**