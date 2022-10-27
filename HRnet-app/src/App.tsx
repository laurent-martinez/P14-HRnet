import { HashRouter, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
