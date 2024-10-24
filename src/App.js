import "./App.css";
import Header from "./shared/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />

        <Footer />
      </div>
    </>
  );
}

export default App;
