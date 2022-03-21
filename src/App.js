import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Expertises from "./components/Expertises";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Map from "./contact/Map";

function App() {
  return (
    <div className="App">
      <Landing />
      <h2 className="rolam">Rólam</h2>
      <AboutMe />
      <h2 className="szak">Szakterületeim</h2>
      <Expertises />
      <h2 className="kapcs">Kapcsolat</h2>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
