import "./App.css";
import Header from "./components/Header/Header";
import RockRoll from "./components/BodyRoll/RockRoll";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RockRoll />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
