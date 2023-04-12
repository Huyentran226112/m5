import axios from 'axios';

export default function Home({ weather }) {
  return (
    <div>
      <h1>Weather in Hanoi</h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=${API_KEY}`
  );
  return {
    props: {
      weather: response.data,
    },
  };
}
