import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import RouteDashboard from "./routes/RouteDashboard";
import RouteUsers from "./routes/RouteUsers";
import PersistentDrawerLeft from "./components/SideMenu";
import RouteCharacters from "./routes/RoutesCharacters";

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
        </Routes>
      </div>
    </>
  )
}