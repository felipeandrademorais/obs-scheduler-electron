import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Start() {
  const [dados, setDados] = useState({
    time: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const resposta = await axios.post('http://localhost:3000/start', dados);
      if (resposta.status === 200) {
        navigate(-1);
      }
    } catch (erro) {
      console.error('Erro ao enviar requisição para a API:', erro);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label> Hora para iniciar </label>
        <input
          type="time"
          name="time"
          value={dados.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Enviar</button>
        <Link to="/"> Cancelar </Link>
      </div>
    </form>
  );
}

export default Start;
