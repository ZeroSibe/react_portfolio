import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/Navbar";
import { TechStack } from "./components/TeckStack/TechStack";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
