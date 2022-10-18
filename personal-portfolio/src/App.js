import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
