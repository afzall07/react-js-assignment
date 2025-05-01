import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Card from './components/cards/Card.jsx';
import Slider from "./components/slider/Slider.js";
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <Slider />
      <Form />
      <Footer />
    </>

  );
}

export default App;
