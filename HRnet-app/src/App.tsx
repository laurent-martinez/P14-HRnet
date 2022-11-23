import { lazy, Suspense } from "react";
import "./fonts/Ubuntu-Medium.ttf";
import "./fonts/SourceSansPro-Bold.ttf";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const LazyEmployees = lazy(() => import("./pages/Employees"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />

        <Route
          path="/Employees"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <LazyEmployees />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
