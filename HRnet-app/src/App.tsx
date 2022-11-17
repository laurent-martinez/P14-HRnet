import './fonts/Ubuntu-Medium.ttf';
import './fonts/SourceSansPro-Bold.ttf';
import './styles/index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
