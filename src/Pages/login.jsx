import React, { useState } from 'react';

function login({ history }) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const usuarios = [{
    id: 1,
    email: 'joao@gmail.com',
    senha: 'joao123',
  }, {
    id: 2,
    email: 'leo@gmail.com',
    senha: 'leo1234',
  }, {
    id: 3,
    email: 'luis@gmail.com',
    senha: 'luis123',
  }, {
    id: 4,
    email: 'lorena@gmail.com',
    senha: 'lorena1',
  }, {
    id: 5,
    email: 'vaca@gmail.com',
    senha: 'vaca123',
  }, {
    id: 6,
    email: 'bruno@gmail.com',
    senha: 'bruno12',
  }, {
    id: 1,
    email: 'rafael@gmail.com',
    senha: 'rafael1',
  }];

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const logins = usuarios.find((usuario) => usuario.email === email && usuario.senha === password);

  const handleClick = () => {
    history.push('/home');
  };

  const formValidation = () => {
    if (logins === undefined) {
      return true;
    } return false;
  };

  const registerClick = () => {
    history.push('/cadastros');
  };
  return (
    <section>
      <label htmlFor="inputsLogin">
        <input id="inputsLogin" placeholder="Email" onChange={handleEmail} />
        <input id="inputsLogin" placeholder="Senha" onChange={handlePassword} />
      </label>
      <button type="button" disabled={formValidation()} onClick={handleClick}>Entrar</button>
      <button type="button" onClick={registerClick}>Cadastre-se</button>
    </section>
  );
}

export default login;
