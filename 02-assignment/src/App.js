import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/slider/Slider";
import ParentCard from "./components/cards/parentCard.js";
import ContactUs from "./components/contactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from "react-dom/client";
import Layout1 from "./pages/loayouts/layout1/layout1.js";
import Home from "./pages/home/Home.js";
import About from "./pages/aboutUs/About.js";
import Service from "./pages/services/Service.js";

function App() {
  // const cards = [
  //   {
  //     title: "Card Title 1",
  //     description: "This is a description for card 1.",
  //     imageUrl: "https://via.placeholder.com/150"
  //   },
  //   {
  //     title: "Card Title 2",
  //     description: "This is a description for card 2.",
  //     imageUrl: "https://via.placeholder.com/150"
  //   },
  //   {
  //     title: "Card Title 3",
  //     description: "This is a description for card 3.",
  //     imageUrl: "https://via.placeholder.com/150"
  //   }
  // ]
  return (
    <>
      {/* <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div> */}

      {/* ================================= */}

      {/* <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Slider />
        <ParentCard />
        <ContactUs />
        
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout1 />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/servicePage" element={<Service />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
