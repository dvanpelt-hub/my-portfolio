import React from "react";
import Nav from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import FullStackCard from "../components/FullStackCard/FullStackCard";
import FrontEndCard from "../components/FrontEndCard/FrontEndCard";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import JouleActiveMobile from "../snapshots/Joule_Active_Mobile.JPG";
import CointTossMobile from "../snapshots/Landing_Page_Mobile.jpg";
import PocketStocksMobile from "../snapshots/Pocket_Stocks_Mobile.JPG";
import RentFlow from "../snapshots/Rent_Flow.JPG";
import ReactLogo from "../snapshots/React-Logo.png";
import JSLogo from "../snapshots/JS-Logo.png";
import HTML5Logo from "../snapshots/HTML-5-Logo.png";
import CSS3Logo from "../snapshots/CSS3-Logo.png";
import NodeJSLogo from "../snapshots/NodeJS-Logo.png";
import PSQLLogo from "../snapshots/PSQL-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Landing />
        <About />
        <h2 id="projects" className="my-projects">
          Projects
        </h2>
        <div className="projects-cards">
          <FullStackCard
            title="Joule Active"
            imageUrl={JouleActiveMobile}
            body="Joule Active is a team comprised of gym and fitness enthusiasts whose objective is to provide affordable, quality, and `fresh` looking gear that lets you focus your energy on working out rather than everything else."
            link={"https://joule-active-client.vercel.app/"}
            reactLogo={ReactLogo}
            javascriptLogo={JSLogo}
            HTML5Logo={HTML5Logo}
            CSS3Logo={CSS3Logo}
            NodeJSLogo={NodeJSLogo}
            PSQLLogo={PSQLLogo}
          />
          <FullStackCard
            title="Coin Toss"
            imageUrl={CointTossMobile}
            body="Coin Toss provides users the top seven trending cryptocurrencies on Coin Gecko. They can then cast votes based on whether or not they believe the coin is worth purchasing."
            link={"https://cointoss-client.vercel.app/"}
            reactLogo={ReactLogo}
            javascriptLogo={JSLogo}
            HTML5Logo={HTML5Logo}
            CSS3Logo={CSS3Logo}
            NodeJSLogo={NodeJSLogo}
            PSQLLogo={PSQLLogo}
          />
          <FullStackCard
            title="Pocket Stocks"
            imageUrl={PocketStocksMobile}
            body="Pocket Stocks is a PERN stack application which allows users to view trending stocks and discuss their performance."
            link={"https://pocket-stocks-client.vercel.app/"}
            reactLogo={ReactLogo}
            javascriptLogo={JSLogo}
            HTML5Logo={HTML5Logo}
            CSS3Logo={CSS3Logo}
            NodeJSLogo={NodeJSLogo}
            PSQLLogo={PSQLLogo}
          />
          <FrontEndCard
            title="Rent Flow"
            imageUrl={RentFlow}
            body="Rent-flow provides users the ability to search for rental property comparisons in relation to a specified address. Users can then use the monthly cash-flow calculator to determine their expected profits."
            link={"https://dvanpelt-hub.github.io/Rent-Flow/"}
            javascriptLogo={JSLogo}
            HTML5Logo={HTML5Logo}
            CSS3Logo={CSS3Logo}
          />
        </div>
        <section className="contact-container">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
