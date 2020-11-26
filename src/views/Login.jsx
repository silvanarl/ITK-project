import React, { useState } from 'react';
import Style from './login.module.css'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
=======
import interkunaq from '../assets/interkunaq.jpeg';
>>>>>>> 16ddfab5a10f9a8e80bac4367cca8112f649924c
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
      <div className={`${Style.view}`}>
        <div className={`app-header ${Style.col}`}>
        <header className={`app-header ${Style.header}`}>
            <img className={`logo-image ${Style.logo}`} src= 'https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Flogo-interkunaq.png?alt=media&token=891f5866-590e-470d-a225-784811fcb62c' alt="Logo" />  
        </header>
        <main className={`login-main ${Style.logMain}`}>
        <form action="" className={`form-login ${Style.formLogin}`} onSubmit={loginSubmit}>
            <div className={`indicator ${Style.indicatorBox}`}>
            <p className={`${Style.logP}`}>Inicia Sesión</p>
            </div>
            <div className={`${Style.containerForm}`}>
            <label htmlFor="email" >
                <p className={`${Style.label}`}>Correo electrónico</p>
                <input
                className={`${Style.input}`}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="nombre@email.com"
                />
            </label>
            <label htmlFor="password">
                <p className={`${Style.label}`}>Contraseña</p>
                <input
                className={`${Style.input}`}
                onChange={handleChange}
                type="password"
                name="passsword"
                placeholder="contraseña123"
                />
            </label>
            <Link to="/404" className={`${Style.forget}`}>¿Olvidaste tu contraseña?</Link>
            <button type="submit" className={`${Style.btn}`} disabled={disabled}>
                Ingresar
            </button>
            </div>
          </form>
        </main>
        </div>
        <div className={`${Style.banner}`}></div>
      </div>
      //</section>

      
  );
};

export default Login;