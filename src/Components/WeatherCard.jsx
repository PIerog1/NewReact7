function WeatherCard({ city, temperature, conditions, warning }) {

  let icon;

  if (conditions === "sunny") {
    icon = "☀️";
  } else if (conditions === "rainy") {
    icon = "🌧️";
  } else {
    icon = "☁️";
  }


  const label =
    conditions === "sunny"
      ? "Słonecznie"
      : conditions === "rainy"
      ? "Deszczowo"
      : "Pochmurno";

  return (
    <div className="weather-card">
      <h2>
        {icon} {city}, {temperature}°C
      </h2>

      <p>{label}</p>

      {warning && (
        <div className="warning">
          ⚠️ OSTRZEŻENIE: {warning}
        </div>
      )}
    </div>
  );
}

export default WeatherCard;