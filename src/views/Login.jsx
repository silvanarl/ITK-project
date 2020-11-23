import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './Login.scss';
import { signIn } from '../API/auth';

const Login = () => {
  const history = useHistory();
  // const [view, setView] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length > 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const loginSubmit = (event) => {
    event.preventDefault();
        console.log(email);
        console.log(password);
        signIn(email, password)
          .then(() => {
            localStorage.clear();
            localStorage.setItem('user', email);
            history.push('/cliente/recomendaciones');
          })
          .catch((err) => console.log(err));
        return null;
  };
  return (
    <main className="login-main">
      <form action="" className="form-login" onSubmit={loginSubmit}>
        <div className="content-logo">
          <img className="logo-image" src="logo" alt="Logo" />
          <p className="alg-center">Inicia Sesión</p>
        </div>

        {/* <div className="user-role">
          <button
            className="user-button"
            type="button"
            onClick={() => setView('col-price')}
          >
            PwC
          </button>
          <button
            className="user-button"
            type="button"
            onClick={() => setView('client')}
          >
            Cliente
          </button>
        </div> */}
        <div className="container-form">
          <label htmlFor="email">
            <p className="text-label">Correo</p>
            <input
              className="input-form"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="ejemplo@ejemplo.com"
            />
          </label>
          <label htmlFor="password">
            <p className="text-label">Password</p>
            <input
              className="input-form"
              onChange={handleChange}
              type="password"
              name="passsword"
              placeholder="password"
            />
          </label>
          <button type="submit" className="login-button" disabled={disabled}>
            Ingresar
          </button>
          {/* <Link to="">Olvidé mi contraseña</Link> */}
        </div>
      </form>
    </main>
  );
};

export default Login;