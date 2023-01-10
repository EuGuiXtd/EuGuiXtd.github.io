import React, { useState } from 'react';

function cadastros({ history }) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const formValidation = () => {
    const validEmail = email.includes('@') && email.includes('.com');
    const seven = 7;
    return !!(!validEmail || password.length < seven);
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    history.push('/home');
  };
  return (
    <section>
      <label htmlFor="inputsLogin">
        <input id="inputsLogin" placeholder="Email" onChange={handleEmail} />
        <input id="inputsLogin" placeholder="Senha" onChange={handlePassword} />
      </label>
      <button type="button" disabled={formValidation()} onClick={handleClick}>Cadastre-se</button>
    </section>
  );
}

export default cadastros;
