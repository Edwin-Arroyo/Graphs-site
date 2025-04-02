import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import BarCharts from "./pages/bar";
import BoxPlots from "./pages/box";
import CircleGraphs from "./pages/circle";
import Histogram from "./pages/histogram";
import Pareto from "./pages/pareto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<BarCharts />} />
          <Route path="/bar" element={<BarCharts />} />
          <Route path="/box" element={<BoxPlots />} />
          <Route path="/circle" element={<CircleGraphs />} />
          <Route path="/histogram" element={<Histogram />} />
          <Route path="/pareto" element={<Pareto />} />
          {/*<Route path="/ogive" element={<Ogive />} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
