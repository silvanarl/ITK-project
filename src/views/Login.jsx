import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import interkunaq from '../assets/interkunaq.jpeg';
import { signIn } from '../API/auth';
import '../components/general/loginStyled.css';
import firebase from '../firebase.config.js'; 
import 'firebase/storage';
const storage = firebase.storage()
console.log (storage)
let pathReference = storage.ref('assets');

let spaceRef =  pathReference.child('img-banner.png').getDownloadURL().then(url => {
let url2=url 

return url2})
console.log(spaceRef)


const Login = () => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);
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
            history.push('/menu');
          })
          .catch((err) => console.log(err));
        return null;
  };
  return (
    <section className="background">

      <div>
        <header className="App-header">
            <img className="logo-image" src={interkunaq} alt="Logo" />  
        </header>
        <main className="login-main">
          <form action="" className="form-login" onSubmit={loginSubmit}>
            <div className="content-logo">
              <p className="alg-center">Inicia Sesión</p>
            </div>
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

      </div>
      </section>

      
  );
};

export default Login;