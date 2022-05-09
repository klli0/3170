import "./App.css";
import Navbar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import USAMap from "./component/usamap";
import WorldMap from "./component/worldmap";
import ChinaMap from "./component/chinamap";
import WorldBrokenLine from "./component/worldbrokenline";
import WorldTopFiveBar from "./component/worldtopfivebar";
import ChinaBrokenLine from "./component/chinabrokenline";
import ChinaRadarChart from "./component/chinaradarchart";
import ChinaTopFivaBar from "./component/chinatopfivebar";
import WorldPieChart from "./component/worldpiechart";
import ChinaPieChart from "./component/chinapiechart";
import USABrokenLine from "./component/usabrokenline";
import USATopFiveBar from "./component/usatopfivebar";
import China from "./component/china";
import USA from "./component/usa";
import World from "./component/world";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/china" element={<China />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/world" element={<World />} />
        <Route path="/worldmap" element={<WorldMap />} />
        <Route path="/usamap" element={<USAMap />} />
        <Route path="/chinamap" element={<ChinaMap />} />
        <Route path="/chinamap" element={<ChinaMap />} />
        <Route path="/chinaradarchart" element={<ChinaRadarChart />} />
      </Routes>
    </div>
  );
}

export default App;
