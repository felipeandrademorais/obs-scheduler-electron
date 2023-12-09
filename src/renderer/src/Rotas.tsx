import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Stop from './pages/Stop';
import ChangeScene from './pages/ChangeScene';
import Home from './pages/Home';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar" element={<Start />} />
        <Route path="/finalizar" element={<Stop />} />
        <Route path="/trocar-cena" element={<ChangeScene />} />
      </Routes>
    </Router>
  );
}
