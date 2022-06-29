import "./App.css";
import Navbar from "./Navbar";

// root components- first thing to render
function App() {
  return (
    // the div that's been injected to html
    <div className="App">
      {/* inject navbar into root route */}
      <Navbar />
      <div className="content">
        <h1>Accidentally Vegan</h1>
      </div>
    </div>
  );
}

export default App;
