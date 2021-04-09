import React from "react";
// import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import "./App.css";
import Mobile from "./snapshots/Coin_Details_Mobile.jpg";
import Desktop from "./snapshots/Coin_Details_Desktop.jpg";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <div className="projects-cards">
        <Cards
          title="Card Title"
          imageUrl={Mobile}
          body="Consequat officia dolore nostrud non Lorem adipisicing sit. Labore laboris
      consequat laborum sit laboris non ut deserunt eiusmod id nulla mollit
      aliqua id. Duis laborum occaecat pariatur aute. Est aliquip mollit laboris
      reprehenderit Lorem in anim aliqua esse in fugiat. Pariatur dolore dolore
      sunt quis est anim culpa esse sit irure exercitation eu proident.
      Exercitation sit id cupidatat ex incididunt laborum duis et laboris qui
      dolor quis cillum nostrud. Pariatur consequat voluptate pariatur id enim
      tempor Lorem."
        />
        <Cards
          title="Card Title"
          imageUrl={Desktop}
          body="Consequat officia dolore nostrud non Lorem adipisicing sit. Labore laboris
      consequat laborum sit laboris non ut deserunt eiusmod id nulla mollit
      aliqua id. Duis laborum occaecat pariatur aute. Est aliquip mollit laboris
      reprehenderit Lorem in anim aliqua esse in fugiat. Pariatur dolore dolore
      sunt quis est anim culpa esse sit irure exercitation eu proident.
      Exercitation sit id cupidatat ex incididunt laborum duis et laboris qui
      dolor quis cillum nostrud. Pariatur consequat voluptate pariatur id enim
      tempor Lorem."
        />
        <Cards
          title="Card Title"
          imageUrl={Desktop}
          body="Consequat officia dolore nostrud non Lorem adipisicing sit. Labore laboris
      consequat laborum sit laboris non ut deserunt eiusmod id nulla mollit
      aliqua id. Duis laborum occaecat pariatur aute. Est aliquip mollit laboris
      reprehenderit Lorem in anim aliqua esse in fugiat. Pariatur dolore dolore
      sunt quis est anim culpa esse sit irure exercitation eu proident.
      Exercitation sit id cupidatat ex incididunt laborum duis et laboris qui
      dolor quis cillum nostrud. Pariatur consequat voluptate pariatur id enim
      tempor Lorem."
        />
      </div>
      <section className="contact-container">
        <Contact />
      </section>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
}

export default App;
