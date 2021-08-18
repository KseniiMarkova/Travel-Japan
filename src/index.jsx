import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HeaderItemes } from './Components/Header/header';
import { IntroBody } from './Components/Intro/intro';
import { BenefitsBody } from './Components/Benefits/benefits';
import { PlacesBody } from './Components/Places/places';
import { ToursBody } from './Components/Tours/tours';
import { TopPlacesBody } from './Components/Top-places/top-places';
import { VideosBody } from './Components/Videos/videos';
import { FooterItemes } from './Components/Footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <HeaderItemes />
    </header>
    <main className="main">
      <IntroBody />
      <BenefitsBody />
      <PlacesBody />
      <ToursBody />
      <TopPlacesBody />
      <VideosBody />
    </main>
    <footer>
      <FooterItemes />
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
