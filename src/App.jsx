import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import WeatherCard from "./components/WeatherCard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
    <h2>Zadanie 7.3</h2>
    <div className="container">
      <WeatherCard
        city="Kraków"
        temperature={15}
        conditions="sunny"
      />

      <WeatherCard
        city="Gdańsk"
        temperature={8}
        conditions="rainy"
        warning="Możliwe burze"
      />

      <WeatherCard
        city="Warszawa"
        temperature={12}
        conditions="cloudy"
        warning="Silny wiatr"
      />
    </div>

    <h2>Zadanie 7.4</h2>

    <div className="container">
      <UserProfile
        name="MercuryMarket"
        email="MercuryMarket@example.com"
        bio="React."
        website="https://mercuryMarket.dev"
        isPremium={true}
        followerCount={1337}
      />

      <UserProfile
        name="Elzbieta"
        email="anna@example.com"
        isPremium={false}
        followerCount={69}
      />

      <UserProfile
        name="TomekPL"
        email="piotr@example.com"
        bio="Programista full-stack."
        isPremium={true}
        followerCount={67}
      />
    </div>
    </>
  );
}

export default App;