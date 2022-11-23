import React, { lazy, Suspense } from "react";
import "./fonts/Ubuntu-Medium.ttf";
import "./fonts/SourceSansPro-Bold.ttf";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Employees = lazy(() => import("./pages/Employees"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Route path="/" element={<Register />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="*" element={<NotFound />} />
        </Suspense>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
