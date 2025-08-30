import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Plans } from "./pages/Plans.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import { LinkManagement } from "./pages/LinkManagement.jsx";
import { BrandednCustomizedLinks } from "./pages/Branded.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="Plans/" element={<Plans />}></Route>
      <Route path="Blogs/" element={<Blogs />}></Route>
      <Route path="LinkManagement/" element={<LinkManagement />}></Route>
        <Route path="Branded/" element={<BrandednCustomizedLinks />}></Route>
    </Routes>
  </BrowserRouter>
);
