import React, { useState } from 'react';
import Swal from 'sweetalert2';

function login({ history }) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const usuarios = JSON.parse(localStorage.getItem('user'));

  const registerClick = () => {
    history.push('/cadastros');
  };

  const handleClick = async () => {
    if (usuarios === null) {
      const ret = await Swal.fire({
        title: 'Error!',
        text: 'Usuario Não Cadastrado',
        icon: 'error',
        confirmButtonText: 'cadastrar',
        cancelButtonText: 'cancelar',
        showCancelButton: true,
      });
      if (ret.isConfirmed) {
        history.push('/cadastros');
      }
    } else if (usuarios.email === email && usuarios.password === password) {
      history.push('/home');
    }
  };

  return (
    <section>
      <label htmlFor="inputsLogin">
        <input id="inputsLogin" placeholder="Email" onChange={handleEmail} />
        <input id="inputsLogin" placeholder="Senha" onChange={handlePassword} />
      </label>
      <button type="button" onClick={handleClick}>Entrar</button>
      <button type="button" onClick={registerClick}>Cadastre-se</button>
    </section>
  );
}

export default login;
