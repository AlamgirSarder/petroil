import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Maps from "./components/maps/Maps";
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
      <Logo />
      <Blog />
      <Maps />
      <Contact />

    </>
  );
}
export default App;
