import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Welcome />
      <Slider />
      <Services />
      <About />
    </>
  );
}

export default App;
