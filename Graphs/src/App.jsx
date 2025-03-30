import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import BarCharts from "./pages/bar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<BarCharts />} />
          <Route path="/bar" element={<BarCharts />} />
          {/* <Route path="/box" element={<BoxPlots />} />
          <Route path="/circle" element={<CircleGraphs />} />
          <Route path="/histogram" element={<Histogram />} />
          <Route path="/ogive" element={<Ogive />} />
          <Route path="/pareto" element={<Pareto />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
