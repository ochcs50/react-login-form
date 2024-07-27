import React from 'react';
import './components/LoginForm/LoginForm.css';
import { FaUser,FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>se connecter</h1>

        <div className="input-box">
          <input type="text" placeholder="Nom d'utilisateur" required/>
          <FaUser className='icon'/>
        </div>

        <div className="input-box">
          <input type="password" placeholder='Mot de passe' required/>
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email' required/>
          <MdEmail className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox'/>Mémoriser info</label>
          <a href='#'>Mot de passe oublié?</a>
        </div>
        <button type='submit'>se connecter</button>

        <div className='register-link'>
          <p>vous n'avez pas de compte? <a href='#'>Registrer</a></p>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;

