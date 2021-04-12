import React from "react";
// import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import FullStackCard from "../components/FullStackCard/FullStackCard";
import FrontEndCard from "../components/FrontEndCard/FrontEndCard";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./App.css";
import CointTossMobile from "../snapshots/Landing_Page_Mobile.jpg";
import PocketStocksMobile from "../snapshots/Pocket_Stocks_Mobile.JPG";
import RentFlow from "../snapshots/Rent_Flow.JPG";
import ReactLogo from "../snapshots/React-Logo.png";
import JSLogo from "../snapshots/JS-Logo.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <div className="projects-cards" id="projects">
        <h2 className="my-projects">Projects</h2>
        <FullStackCard
          title="Coin Toss"
          imageUrl={CointTossMobile}
          body="Coin Toss is an app that provides users a list of the top seven trending cryptocurrencies on Coin Gecko. Users have the ability to cast votes based on whether or not they believe the coin is worth purchasing."
          link={"https://cointoss-client.vercel.app/"}
          reactLogo={ReactLogo}
          javascriptLogo={JSLogo}
        />
        <FullStackCard
          title="Pocket Stocks"
          imageUrl={PocketStocksMobile}
          body="Pocket Stocks is a PERN stack application which allows users to view trending stocks and discuss their performance."
          link={"https://pocket-stocks-client.vercel.app/"}
          reactLogo={ReactLogo}
          javascriptLogo={JSLogo}
        />
        <FrontEndCard
          title="Rent Flow"
          imageUrl={RentFlow}
          body="Rent-flow provides users the ability to search for rental property comps in relation to a specified address. Users can then use the monthly cash-flow calculator to determine their expected profits."
          link={"https://dvanpelt-hub.github.io/Rent-Flow/"}
          javascriptLogo={JSLogo}
        />
      </div>
      <section className="contact-container">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
