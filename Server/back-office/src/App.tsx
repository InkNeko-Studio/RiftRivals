//App.js

import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}