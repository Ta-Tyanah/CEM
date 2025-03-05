import "./Login.css";
import { Link} from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

export function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">MEMBRE</h2>
        <label className="login-label"><MdOutlineMail/> Email</label>
        <input
          type="email"
          placeholder="Entrer votre email"
          className="login-input"
        />
        <label className="login-label"><TbLockPassword/> Mot de passe</label>
        <input
          type="password"
          placeholder="Entrer votre mot de passe"
          className="login-input"
        />

        <Link to="/Dashboard">
        <button className="login-button login-button-red">Se connecter</button>
        </Link>
        
        <Link to="/inscription">
        <button className="login-button login-button-white">S'inscrire</button>
        </Link>

        
      </div>
    </div>
  );
}


