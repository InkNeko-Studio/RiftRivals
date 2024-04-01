import { Route, Routes } from "react-router-dom";
import RouteDashboard from "./routes/RouteDashboard";
import RouteUsers from "./routes/RouteUsers";
import PersistentDrawerLeft from "./components/SideMenu";
import RouteCharacters from "./routes/RouteCharacters";
import RouteBanners from "./routes/RouteBanners";

export default function Dashboard() {
  return (
    <>
      <PersistentDrawerLeft />
      <div style={{
        width: "calc(100% - 240px)",
        marginLeft: "240px",
      }}>
        <Routes>
          <Route path="/" element={<RouteDashboard />} />
          <Route path="/users" element={<RouteUsers />} />
          <Route path="/characters" element={<RouteCharacters />} />
          <Route path="/banners" element={<RouteBanners />} />
        </Routes>
      </div>
    </>
  )
}