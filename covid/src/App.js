import "./App.css";
import Navbar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import USAMap from "./component/usamap";
import WorldMap from "./component/worldmap";
import ChinaMap from "./component/chinamap";
import WorldBrokenLine from "./component/worldbrokenline";
import WorldRadarChart from "./component/worldradarchart";
import WorldTopFiveBar from "./component/worldtopfivebar";
import ChinaBrokenLine from "./component/chinabrokenline";
import ChinaRadarChart from "./component/chinaradarchart";
import ChinaTopFivaBar from "./component/chinatopfivebar";
import WorldPieChart from "./component/worldpiechart";
import ChinaPieChart from "./component/chinapiechart";
import USABrokenLine from "./component/usabrokenline";
import USARadarChart from "./component/usaradarchart";
import USATopFiveBar from "./component/usatopfivebar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/worldmap" element={<WorldMap />} />
        <Route path="/usamap" element={<USAMap />} />
        <Route path="/chinamap" element={<ChinaMap />} />
        <Route path="/chinamap" element={<ChinaMap />} />
        <Route path="/worldbrokenline" element={<WorldBrokenLine />} />
        <Route path="/worldradarchart" element={<WorldRadarChart />} />
        <Route path="/worldtopfivebar" element={<WorldTopFiveBar />} />
        <Route path="/worldpiechart" element={<WorldPieChart />} />
        <Route path="/chinabrokenline" element={<ChinaBrokenLine />} />
        <Route path="/chinaradarchart" element={<ChinaRadarChart />} />
        <Route path="/chinatopfivebar" element={<ChinaTopFivaBar />} />
        <Route path="/chinapiechart" element={<ChinaPieChart />} />
        <Route path="/usabrokenline" element={<USABrokenLine />} />
        <Route path="/usaradarchart" element={<USARadarChart />} />
        <Route path="/usatopfivebar" element={<USATopFiveBar />} />
      </Routes>
    </div>
  );
}

export default App;
