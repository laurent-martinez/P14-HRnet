import React, { lazy, Suspense } from "react";
import "./fonts/Ubuntu-Medium.ttf";
import "./fonts/SourceSansPro-Bold.ttf";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const Employees = lazy(() => import("./pages/Employees"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Route path="/Employees" element={<Employees />} />
        </Suspense>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
