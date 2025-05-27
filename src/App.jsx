import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
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
    </>
  );
}

export default App;
