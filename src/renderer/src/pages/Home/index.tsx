import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>OBS Scheduler</h1>
      <div className="Hello">
        <Link to="/iniciar">
          <button type="button">Iniciar</button>
        </Link>
        <Link to="/finalizar">
          <button type="button">Finalizar</button>
        </Link>
        <Link to="/trocar-cena">
          <button type="button">Troca de Cena</button>
        </Link>
      </div>
    </div>
  );
}
