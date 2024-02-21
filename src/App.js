import "./App.css";
import Header from "./Header/Header";
import Section from "./Section/Section";
import FooterNav from "./components/FooterNav";
import Text from "./components/UP";
import Hero from "./components/footerHeaader";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Hero />
      <Text />
      <FooterNav />
    </div>
  );
}

export default App;
