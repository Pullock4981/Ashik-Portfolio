import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
// import Portfolio from "./Components/Portfolio/Portfolio";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;