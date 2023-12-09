import React, { useState } from 'react';
import axios from 'axios';

function Start() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
  });

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post('SUA_URL_DA_API', dados);
      console.log('Resposta da API:', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar requisição para a API:', erro);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Start;
