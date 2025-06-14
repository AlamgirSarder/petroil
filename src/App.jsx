import About from "./components/about/About";
import BackToTop from "./components/backtotop/BackToTop";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Maps from "./components/maps/Maps";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Sliderpart from "./components/slider/Sliderpart";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Welcome />
      <Sliderpart />
      <Services />
      <About />
      <Logo />
      <Blog />
      <Maps />
      <Contact />
      <Footer />
      <BackToTop/>

    </>
  );
}
export default App;
